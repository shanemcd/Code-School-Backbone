class window.TodosView extends Backbone.View
  initialize: ->
    @.collection.on('add', @.addOne, @)
    @.collection.on('reset', @.addAll, @)

  render: ->
    @.addAll()
    @

  addAll: ->
    @.$el.empty()
    @.collection.forEach(@.addOne, @)

  addOne: (todoItem) ->
    todoView = new TodoView({model: todoItem})
    todoView.render()
    @.$el.append(todoView.el)