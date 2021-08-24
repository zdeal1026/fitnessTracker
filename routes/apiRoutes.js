const db = require("../models");
const router = require("express").Router();

//getting workouts
router.get("/api/workouts", (req, res) => {
    db.workouts.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  //getting workout for past week
  router.get("/api/workouts/range", ({}, res) => {
    db.Workout.find({}).then((dbWorkout) => {
      res.json(dbWorkout);
    }).catch(err => {
      res.status(400).json(err);
    });
  });

  //create new workout

  router.post("/api/workouts", (req,res) => {
      db.workouts.create(req.body)
      .then((workout) => {
          res.json(workout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  //update workout
  




  module.exports = router