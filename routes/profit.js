const { getMeEverything } = require('avneet-anf-hackathon');
const express = require('express');
const router = express.Router();
const getServerLocation = require('../lib/get-server-location');

router.get('/', async function (req, res, next) {
  // console.log(req);
  // console.log(res);
  // console.log(next);
  const everything = await getMeEverything();
  console.log('everything');
  console.log(everything);
  const {
    orders,
    profit,
    previousProfit
  } = everything;

  const SERVER_LOCATION = getServerLocation(req.cookies);

  // const reqString = JSON.stringify(req)

  res.render('profit', {
    title: 'Profits',
    SERVER_LOCATION,
    orders,
    profit,
    previousProfit,
    req
  });
});

module.exports = router;
