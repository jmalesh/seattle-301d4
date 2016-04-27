(function(module) {
  var repos = {};

  repos.all = [];

  // TODO: Refactor this ajax method into a get method to the proxy
  //  'end point' provided by server.js.
  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/users/codefellows/repos' +
            '?per_page=10' +
            '&sort=updated',
      type: 'GET',
      headers: { 'Authorization': 'token ' + githubToken },
      success: function(data, message, xhr) {
        repos.all = data;
      }
    }).done(callback);
  };

  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
