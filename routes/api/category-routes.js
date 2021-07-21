// const router = require('express').Router();
// const { Category, Product, ProductTag } = require('../../models');

// // The `/api/categories` endpoint

// router.get('/', (req, res) => {
//   // find all categories
//   // be sure to include its associated Products
// });

// router.get('/:id', (req, res) => {
//   // find one category by its `id` value
//   // be sure to include its associated Products
// });

// router.post('/', (req, res) => {
//   // create a new category
// });

// router.put('/:id', (req, res) => {
//   // update a category by its `id` value
// });

// router.delete('/:id', (req, res) => {
//   // delete a category by its `id` value
// });

// module.exports = router;

const router = require('express').Router();
//const { where } = require('sequelize/types');
const { Category, Product, ProductTag } = require('../../models');
//const { findAll } = require('../../models/Product');

// The `/api/categories` endpoint

//router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  router.get('/', (req, res) => {
    Category
    .findAll({ include : [Product] })
    .then (categoryData => res.json(categoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });
//});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category
  .findOne({ 
    include : [Product],
    where : {
      id : req.params.id
    } 
  })
  .then (categoryData => {
    if (!categoryData)
    {
      res.status(404).json({message : 'No category found with this ID'});
      return;
    }

    res.json(categoryData);

  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })

});

router.post('/', (req, res) => {
  // create a new category
  Category
  .create({
    id : req.body.id,
    category_name : req.body.category_name
  })
  .then(categoryData => res.json(categoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category
  .update(req.body, {
    where : {
      id : req.params.id
    }
  })
  .then(categoryData => {
    if (!categoryData)
    {
      res.status(404).json({message : 'No category found with this ID'});
      return;
    }

    res.json(categoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category
  .destroy({
    where : {
      id : req.params.id
    }
  })
  .then(categoryData => {
    if (!categoryData)
    {
      res.status(404).json({message : 'No category found with this ID'});
      return;
    }
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

module.exports = router;
