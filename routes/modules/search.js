// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant')

// search
router.get('/', (req, res) => {
  const keyword = req.query.keyword.trim().toLowerCase()
  Restaurant.find()
    .lean()
    .then(restaurants => {
      restaurants = restaurants.filter(restaurant => 
        restaurant.name.toLowerCase().includes(keyword) || restaurant.category.toLowerCase().includes(keyword)
      )
      res.render('index', { restaurants: restaurants, keyword: keyword })
    })
    .catch(error => console.error(error))
})

module.exports = router