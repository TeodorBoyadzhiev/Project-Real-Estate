export interface IApartment {
    description: String,
    location: String,
    price: Number,
    imageUrl: String,
    comments: any[],
    userId: {
        username: String,
        email: String,
        password: String,
        _id: String
    },
    _id: String
};