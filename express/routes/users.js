const express = require('express');
const router = express.Router();

router.get('/' , (req, res) => {
    res.send("მომხმარებლების სია");
})

router.get('/:id', (req, res) => {
    res.send("მომხმარებლის ID - 1");
})

module.exports = router;