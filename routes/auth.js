const { Router } = require('express');
const { loginUser } = require('../controllers/auth');


const router = Router();


router.post("/",loginUser);




module.exports = router;