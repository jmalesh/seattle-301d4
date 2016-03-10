var neighborhoods = [];

function Neighborhood (opts) {
  for (key in opts) this[key] = opts[key];
};

Neighborhood.prototype.toHtml = function() {
  var source = $('#neighborhood-template').html()
  var template = Handlebars.compile(source);
  return template(this);
};

neighborhoodData.forEach(function(obj) {
  neighborhoods.push(new Neighborhood(obj));
});

neighborhoods.forEach(function(obj){
  $('#neighborhoods').append(obj.toHtml())
});
