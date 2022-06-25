const router = require('express').Router();
const {
  Category,
  Product
} = require('../../models');


router.get('/', (req, res) => {
  Category.findAll({
      include: [
        Product
      ]
    })
    .then(data => {
      res.json(data);
    }).catch(err => {
      res.json(err);
    })
});

router.get('/:id', (req, res) => {
  Category.findById({
      include: [
        Product
      ]
    })
    .then(data => {
      res.json(data);
    }).catch(err => {
      res.json(err);
    })
});

router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(categoryData)
  } catch (err) {
    res.status(404).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;