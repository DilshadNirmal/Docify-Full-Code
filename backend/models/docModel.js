const mongoose = require('mongoose');

// mongodb+srv://Lamrin:<db_password>@cluster0.fcpt0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
mongoose.connect("mongodb+srv://Lamrin:Dahslid0220@cluster0.fcpt0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const docSchema = mongoose.Schema({
  title: String,
  content: {
    type: String,
    default: ""
  },
  uploadedBy: String,
  date: {
    type: Date,
    default: Date.now
  },
  lastUpdate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Document', docSchema);
