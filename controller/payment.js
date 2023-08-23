const Flutterwave = require('flutterwave-node-v3');
const flw = new Flutterwave(process.env.FLW_PUBLIC_KEY, process.env.FLW_SECRET_KEY);

const payment = {

    createPaymentPlan: async (req, res, next) => {
        try {
          const payload = {
            amount: 500,
            name: 'the olufemi obafunmiso plan 2', //This is the name of the payment, it will appear on the subscription reminder emails
            interval: 'monthly', //This will determine the frequency of the charges for this plan. Could be monthly, weekly, etc.
            duration: '24', //This is the frequency, it is numeric, e.g. if set to 5 and intervals is set to monthly you would be charged 5 months, and then the subscription stops
          };
      
          const response = await flw.PaymentPlan.create(payload);
          console.log(response);
          
          res.status(200).json(response);
        } catch (error) {
          console.log(error);
          return next(error);
        }
      },
      getPaymentPlan: async(req, res, next) => {
        try {
            const payload = {
              id: req.query.id, //This is the unique ìdof the payment plan you want to fetch. It is returned in the call to create a payment plan asdata.id`
            };
        
            const response = await flw.PaymentPlan.get_plan(payload);
            console.log(response);

            res.status(200).json(response);
          } catch (error) {
            console.log(error);
            return next(error);
          }
      },
      cancelPaymentPlan: async(req, res, next) => {
        try {
            const payload = {
              id: req.query.id, //This is the unique ìd` of the payment plan you want to cancel
            };
        
            const response = await flw.PaymentPlan.cancel(payload);
            console.log(response);

            res.status(200).json(response);
          } catch (error) {
            console.log(error);
            return next(error);
          }
      }
};

module.exports = payment;