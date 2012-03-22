class window.TodoItems extends Backbone.Collection
  model: TodoItem
  url: '/todos'

  initialize: -> 
    @.on('remove', @.hideModel, @)

  hideModel: (model) ->
    model.trigger('hide')

  focusOnTodoItem: (id) ->
    modelsToRemove = @.filter (todoItem) ->
      todoItem.id != id
    @.remove(modelsToRemove)
