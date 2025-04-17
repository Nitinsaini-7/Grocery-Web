import Order from "../models/order";
import Product from "../models/product";

export const placeOrderCOD = async (req, res)=>{
    try {
        const {userId, items, address} = req.body;
        if(!address || items.length === 0){
            return res.json({success:false, message:"invalid data"})
        }
        let amount = await items.reduce(async (acc, item)=>{
            const product = await Product.findById(item.product);
            return (await acc) + productById.offerPrice * item.qunatity;
        }, 0)

        // add tax charges
        amount += Math.floor(amount * 0.02)
        await Order.create({
            userId,
            items,
            amount,
            address,
            paymentType:"COD"
        })

        return res.json({success:true, message:"Order placed succ"})
    } catch (error) {
        return res.json({success:false, message:error.message})
    }
}

export const getUserOrders = async (req, res)=>{
    try {
        
    } catch (error) {
        
    }
}