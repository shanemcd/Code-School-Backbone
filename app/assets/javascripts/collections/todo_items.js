window.TodoItems = Backbone.Collection.extend({
  model: TodoItem,
  url: '/todos',

  initialize: function(){
    this.on('remove', this.hideModel, this);
    this.on("add", this.showModel, this);
  },

  hideModel: function(model){
    model.trigger('hide');
  },

  showModel: function(model) {
    console.log("model added to collection");
  },

  focusOnTodoItem: function(id) {
    var modelsToRemove = this.filter(function(todoItem){
      return todoItem.id != id;
    });

    this.remove(modelsToRemove);
  }
})
