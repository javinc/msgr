import React from 'react';

export default React.createClass({
    render() {
        return (
            <div>
                <h2>{this.props.params.userName}</h2>
                <h3>{this.props.params.repoName}</h3>
            </div>
        )
    }
})
