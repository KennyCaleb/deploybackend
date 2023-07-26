const express = require("express")
const router = express.Router()
const cors = require("cors")

router.get("/", (req, res)=>{
    // res.status(200).send("Router in operation, again.")
    return res.status(200).json({msg:"JSON Format {}."})
})

router.post("/add", cors(), (req, res)=>{
    const user = req.body

    return res.status(200).json({msg:"user added", user})
})

module.exports = router