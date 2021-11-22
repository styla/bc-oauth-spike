const express = require('express');
const router = express.Router();
const BigCommerce = require('node-bigcommerce');

const bigCommerce = new BigCommerce({
    secret: 'ebe8a861cee0b71a1e948738e63bd371f5cb9792a150e4bea583b954a7b893de',
    responseType: 'json',
});

router.get(
    '/',
    (req, res, next) => {
        try {
            const data = bigCommerce.verify(req.query['signed_payload']);

            console.log(data);

            res.render('welcome', { title: 'Welcome!' });
        } catch (err) {
            next(err);
        }
    });

module.exports = router;
