const express = require("express")
const collection = require("./mongo.js")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



app.get("/",cors(),(req,res)=>{
    res.json("hihi");
})

app.get("/api/products/all", async(req, res) => {
    try{
        const datas = await collection.product.find({});
        console.log(datas);
        const result =  datas.map((x) => {
            return {
                id: x._id,
                winery: x.winery,
                wine: x.wine,
                price: x.price,
                image: x.image
            }
        });
        res.json(result);
    }catch(err) {
        console.log(err);
    }
})


app.post("/",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection.user.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})



app.post("/signup",async(req,res)=>{
    console.log("123")
    const{email,password,username}=req.body

    const data={
        email:email,
        password:password,
        username:username
    }

    try{
        const check=await collection.user.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.user.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

});

app.post('/api/orders', async (req, res) => {
    try {
        const {user, items, totalPrice}  = req.body;
        const newOrder = new collection.order({
            user, items, totalPrice, status: 'Pending', createdAt: new Date(),
        });
        const saveOrder = await newOrder.save();
        res.status(201).json(saveOrder);
    }catch(err) {
        res.status(500).json({error: "Internal server error" + err});
    }
})

app.listen(8000,()=>{
    console.log("port connected");
})
