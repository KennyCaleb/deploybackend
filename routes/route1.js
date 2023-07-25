const express = require("express")
const router = express.Router()

router.get("/", (req, res)=>{
    res.status(200).send("Router in operation.")
    res.status(200).json({msg:"JSON Format."})
})

router.post("/add", (req, res)=>{
    const user = req.body

    res.status(200).send(user)
})

module.exports = router