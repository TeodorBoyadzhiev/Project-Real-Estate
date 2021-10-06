const { apartmentModel, userModel } = require('../models');

function getApartments(req, res, next) {
    apartmentModel.find()
        .populate('userId')
        .then(apartments => res.json(apartments))
        .catch(next);
}

function getApartment(req, res, next) {
    const { apartmentId } = req.params;

    apartmentModel.findById(apartmentId)
        .populate({
            path: 'comments',
            populate: {
                path: 'userId'
            }
        }).populate('rented userId')
        .then(apartment => res.json(apartment))
        .catch(next);
}

function getLatestsApartments(req, res, next) {

    apartmentModel.find()
        .sort({ created_at: -1 })
        .limit(3)
        .populate('themeId userId')
        .then(apartments => {
            res.status(200).json(apartments);
        })
        .catch(next);
}

function createApartment(req, res, next) {
    const { description, location, price, imageUrl } = req.body;
    const { _id: userId } = req.user;

    apartmentModel.create({ description, location, price, imageUrl, userId })
        .then(apartment => {
            res.status(200).json(apartment);
        })
        .catch(next);
}

function editApartment(req, res, next) {
    const { description, location, price, imageUrl } = req.body;
    const { apartmentId } = req.params;

    apartmentModel.findByIdAndUpdate(apartmentId, { description, location, price, imageUrl }, { runValidators: true, new: true })
        .then(apartment => {
            res.status(200).json(apartment);
        })
        .catch(next);
}

function rent(apartmentId, userId) {

    return Promise.all([
        apartmentModel.findByIdAndUpdate({ _id: apartmentId }, { $push: { rented: userId } }, { new: true }),
        userModel.findByIdAndUpdate({ _id: userId }, { $push: { rentedApartments: apartmentId } }, { new: true })
    ]);

}

function rentApartment(req, res, next) {
    const { _id: userId } = req.user;
    const { apartmentId } = req.params;
    

    rent(apartmentId, userId)
        .then(([_, updatedApartment]) => res.status(200).json(updatedApartment))
        .catch(next);
}

function deleteApartment(req, res, next) {
    const { apartmentId } = req.params;

    apartmentModel.findByIdAndDelete(apartmentId)

        .then(apartment => res.json(apartment))
        .catch(next);
}


module.exports = {
    getApartments,
    createApartment,
    getApartment,
    editApartment,
    deleteApartment,
    getLatestsApartments,
    rentApartment
};
