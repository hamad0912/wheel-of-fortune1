const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('OAuth route works');
});

module.exports = router;