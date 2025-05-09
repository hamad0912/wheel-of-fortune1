const express = require('express');
const router = express.Router();

router.post('/authorize', (req, res) => {
    const { access_token, store } = req.body.data;

    console.log('✅ Token:', access_token);
    console.log('🛍️ Store:', store);

    // هنا تقدر تخزن التوكن في قاعدة بياناتك حسب المتجر
    res.status(200).send('تم استلام التوكن');
});

module.exports = router;
