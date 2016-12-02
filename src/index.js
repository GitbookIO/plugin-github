const GitBook = require('gitbook-core');
const GitHubButton = require('./components/GitHubButton');

module.exports = GitBook.createPlugin({
    activate: (dispatch, getState, { Components }) => {
        // Dispatch initialization actions
        dispatch(Components.registerComponent(GitHubButton, { role: 'toolbar:buttons:right' }));
    }
});
