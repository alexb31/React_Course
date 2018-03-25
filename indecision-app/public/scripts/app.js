"use strict";

console.log("hello");

var template = React.createElement(
  "p",
  { id: "test" },
  "YEAH BABY"
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
