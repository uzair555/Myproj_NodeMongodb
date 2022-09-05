const MangoClient=require('mongodb').MongoClient;

// const url='mongodb+srv://uzairKorai:1aWt61uuDXRAtEh9@cluster0.3m7idxm.mongodb.net/?retryWrites=true&w=majority'
const url='mongodb+srv://uzair:7LPIWyg6eNTOItYB@cluster0.frq8b46.mongodb.net/?retryWrites=true&w=majority'
const createProduct= async (req,res,next)=>{

    const newProduct={
        name:req.body.name,
        price:req.body.price
    }

    const client= new MangoClient(url);

    try {
        await client.connect();
        const db=client.db("test"); 
        // const result = db.collection('products').insertOne(newProduct)
        const result= db.collection('products').insertOne(newProduct);
        console.log("Result",result)
    } catch (error) {
        return res.json({message:'Could not store Data'})
    }

    // client.close();
    setTimeout(() => {client.close()}, 1500)


    res.json(newProduct)


}

const getProduct= async (req,res,next)=>{
    const client=new MangoClient(url);

    let products;
    try {
        await client.connect()
        const db=client.db("test");
         products = await db.collection('products').find().toArray();
         console.log(products)
    } catch (error) {

        return res.json({message:'Could not retrieve products'})
        
    } 
    setTimeout(() => {client.close()}, 1500)

    res.json(products)

    
}

exports.createProduct=createProduct;
exports.getProduct=getProduct;