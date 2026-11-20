import express from 'express';
import { products } from './data.js';

const app = express();

app.get("/api/products",(req,res)=>{

     let sortedProducts = products.map(({name,image,price,id})=>({
        name,
        image,
        price,
        id,
     }));
     res.status(200).json({count:sortedProducts.length,data:sortedProducts})
});

// get all details of particular products
app.get("/api/products/:pid",(req,res)=>{
     const {pid}=req.params;
     const item =products.find((p)=>p.id=== Number(pid))
     if(!item)
     {
        res.status(200).json({msg:`Product with id ${pid} not found`});
     }
     else{
        res.status(200).json({msg: "Product found", data: item});
     }
})


app.use((req,res)=>{
    app.status(404).send("<h1>Page Not Found");
})

app.listen(4444,(req,res)=>{
    console.log("prg4 is running at port:4444");
})