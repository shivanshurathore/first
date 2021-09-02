const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/mydb";
const bodyParser = require("body-parser");
const cors = require("cors");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());

// MongoClient.connect(url, (err, db) => {
//   if (err) throw err;
//   console.log("Database created!");
//   //   db.close();
// });

app.get("/createCollection", function (req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    // dbo.createCollection("customers", function (err, res) {
    //   if (err) throw err;
    //   console.log("Collection created!");
    //   db.close();
    // });

    dbo.createCollection("employees", function (err, result) {
      if (err) throw err;
      console.log("Collection created!");
      res.send("Collection created!");
      db.close();
    });
  });
});

app.post("/employee", (req, res) => {
  let empObj = req.body;
  // console.log(req.body);

  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db("mydb");
    dbo.collection("employees").insertOne(empObj, function (err, result) {
      if (err) throw err;
      res.send("1 employee inserted");
      db.close();
    });
  });
});

app.get("/employee", (req, res) => {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");

    dbo
      .collection("employees")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send(result);
        db.close();
      });
  });
});

app.post("/customer", (req, res) => {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    // var myobj = { name: "Company Inc", address: "Highway 37" };
    // dbo.collection("customers").insertOne(myobj, function (err, result) {
    //   if (err) throw err;
    //   console.log("1 document inserted");
    //   res.send("1 document inserted");
    //   db.close();
    // });

    var myobj = [
      { name: "John", address: "Highway 71" },
      { name: "Peter", address: "Lowstreet 4" },
      { name: "Amy", address: "Apple st 652" },
      { name: "Hannah", address: "Mountain 21" },
      { name: "Michael", address: "Valley 345" },
      { name: "Sandy", address: "Ocean blvd 2" },
      { name: "Betty", address: "Green Grass 1" },
      { name: "Richard", address: "Sky st 331" },
      { name: "Susan", address: "One way 98" },
      { name: "Vicky", address: "Yellow Garden 2" },
      { name: "Ben", address: "Park Lane 38" },
      { name: "William", address: "Central st 954" },
      { name: "Chuck", address: "Main Road 989" },
      { name: "Viola", address: "Sideway 1633" },
    ];
    dbo.collection("customers").insertMany(myobj, function (err, result) {
      if (err) throw err;
      console.log("Number of documents inserted: " + result.insertedCount);
      res.send("Number of documents inserted: " + result.insertedCount);
      db.close();
    });
  });
});

app.get("/customer", (req, res) => {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    // dbo.collection("customers").findOne({}, function (err, result) {
    //   if (err) throw err;
    //   console.log(result.name);
    //   res.send(result);
    //   db.close();
    // });

    dbo
      .collection("customers")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send(result);
        db.close();
      });
  });
});

const port = 2410;

app.listen(port);
