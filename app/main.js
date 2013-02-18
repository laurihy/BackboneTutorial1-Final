var verbList = _.shuffle(["working", "loving", "singing", 
                          "screaming", "eating", "drinking", 
                          "fishing", "smoking", "chillin'"]);

var PoemView = Backbone.View.extend({
  render: function() {
    var params = { 
        verbs: verbList,
        author: "Randy T. Robot",
    };
    this.$el.html(Handlebars.templates.poem(params));
    return this;
  }
});

$(function() {
  var poemView = new PoemView();
  $("body").append(poemView.render().el);  
});