"use strict";

var appObject = {
    title: "test title",
    subtitle: "test subtitle"
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        { id: "test" },
        appObject.title
    ),
    React.createElement(
        "p",
        null,
        appObject.subtitle
    )
);

var template2 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Alex B"
    ),
    React.createElement(
        "p",
        null,
        "Age: 23"
    ),
    React.createElement(
        "p",
        null,
        "Location: Paris"
    )
);
var appRoot = document.getElementById('app');
var appRoot2 = document.getElementById('app2');

ReactDOM.render(template, appRoot);
ReactDOM.render(template2, appRoot2);
