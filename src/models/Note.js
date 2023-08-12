const mongoose = require('mongoose');
//Step 1: Create Schema
const noteSchema = mongoose.Schema({
   id: {
    type: String,
    unique: true,
    required: true
   },
   userid: {
    type: String,
    required: true,
   },
   title: {
    type: String,
   },
   content: {
      type: String,
     },
   dateAdded: {
    type: Date,
    default: Date.now,
   },
});

//Step 2: Creating model using Schema and export the schema.

module.exports = mongoose.model("Note", noteSchema);
