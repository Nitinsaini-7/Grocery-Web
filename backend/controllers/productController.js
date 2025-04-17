import {v2 as cloudinary} from "cloudinary";
import Product from "../models/product.js";


// add product
export const addProduct = async (req, res) => {
  try {
    let productData = JSON.parse(req.body.productData);

    const images = req.files;

    let imagesUrl = await Promise.all(
      images.map(async (image) => {
        const result = await cloudinary.uploader.upload(image.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );
    await Product.create({
      ...productData,
      image: imagesUrl,
    });
    res.json({success:true, message:"product Added"})

  } catch (error) {
    res.json({success:false, message:error.message})
  }
};

// get all products
export const productList = async (req, res) => {
    try {
        const products = await Product.find({})
        res.json({success:true, products})
    } catch (error) {
        res.json({success:false, message:error.message})
    }
};

// get single product
export const productById = async (req, res) => {
    try {
        const {id} = req.body
        const product = await Product.findById(id)
        res.json({success:true, product})
    } catch (error) {
        res.json({success:false, message:error.message})
        
    }
};

// change product status
export const changeStock = async (req, res) => {
    try {
        const {id, inStock} = req.body;
        await Product.findByIdAndUpdate(id, {inStock})
        res.json({success:true, message:"Stock Updated"})
    } catch (error) {
        res.json({success:false, message:error.message})
        
    }
};
