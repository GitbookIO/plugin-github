require([ 'gitbook' ], function (gitbook) {
  gitbook.events.bind('start', function (e, config) {
    var githubURL = config.github.url;

    if (githubURL) {
      jQuery('.book-header > h1').before(
        '<a href="' + githubURL + '" _target="blank" class="btn pull-right github-sharing-link sharing-link" aria-label="GitHub">' +
          '<i class="fa fa-github"></i>' +
        '</a>'
      );
    }
  });
});
