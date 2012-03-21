window.AddView = Backbone.View.extend({
  el: "input#add",
  
  events: {
    "keypress": "handleEnter"
  },
  initialize: function(){
    $(this.el).focus();
    this.collection.on("add", this.addItem, this)
  },

  addItem: function(model){
    todosView = new TodosView({model: model})
    todosView.addOne(model)
  },

  handleEnter: function(e){
    if (e.keyCode == 13){
      this.collection.create({description: $(this.el).val()})
    }
  }
})