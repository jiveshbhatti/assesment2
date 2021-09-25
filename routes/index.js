var express = require('express');
var router = express.Router();
const todo = require('../data/todos')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { todo });
});

router.post('/', function(req,res,next){


 todo.push({todo: req.body.input, done: false})


res.redirect('/')
})

router.post('/delete:id', (req,res)=>{

console.log(req.params.id)
const deleteIndex = req.params.id
todo.splice(deleteIndex, 1) //also can use filter method here but no need to copy.
res.redirect('/')
})
module.exports = router;
