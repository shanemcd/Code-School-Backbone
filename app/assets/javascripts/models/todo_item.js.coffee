class window.TodoItem extends Backbone.Model
  toggleStatus: ->
    if @.get('status') == 'incomplete'
      @.set({'status': 'complete'})
    else
      @.set({'status': 'incomplete'})
    @.save();
