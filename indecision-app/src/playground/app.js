

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePickOptions = this.handlePickOptions.bind(this);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options : []
        }
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options) {
                this.setState(() => ({ options }))
            }
        } catch (e) {
            console.log(e);
        }
        
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            console.log('Updated');
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        } 
    }
    componentWillUnmount() {
        
    }
    handleDeleteOptions() {
        this.setState(() => ({ options : [] }));
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options : prevState.options.filter((option) => optionToRemove !== option)
        }));
    }
    handlePickOptions() {
        this.setState(() => {
            const randomNum = Math.floor(Math.random() * this.state.options.length);
            const option =  this.state.options[randomNum];
            console.log(option);
        });
    }
    handleAddOptions(option) {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ({
            options: prevState.options.concat([option]
        )}));
    }
    render(){
         const subtitle = 'Put your life in the hands of a computer';
        
        return(
        <div>
            <Header />
            <Action
            hasOptions={this.state.options.length > 0}
            handlePickOptions={this.handlePickOptions}
            />
            <Options
            handleDeleteOption={this.handleDeleteOption} 
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            />
            <AddOption
            handleAddOptions={this.handleAddOptions}
            />
        </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision',
    subtitle: "test"
}

const Action = (props) => {
    return (
        <div>
            <button
            onClick={props.handlePickOptions}
            disabled={!props.hasOptions}>
            What should I do?
            </button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
        {props.options.length === 0 && <p>Please add a option to get started</p>}
        {
            props.options.map((option) => (
                <Option
                 key={option}
                optionText={option}
                handleDeleteOption={props.handleDeleteOption}
                />
                ))
        }
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        </div>
    );
}

const Option = (props) => {
    return (
        <ul>
        <li>{props.optionText}</li>
        <button onClick={(e) => {
            props.handleDeleteOption(props.optionText)
        }}
        >
        Remove
        </button>
        </ul>
    );
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOptions(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOptions(option);

        this.setState(() => ({ error }));

        if(!error) {
            e.target.elements.option.value = "";
        }
    
    }
    render() {
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOptions}>
                    <input type="text" placeholder="Add Option" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// };




ReactDOM.render(<IndecisionApp />, document.getElementById('app'));