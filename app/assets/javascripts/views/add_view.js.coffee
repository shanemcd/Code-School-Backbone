class window.AddView extends Backbone.View
  el: "input#add"
  
  events:
    "keypress": "handleEnter"

  initialize: ->
    @.$el.focus()

  handleEnter: (e) ->
    if (e.keyCode == 13)
      if ($(@.el).val() == "") 
        return
      @.collection.create({description: @.$el.val()})
      @.$el.val("")