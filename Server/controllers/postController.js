const { apartmentModel, postModel } = require('../models');

function newPost(comment, userId, apartmentId) {
    return postModel.create({ comment, userId, apartmentId })
        .then(comment => {
            return Promise.all([
                apartmentModel.findByIdAndUpdate({ _id: apartmentId }, { $push: { comments: comment._id } }, { new: true })
            ]);
        });
}


function createPost(req, res, next) {
    const { apartmentId } = req.params;
    const { _id: userId } = req.user;
    const { comment } = req.body;
    console.log(apartmentId, userId, comment)


    newPost(comment, userId, apartmentId)
        .then(([_, updatedApartment]) => res.status(200).json(updatedApartment))
        .catch(next);
}


module.exports = {
    newPost,
    createPost
};
