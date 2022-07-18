const mongoose = require("mongoose")
// Connection URL

mongoose.connect('mongodb://localhost:27017/fruitDB',);


const fruitSchema= new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
})

 const fruits= mongoose.model("fruitDetails",fruitSchema)

  const fruit= new fruits({
    name: "Apple",
    rating: 6,
    review: "green apple"
  })

console.log('hello');
// // insert document
// const insertDocuments = function(db, callback) {
//   // Get the documents collection
//   const collection = db.collection('fruits');
//   // Insert some documents
//   collection.insertMany([
//     {
//       name:"Orange",
//       score: 12,
//       review: "sour fruit"
//     },
//     {
//       name:"guava",
//       score: 13,
//       review: "tasty"
//     },
//     {
//       name:"Pomegranate",
//       score: 14,
//       review: "red fruit"
//     }
//   ], function(err, result) {
//     assert.equal(err, null);
//     assert.equal(3, result.insertedCount);
//     assert.equal(3, Object.keys(result.insertedIds).length);
//     console.log("Inserted 3 documents into the collection");
//     callback(result);
//   });
// }


// //find all documents 

// const findDocuments = function(db, callback) {
//   // Get the documents collection
//   const collection = db.collection('fruits');
//   // Find some documents
//   collection.find({}).toArray(function(err, fruits) {
//     assert.equal(err, null);
//     console.log("Found the following records");
//     console.log(fruits)
//     callback(fruits);
//   });
// }

// //find with Query 
// const findOneDocuments = function(db, callback) {
//   // Get the documents collection
//   const collection = db.collection('fruits');
//   // Find some documents
//   collection.find({name: 'Banana', score:6}).toArray(function(err, fruits) {
//     assert.equal(err, null);
//     console.log("Found the following records");
//     console.log(fruits);
//     callback(fruits);
//   });
// }