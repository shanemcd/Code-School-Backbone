window.TodoView = Backbone.View.extend({
  template: _.template(
    '<h3 class="<%= status %>"><input type=checkbox <%= status == "complete" ? "checked=checked" : "" %>/><%= description %><a class="close" href="#">x</a><a class="show" href="/#todos/<% if (typeof(id) != "undefined") { %><%= id %><% } %>">☞</a></h3>'),

  events: {
    'change input': 'toggleStatus',
    "click a.close": function(){this.model.destroy()}
  },

  initialize: function(){
    this.model.on('change', this.render, this);
    this.model.on('destroy hide', this.remove, this);
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  remove: function(){
    this.$el.remove();
  },

  toggleStatus: function(){
    this.model.toggleStatus()
  }
});