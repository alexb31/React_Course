"use strict";

var appObject = {
    title: "test title",
    subtitle: "test subtitle",
    options: ["A", "B"]
};

function getSubtitle(subtitle) {
    if (subtitle) {
        return React.createElement(
            "p",
            null,
            appObject.subtitle
        );
    }
}

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        { id: "test" },
        appObject.title
    ),
    appObject.subtitle && React.createElement(
        "p",
        null,
        appObject.subtitle
    ),
    getSubtitle(appObject.subtitle),
    appObject.options.length > 0 ? "Here are your options" : "No options"
);

var count = 0;
var addOne = function addOne() {
    count++;
    renderCounterApp();
};

var minusOne = function minusOne() {
    count--;
    renderCounterApp();
};

var reset = function reset() {
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById('app');
var appRoot2 = document.getElementById('app2');

ReactDOM.render(template, appRoot);

var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Count: ",
            count
        ),
        React.createElement(
            "button",
            { onClick: addOne },
            "+1"
        ),
        React.createElement(
            "button",
            { onClick: minusOne },
            "-1"
        ),
        React.createElement(
            "button",
            { onClick: reset },
            "reset"
        )
    );
    ReactDOM.render(templateTwo, appRoot2);
};

renderCounterApp();
