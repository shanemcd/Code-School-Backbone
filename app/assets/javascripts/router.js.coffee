class window.TodoApp extends Backbone.Router
  routes:
    "": "index",
    "todos/:id": "show"

  initialize: ->
    this.todoList = new TodoItems();
    this.todosView = new TodosView({collection: this.todoList});
    this.addView = new AddView({collection: this.todoList});
    this.todosView.render();

  index: ->
    $('#app').html(this.todosView.el)
    this.todoList.fetch()

  show: (id) ->
    this.todoList.focusOnTodoItem(id)