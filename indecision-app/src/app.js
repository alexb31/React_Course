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

let count = 0;
const addOne = () => {
    console.log('addOne');
}

const minusOne = () => {
    console.log('minusOne');
}

const reset = () => {
    console.log('reset');
}

const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
    </div>
);


const appRoot = document.getElementById('app');
const appRoot2 = document.getElementById('app2')

ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot2)