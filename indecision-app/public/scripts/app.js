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

var user = {
    name: "Alex",
    age: 23,
    Location: "Paris"
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            "p",
            null,
            "Location : ",
            location
        );
    }
}

var template2 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name ? user.name : "Anonymous"
    ),
    null,
    user.age && user.age >= 18 && React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    getLocation(user.Location)
);
var appRoot = document.getElementById('app');
var appRoot2 = document.getElementById('app2');

ReactDOM.render(template, appRoot);
ReactDOM.render(template2, appRoot2);
