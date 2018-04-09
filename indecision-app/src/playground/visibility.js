class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.visibilityToggle = this.visibilityToggle.bind(this);
        this.state = {
            visibility : false
        }
    }
    visibilityToggle() {
        this.setState({
            visibility : !this.state.visibility
        });
        console.log(this.state.visibility);
    }
    render() {
        return (
            <div>
             <h1>Visibility toggle</h1>
             <button onClick={this.visibilityToggle}>
             {this.state.visibility ? 'Hide Details' : 'Show Details'}
             </button>
             {this.state.visibility && (
                 <div>
                     <p>Neat</p>
                 </div>
             )}
         </div>
        );
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));

// const appRoot = document.getElementById('app');

// let Visibility = true;

// const toggleVisibility = () => {
//     Visibility = !Visibility;
//     renderApp();
// }

// console.log(Visibility);

// const renderApp = () => {
//     let template = 
//         <div>
//             <h1>Visibility toggle</h1>
//             <button onClick={toggleVisibility}>
//                 {Visibility ? 'Hide Details' : 'Show Details'}
//             </button>
//             {Visibility && (
//                 <div>
//                     <p>Neat</p>
//                 </div>
//             )}
//         </div>;

// ReactDOM.render(template, appRoot);
// }

// renderApp();