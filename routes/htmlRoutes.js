const path = require('path')
const router = require("express").Router();

//html routes
router.get("/", (req,res) => {
    res.sendFile(path.join(_dirname, "../public/index.html"));
})

router.get("/exercise", (req,res) => {
    res.sendFile(path.join(_dirname, "../public/exercise.html"));
});

router.get("/stats", (req,res) => {
    res.sendFile(path.join(_dirname, "../public/stats/html"));
})

//exporting
module.exports = router;