var neighborhoods = [];

function Neighborhood (opts) {
  for (key in opts) this[key] = opts[key];
};

Neighborhood.prototype.toHtml = function() {
  var $source = $('#neighborhood-template').html();
  var template = Handlebars.compile($source);
  return template(this);
};

neighborhoodDataSet.forEach(function(neighborhoodObject) {
  neighborhoods.push(new Neighborhood(neighborhoodObject));
});

neighborhoods.forEach(function(ourNewInstantiatedNeighborhoodObject){
  $('#neighborhoods').append(ourNewInstantiatedNeighborhoodObject.toHtml());
});
