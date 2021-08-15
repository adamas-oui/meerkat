const express = require("express");
const router = express.Router();
const Profile = require("../models/updateProfileModel");

router.route("/create").post((req, res) => {
  const newPhone = req.body.newPhone;
  const newRestaurant = req.body.newRestaurant;
  const newProfile = new Profile({
    newPhone,
    newRestaurant
  });
  newProfile.save();
})

// //send from the backend to the Profile model on mongodb
// router.route("/mydashboard").get((req, res) => {
//   Profile.find().then(foundProfiles => res.json(foundProfiles))
// })

module.exports = router; 