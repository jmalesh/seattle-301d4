var neighborhoods = [];

function Neighborhood (opts) {
  for (key in opts) this[key] = opts[key];
};

Neighborhood.prototype.toHtml = function() {

  var template = Handlebars.compile($('#neighborhood-template').text());
  return template(this);
};

neighborhoodData.forEach(function(obj) {
  neighborhoods.push(new Neighborhood(obj));
});

neighborhoods.forEach(function(obj){
  $('#neighborhoods').append(obj.toHtml())
});
