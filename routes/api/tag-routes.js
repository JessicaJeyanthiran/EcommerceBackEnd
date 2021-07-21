// const router = require('express').Router();
// const { Tag, Product, ProductTag } = require('../../models');

// // The `/api/tags` endpoint

// router.get('/', (req, res) => {
//   Tag.findAll({
//     include: [
//       {
//         model: Product,
//         through: ProductTag,
//       }
//     ]

//   }).then(
//     data => res.status(200).json(data)
//   ).catch(
//     err => res.status(500).json(err)
//   )
//   // find all tags
//   // be sure to include its associated Product data
// });

// router.get('/:id', (req, res) => {
//   // find a single tag by its `id`
//   // be sure to include its associated Product data
// });

// router.post('/', (req, res) => {
//   // create a new tag
// });

// router.put('/:id', (req, res) => {
//   // update a tag's name by its `id` value
// });

// router.delete('/:id', (req, res) => {
//   // delete on tag by its `id` value
// });

// module.exports = router;

const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
//const { findOne } = require('../../models/Product');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag
  .findAll({
    include : [Product]
  })
  .then(tagData => {
    res.json(tagData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag
  .findOne({
    include : [Product],
    where : {
      id : req.params.id
    }
  })
  .then (tagData => {
    if (!tagData)
    {
      res.status(404).json({message : 'No category found with this ID'});
      return;
    }

    res.json(tagData);

  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

router.post('/', (req, res) => {
  // create a new tag
  Tag
  .create({
    tag_name : req.body.tag_name
  })
  .then(tagData => {
    res.json(tagData);
  })
  .catch(err =>{
    console.log(err);
    res.status(500).json(err);
  })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag
  .update (req.body, {
    where : {
      id : req.params.id
    }
  })
  .then(tagData => {
    if (!tagData)
    {
      res.status(404).json({message : 'No category found with this ID'});
      return;
    }

    res.json(tagData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })

});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag
  .destroy({
    where : {
      id : req.params.id
    }
  })
  .then(tagData => {
    if (!tagData)
    {
      res.status(404).json({message : 'No category found with this ID'});
      return;
    }

    res.json(tagData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

module.exports = router;
