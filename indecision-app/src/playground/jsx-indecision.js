const appObject = {
    title : "Indecision App",
    subtitle : "Put your life into the hand of a computer",
    options : ["A", "B"]
};

function getSubtitle(subtitle) {
    if(subtitle) {
        return <p>{appObject.subtitle}</p>
    }
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option) {
        appObject.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }

    console.log(appObject.options);
}

const removeAll = () => {
    //e.preventDefault();

    appObject.options = [];
    renderApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * appObject.options.length);
    const option = app.options[randomNum];
    console.log(randomNum)
}

const appRoot = document.getElementById('app');

const renderApp = () => {
    let template = 
        <div>
            <h1 id="test">{appObject.title}</h1>
            {appObject.subtitle && <p>{appObject.subtitle}</p>  }
            {getSubtitle(appObject.subtitle)}
            <p>{appObject.options.length > 0 ? "Here are your options" : "No options"}</p>
            <button disabled={appObject.options.length === 0} onClick={onMakeDecision}>What should I do</button>
            <ol>
                {
                    appObject.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
            <button onClick={removeAll}>Delete All</button>
        </div>;

ReactDOM.render(template, appRoot);
}

renderApp();