var appObject = {
    title : "test title",
    subtitle : "test subtitle"
};

var template = 
<div>
    <h1 id="test">{appObject.title}</h1>
    <p>{appObject.subtitle}</p>
</div>;

var template2 = 
<div>
    <h1>Alex B</h1>
    <p>Age: 23</p>
    <p>Location: Paris</p>
</div>
var appRoot = document.getElementById('app');
var appRoot2 = document.getElementById('app2')

ReactDOM.render(template, appRoot);
ReactDOM.render(template2, appRoot2)