(function(module) {
  function Article (opts) {
    // DONE: Convert property assignment to Functional Programming style. Now, ALL properties
    // of `opts` will be assigned as properies of the newly created article object.
    Object.keys(opts).forEach(function(e, index, keys) {
      this[e] = opts[e];
    },this);
  }

  Article.all = [];

  Article.prototype.toHtml = function() {
    var template = Handlebars.compile($('#article-template').text());

    this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
    this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
    this.body = marked(this.body);

    return template(this);
  };

  // TODO: Set up a DB table for articles.
  Article.createTable = function(callback) {
    webDB.execute(
      '...;', // what SQL command do we run here inside these quotes?
      function(result) {
        console.log('Successfully set up the articles table.', result);
        if (callback) callback();
      }
    );
  };

  // TODO: Insert an article instance into the database:
  Article.prototype.insertRecord = function(callback) {
    webDB.execute(
      [
        {
          'sql': '...;',
          'data': [this.title, this.author, this.authorUrl, this.category, this.publishedOn, this.body]
        }
      ],
      callback
    );
  };

  // TODO: Delete an article instance from the database:
  Article.prototype.deleteRecord = function(callback) {
    webDB.execute(
      [
        {
          'sql': '...;',
          'data': [this.id]
        }
      ],
      callback
    );
  };

  // TODO: Update an article instance, overwriting it's properties into the corresponding record in the database:
  Article.prototype.updateRecord = function(callback) {
    webDB.execute(
      [
        {
          'sql': '...;',
          'data': [this.title, this.author, this.authorUrl, this.category, this.publishedOn, this.body, this.id]
        }
      ],
      callback
    );
  };

  // TODO: Use correct SQL syntax to delete all records from the articles table.
  Article.truncateTable = function(callback) {
    webDB.execute(
      'DELETE ...;', // <----finish the command here, inside the quotes.
      callback
    );
  };

  // DONE: Refactor to expect the raw data from the database, rather than localStorage.
  Article.loadAll = function(rows) {
    Article.all = rows.map(function(ele) {
      return new Article(ele);
    });
  };

  // TODO: Refactor the .fetchAll() method to check if the database holds any records or not.

  // If the DB has data already, we'll load up the data (by descended published order), and then hand off control to the View.
  // If the DB is empty, we need to retrieve the JSON and process it.
  Article.fetchAll = function(next) {
    webDB.execute('...', function(rows) { // TODO: fill these quotes to 'select' our table.
      if (rows.length) {
        // TODO:
        // 1 - Use Article.loadAll to instanitate these rows,
        // 2 - Pass control to the view by calling the next function that was passed in to Article.fetchAll

      } else {
        $.getJSON('/data/hackerIpsum.json', function(data) {
          // Save each article from this JSON file, so we don't need to request it next time:
          data.forEach(function(obj) {
            var article = new Article(obj); // This will instantiate an article instance based on each article object from our JSON.
            // TODO:
            // 1 - 'insert' the newly-instantiated article in the DB: (hint: what can we call on each 'article' instance?).

          });
          // Now get ALL the records out the DB, with their database IDs:
          webDB.execute('', function(rows) { // TODO: select our now full table
            // TODO:
            // 1 - Use Article.loadAll to instanitate these rows,
            // 2 - Pass control to the view by calling the next function that was passed in to Article.fetchAll

          });
        });
      }
    });
  };

  Article.allAuthors = function() {
    return Article.all.map(function(article) {
      return article.author;
    })
    .reduce(function(names, name) {
      if (names.indexOf(name) === -1) {
        names.push(name);
      }
      return names;
    }, []);
  };

  Article.numWordsAll = function() {
    return Article.all.map(function(article) {
      return article.body.match(/\b\w+/g).length;
    })
    .reduce(function(a, b) {
      return a + b;
    });
  };

  Article.numWordsByAuthor = function() {
    return Article.allAuthors().map(function(author) {
      return {
        name: author,
        numWords: Article.all.filter(function(a) {
          return a.author === author;
        })
        .map(function(a) {
          return a.body.match(/\b\w+/g).length
        })
        .reduce(function(a, b) {
          return a + b;
        })
      }
    })
  };

  Article.stats = function() {
    return {
      numArticles: Article.all.length,
      numWords: Article.numwords(),
      Authors: Article.allAuthors(),
    };
  }

  module.Article = Article;
})(window);
