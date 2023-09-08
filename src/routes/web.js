const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello Hieu and Nhi!')
})

router.get('/test', (req, res) => {
    res.render('sample.ejs')
})

module.exports = router;