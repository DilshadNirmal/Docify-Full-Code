var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI);

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: String,
    username: String,
    isBlocked: {
      type: Boolean,
      default: false
    },
    isAdmin: {
      type: Boolean,
      default: false
    },
    date: {
      type: Date,
      default: Date.now
    }
});

module.exports = mongoose.model("User", userSchema);
