class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('count');
            const count = parseInt(json, 10);

            if(!isNaN(count)) {
                this.setState(() => ({ count }));
            }
                } catch (e) {
            console.log(e);
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            console.log('Updated');
            const json = JSON.stringify(this.state.count);
            localStorage.setItem('count', json);
        }
    }
    handleAddOne() {
        this.setState(() => ({ count : this.state.count + 1 }));
    }
    handleMinusOne() {
        this.setState((prevState) => ({ count : prevState.count -1 }));
        // this.setState({
        //     count : this.state.count - 1
        // });
    }
    handleReset() {
        this.setState(() => ({ count : 0 }));
    }
    render() {
        return(
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter count={2}/>, document.getElementById('app'));

// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// }

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// }

// const reset = () => {
//     count = 0;
//     renderCounterApp();
// }

// const appRoot = document.getElementById('app');
// const appRoot2 = document.getElementById('app2');

// ReactDOM.render(template, appRoot);

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot2);
// };

// renderCounterApp();