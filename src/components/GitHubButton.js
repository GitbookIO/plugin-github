const GitBook = require('gitbook-core');
const { React } = GitBook;

/**
 * Display a button that links to the GitHub repository
 */
const SharingButtons = React.createClass({
    propTypes: {
        url: React.PropTypes.string.isRequired
    },

    render() {
        const { url } = this.props;

        return (
            <GitBook.ButtonGroup>
                <GitBook.Button active={Boolean(url)}
                                onClick={() => window.open(url)}>
                    <GitBook.Icon id="github"/>
                </GitBook.Button>
            </GitBook.ButtonGroup>
        );
    }
});

function mapStateToProps(state) {
    const url = state.config.getIn(['pluginsConfig', 'github', 'url']);

    return {
        url
    };
}

module.exports = GitBook.connect(SharingButtons, mapStateToProps);
