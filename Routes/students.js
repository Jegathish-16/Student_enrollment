const express = require('express')
const router = express.Router()
// const {getAllToDoItems,createNewToDoItem,getAToDoItem,UpdateAToDoItem,deleteAToDoItem} = require()
const studentModel = require('../models/students')
router.get('/',(require,response) =>{
    response.send("Displaying all the students")
})

router.post('/',(require,response) =>{
    response.send("adding the students")
})

router.patch('/:id',(require,response) =>{
    response.send(`Updating the students id${request.params.id}`)
})

router.delete('/:id',(require,response) =>{
    response.send(`Deleting the students id${request.params.id}`)
})


// router.route('/').get(getAllToDoItems).post(createNewToDoItem)
// router.route('/:id').get(getAToDoItem).patch(UpdateAToDoItem).delete(deleteAToDoItem)


module.exports = router;
