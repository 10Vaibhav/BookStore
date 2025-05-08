const Order = require("./order.model")

const createAOrder = async (req, res) => {

    try{
        const newOrder = await Order.create(req.body);
        const savedOrder = await newOrder.save();
        res.status(200).send(savedOrder);
    }catch(error){
        console.error("Error creating order", error);
        res.status(500).json({message: "Failed to create Order!"});
    }
}

module.exports = {
    createAOrder
}