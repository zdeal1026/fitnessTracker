const db = require("../models");
const router = require("express").Router();
const Workout = require("../models/workout.js")


//gets all workouts
router.get("/api/workouts", (req, res) => {
  Workout.aggregate([{ $set: { 
    totalDuration: { $sum: "$exercises.duration" },
  }},
])
  .then((workouts) => {
    res.json(workouts);
  })
  .catch((err) => {
    res.status(400).json(err);
  })});


//posts new workout
router.post("/api/workouts", (req, res) => {
  Workout.create(req.body)
  .then((workout) => {
    res.json(workout);
  })
  .catch((err) => {
    res.status(400).json(err);
  });
});

//updates workout with id
router.put("/api/workouts/:id", (req, res) => {
  Workout.findOneAndUpdate(
    { _id: req.params.id },
    { $push: { exercises: req.body } },
    { new: true }
  ).then((workout) => {
    res.json(workout);
  })
  .catch((err) => {
    res.status(400).json(err);
  });
});

//gets weeks workout
router.get("/api/workouts/range", (req, res) => {
  Workout.aggregate([
    {
    $set: {
      totalDuration: { $sum : "$exercises.duration"},
    },
  },
]  
  ).sort({ "day": -1 })
  .limit(7)
  
  .then((workouts) => {
    workouts.reverse();
    res.json(workouts);
  })
  .catch((err) => {
    res.status(400).json(err);
  });
});

module.exports = router;