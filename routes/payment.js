var express = require('express');
var router = express.Router();
const payment = require('../controller/payment')

/*payment plan */
router.get('/', payment.getPaymentPlan);
router.get('/create', payment.createPaymentPlan);
router.get('/cancel', payment.cancelPaymentPlan);

module.exports = router;
