window.TodoApp = Backbone.Router.extend({
  routes: {
    "": "index",
    "todos/:id": "show"
  },

  initialize: function(){
    TodoList = new TodoItems();
    this.todosView = new TodosView({collection: TodoList});
    this.addView = new AddView({collection: TodoList});
    this.todosView.render();
  },

  index: function(){
    $('#app').html(this.todosView.el);
    TodoList.fetch();
  },

  show: function(id){
    TodoList.focusOnTodoItem(id);
  }
});