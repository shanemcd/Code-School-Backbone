class window.TodoView extends Backbone.View
  template: _.template('<h3 class="<%= status %>"><input type=checkbox <%= status == "complete" ? "checked=checked" : "" %>/><%= description %><a class="close" href="#">x</a><a class="show" href="/#todos/<% if (typeof(id) != "undefined") { %><%= id %><% } %>">☞</a></h3>'),

  events:
    'change input': 'toggleStatus'
    "click a.close": -> @.model.destroy()

  initialize: ->
    @.model.on('change', @.render, @)
    @.model.on('destroy hide', @.remove, @)

  render: ->
    @.$el.html(@.template(@.model.toJSON()));
    return @

  remove: ->
    @.$el.remove()

  toggleStatus: ->
    @.model.toggleStatus()