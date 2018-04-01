'use strict';

var appRoot = document.getElementById('app');

var Visibility = true;

var toggleVisibility = function toggleVisibility() {
    Visibility = !Visibility;
    renderApp();
};

console.log(Visibility);

var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibility },
            Visibility ? 'Hide Details' : 'Show Details'
        ),
        Visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Neat'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renderApp();
