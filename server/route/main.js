const express = require('express');
const router = express.Router();

router.get('', (req, res) => {
const locals = {
    title: "NodeJs Blog",
    description: "Simple blog created with NodeJs, Express & MongoDB"
}

    res.render('index', { locals});

});

module.exports = router;
