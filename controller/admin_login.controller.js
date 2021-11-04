const router = require("express").Router();
const Admin = require("../model/admin.model");

router.post("/", async (req, res) => {

    try {
        const email = req.body.email;
        const pass = req.body.password;
        const emailFind = await Admin.findOne({ email: email })
        if (emailFind.password === pass) {
            return res.status(201).render("getEstimateUserData")
        }
        
    else {
            return res.render("admin_error")
        }

    }
    catch (err) {
        return res.status(400).render("admin_error")
    }
})

module.exports = router