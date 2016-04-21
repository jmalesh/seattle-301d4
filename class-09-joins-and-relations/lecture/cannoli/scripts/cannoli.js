(function(module) {
  function Cannoli (opts) {
    for (keys in opts) this[keys] = opts[keys];
  };

  Cannoli.all =  [];

  Cannoli.createTable = function() {
    webDB.execute(
      'CREATE TABLE IF NOT EXISTS cannoli (' +
        'id INTEGER PRIMARY KEY, ' +
        'flavor VARCHAR(255), ' +
        'size VARCHAR(255), ' +
        'price MONEY, ' +
        'description TEXT);',
      function() {
        console.log('The cannoli table has been set. Yum!');
        Cannoli.fetchAll();
      }
    );
  };

  Cannoli.fetchAll = function() {
    webDB.execute('SELECT * FROM cannoli', function(rows) {
      if (!rows.length) {
        $.getJSON('/data/cannoli.json', function(data) {
          data.forEach(function(obj) {
            var aCannoli = new Cannoli(obj);
            Cannoli.all.push(aCannoli);
            aCannoli.insertRecord();
          });
        });
      }
    });
  }

  Cannoli.prototype.insertRecord = function() {
    webDB.execute(
      [
        {
          'sql': 'INSERT INTO cannoli (flavor, size, price, description) VALUES (?, ?, ?, ?);',
          'data': [this.flavor, this.size, this.price, this.description]
        }
      ]
    );
  };
  Cannoli.createTable();
  module.Cannoli = Cannoli;
})(window);
