const express = require('express');
const router = express.Router();
const BigCommerce = require('node-bigcommerce');

const bigCommerce = new BigCommerce({
    clientId: '1d5ckyvq1001dra1ntgi1pyudgpc9mu',
    secret: 'ebe8a861cee0b71a1e948738e63bd371f5cb9792a150e4bea583b954a7b893de',
    callback: 'https://e3c4-2003-ec-e70a-5400-ccf2-fd93-10b9-1bc6.ngrok.io/oauth',
    responseType: 'json',
});

router.get(
    '/',
    (req, res, next) => {
        console.log(req.query);

        bigCommerce.authorize(req.query)
            .then(data => console.log(data))
            .then(data => {
                res.render('oauth', { title: 'Authorized!' });
            })
            .catch(err => {
                console.log(err);
                next(err);
            });
    },
);

module.exports = router;
