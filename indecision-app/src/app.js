const appObject = {
    title : "test title",
    subtitle : "test subtitle",
    options : ["A", "B"]
};

function getSubtitle(subtitle) {
    if(subtitle) {
        return <p>{appObject.subtitle}</p>
    }
}

let template = 
<div>
    <h1 id="test">{appObject.title}</h1>
    {appObject.subtitle && <p>{appObject.subtitle}</p>  }
    {getSubtitle(appObject.subtitle)}
    {appObject.options.length > 0 ? "Here are your options" : "No options"}
</div>;

const user = {
    name: "Alex",
    age: 23,
    Location: "Paris" 
};

function getLocation(location) {
    if(location) {
        return <p>Location : {location}</p>;
    }
}

let template2 = 
<div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    {null}
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.Location)}
</div>
const appRoot = document.getElementById('app');
const appRoot2 = document.getElementById('app2')

ReactDOM.render(template, appRoot);
ReactDOM.render(template2, appRoot2)