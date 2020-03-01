const { getMeEverything } = require('avneet-anf-hackathon')
const express = require('express')
const router = express.Router()
const getServerLocation = require('../lib/get-server-location')

router.get('/', async function (req, res, next) {
  console.log('------REQ------')
  console.log(req)
  console.log('================')
  console.log(req.parameters)
  console.log(req.cookies)
  const everything = await getMeEverything()
  const {
    orders,
    profit,
    previousProfit
  } = everything

  const SERVER_LOCATION = getServerLocation(req.cookies)

  // const reqString = JSON.stringify(req)

  res.render('profit', {
    title: 'Profits',
    SERVER_LOCATION,
    orders,
    profit,
    previousProfit,
    req
  })
})

module.exports = router
