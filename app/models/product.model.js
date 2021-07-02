module.exports = mongoose => {
    const Product = mongoose.model(
        "product",
        mongoose.Schema({
            title: String,
            description: String,
            price: Number
        },
        {timestamps: true})
    )
    return Product;
}