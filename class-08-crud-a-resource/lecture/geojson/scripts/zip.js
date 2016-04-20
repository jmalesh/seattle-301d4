(function(module) {
  function Zip (opts) {
    for (keys in opts) this[keys] = opts[keys];
  };

  Zip.all =  [];

  Zip.fetchAll = function() {
    $.getJSON('/data/manhattan.json', function(data) {
      data.features.map(function(bigDataSet) {
        return bigDataSet.properties;
      })
      .forEach(function(obj) {
        var aZipInstance = new Zip(obj);
        Zip.all.push(aZipInstance);
        aZipInstance.insertRecord();
      });
    });
  }

  Zip.prototype.insertRecord = function() {
    webDB.execute(
      [
        {
          'sql': 'INSERT INTO zips (zip, neighborhood, county) VALUES (?, ?, ?);',
          'data': [this.zip, this.neighborhood, this.county]
        }
      ]
    );
  };

  module.Zip = Zip;
})(window);
