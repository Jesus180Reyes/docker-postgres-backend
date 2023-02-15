
const { Router } = require('express');
const { getUser, createUser, createTable } = require('../controllers/users');
const router = Router();


router.get("/", getUser);
router.post("/", createUser);
router.post("/table", createTable);



module.exports = router;