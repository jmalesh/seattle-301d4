(function(module) {
  function Customer (opts) {
    for (keys in opts) this[keys] = opts[keys];
  };

  Customer.all = [];

  Customer.createTable = function() {
    webDB.execute(
      'CREATE TABLE IF NOT EXISTS customers (' +
        'id INTEGER PRIMARY KEY, ' +
        'name VARCHAR(255), ' +
        'favoriteCannoli INTEGER REFERENCES cannoli(id));',
      function() {
        console.log('The customer table has been set!');
        Customer.fetchAll();
      }
    );
  };

  Customer.fetchAll = function() {
    webDB.execute('SELECT * FROM customers', function(rows) {
      if (!rows.length) {
        $.getJSON('/data/customers.json', function(data) {
          data.forEach(function(obj) {
            var aCustomer = new Customer(obj);
            Customer.all.push(aCustomer);
            aCustomer.insertRecord();
          });
        });
      }
    });
  }

  Customer.prototype.insertRecord = function() {
    webDB.execute(
      [
        {
          'sql': 'INSERT INTO customers (name, favoriteCannoli) VALUES (?, ?);',
          'data': [this.name, this.favoriteCannoli]
        }
      ]
    );
  };
  Customer.createTable();
  module.Customer = Customer;
})(window);
