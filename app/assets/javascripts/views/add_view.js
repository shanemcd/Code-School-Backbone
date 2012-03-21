window.AddView = Backbone.View.extend({
  el: "input#add",
  
  events: {
    "keypress": "handleEnter"
  },
  initialize: function(){
    $(this.el).focus();
  },

  handleEnter: function(e){
    if (e.keyCode == 13){
      if ($(this.el).val() === "") return;
      this.collection.create({description: $(this.el).val()});
    }
  }
})