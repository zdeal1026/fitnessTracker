const db = require("../models");
const router = require("express").Router();

//getting workouts
router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
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
      db.Workout.create(req.body)
      .then((dbWorkout) => {
          res.json(workout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  //update workout

router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
      { _id: req.params.id }, { exercises: req.body }
    ).then((dbWorkout) => {
      res.json(dbWorkout);
    }).catch(err => {
      res.status(400).json(err);
    });
 });

 //gettting week data with aggregate
 router.get("/api/workouts/range", (req, res) => {
  db.Workout.aggregate([
    { $set: {
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
    console.error(err);
    res.json(err);
  });
});



  module.exports = router