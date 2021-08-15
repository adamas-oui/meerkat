const mongoose = require("mongoose");

const profileSchema = {
  newPhone: String,
  newRestaurant: String
}

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;