const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()
const port = process.env.PORT || 5001;

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// middleware
app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://${process.env.USER_DB}:${process.env.USER_PASS}@cluster0.merbl3v.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {

    const allProductsCollection = client.db("esl-shop").collection("all-collection");

    // creating index for search
    const indexKey = {name: 1}
    const indexOption = {name: "name"}

  const result = await allProductsCollection.createIndex(indexKey, indexOption);

  // search by name
  app.get('/searchproducts/:text', async(req, res) => {
    const searchedText = req.params.text;
    const result = await allProductsCollection.find({
      $or: [
        {name: {$regex: searchedText, $options: "i"}}
      ]
    }).toArray()
    res.send(result)
  })

    

//insert data to database
    app.post('/addproducts', async (req, res) => {
      const data = req.body;
      const result = await allProductsCollection.insertOne(data);
      console.log(data);
      res.send(result)
    })  


// get all data
    app.get("/allproducts/:text", async(req, res) => {
      const category = req.params.text;
      if(category === 'ESL' || category === "Nike" || category === "Adidas" || category === "Puma" || category === "Champion" || category === "Armani"){
        const result = await allProductsCollection.find({subCategory: category}).toArray();
        return res.send(result)
      } 
        const result = await allProductsCollection.find().limit(20).toArray()
        res.send(result)
    })

    //get user data by email 
    app.get('/myproducts', async(req, res) => {
      const email = req.query.email;
      const query = {email: email};
      const sort = {price: req.query.sort}
      const result = await allProductsCollection.find(query).sort(sort).toArray();
      res.send(result)
    })


// get single data
    app.get('/productdetails/:id', async(req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const result = await allProductsCollection.findOne(filter);
      res.send(result)
    })


// delete data
    app.delete('/myproducts/:id', async (req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const result = await allProductsCollection.deleteOne(filter)
      res.send(result)
    })

// update data
    app.patch('/updateproduct/:id', async (req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const body = req.body;
      const updateProduct = {
        $set: {
          name: body.name,
          price: body.price,
          availableQuantity: body.availableQuantity,
          detailDescription: body.detailDescription,
          subCategory: body.subCategory,
          pictureURL: body.pictureURL
        }
      }
      const result = await allProductsCollection.updateOne(filter, updateProduct);
      res.send(result)
    })

    // add to cart
    const cartsCollection = client.db("esl-shop").collection("carts");

    app.get('/carts', async(req, res) => {
      console.log(req.query);
      const userId = req.query.userId;
      console.log(userId);
      const query = {userId: userId};

      const result = await cartsCollection.find(query).toArray();
      res.send(result)
    })

    // Add to cart
    app.post('/addtocart', async (req, res) => {
      const data = req.body;
      const result = await cartsCollection.insertOne(data); 
      console.log(data);
      res.send(result);
    });

    // Remove from cart
    app.delete('/removefromcart/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await cartsCollection.deleteOne(filter); 
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}


app.get('/', (req, res) => {
  res.send("Server Started")
});

app.listen(port, () => {
  console.log("server Started");
})

// export express api
module.exports = app
run().catch(console.dir);
