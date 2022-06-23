const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({include: [
    Product
  ] })
  .then(data=>{
    res.json(data);
  }).catch(err=>{
    res.json(err);
  })
  
  
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findById({include: [
    //CHANGE ME
  ]})
  .then(data=>{
    res.json(data);
  }).catch(err=>{
    res.json(err);
  })
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    //put something here
  })
  .then(data=>{
    res.json(data);
  }).catch(err=>{
    res.json(err);
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  .then(data=>{
    res.json(data);
  }).catch(err=>{
    res.json(err);
  })
});

//done
router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    }
  })
  .then(data=>{
    res.json(data);
  }).catch(err=>{
    res.json(err);
  })
});

module.exports = router;
