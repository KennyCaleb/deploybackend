const express = require("express")
const router = express.Router()

router.get("/", (req, res)=>{
    // res.status(200).send("Router in operation, again.")
    return res.status(200).json({msg:"JSON Format {}."})
})

router.post("/add", (req, res)=>{
    const user = req.body

    return res.status(200).json({msg:"user added", user})
})

module.exports = router