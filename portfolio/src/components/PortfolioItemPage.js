import React from 'react';

const PortfolioItemPage = (props) => {
    return (
        <div>
            <p>This is the work {props.match.params.id}</p>
        </div>
    );
}

export default  PortfolioItemPage;