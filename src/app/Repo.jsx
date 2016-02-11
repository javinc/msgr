import React from 'react';

export default React.createClass({
    render() {
        return (
            <section>
                <h2>{this.props.params.userName}</h2>
                <h3>{this.props.params.repoName}</h3>
            </section>
        )
    }
})
