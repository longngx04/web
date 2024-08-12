const router =(app) =>{
    //import controller
    const todoController = require('../controllers/todoListController')

    //declare todoList routes
    app.route('/todos')
        .get(todoController.view_all_tasks)
        .post(todoController.create_a_task)
        .delete(todoController.delete_all_task)
    app.route('/todos/:id')
        .get(todoController.view_a_task)
        .put(todoController.update_a_task)
        .delete(todoController.delete_a_task)
}
module.exports = router