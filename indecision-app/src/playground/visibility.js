const appRoot = document.getElementById('app');

let Visibility = true;

const toggleVisibility = () => {
    Visibility = !Visibility;
    renderApp();
}

console.log(Visibility);

const renderApp = () => {
    let template = 
        <div>
            <h1>Visibility toggle</h1>
            <button onClick={toggleVisibility}>
                {Visibility ? 'Hide Details' : 'Show Details'}
            </button>
            {Visibility && (
                <div>
                    <p>Neat</p>
                </div>
            )}
        </div>;

ReactDOM.render(template, appRoot);
}

renderApp();