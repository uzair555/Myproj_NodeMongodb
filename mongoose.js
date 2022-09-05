const mongoose=require('mongoose');

const Product=require('./models/product');

mongoose.connect('mongodb+srv://uzair:7LPIWyg6eNTOItYB@cluster0.frq8b46.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log('Connected to database')
}).catch(()=>{
    console.log("Connection Failed")
})

const createProduct=async(req,res,next)=>{
    const createdProduct=new Product({
        name:req.body.name,
        price:req.body.price
    });

    const result = await createdProduct.save()
console.log(typeof createdProduct._id)

    res.json(result)
};

const getProducts=async (req,res,next)=>{

    const products=await Product.find().exec()

    res.json(products);
     
}

exports.createProduct=createProduct;
exports.getProducts=getProducts;
