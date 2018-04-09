class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePickOptions = this.handlePickOptions.bind(this);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.state = {
            options : ['A', 'B', 'C']
        }
    }
    handleDeleteOptions() {
        this.setState(() => {
            return{
                options: []
            };
        });
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

        this.setState((prevState) => {
            return {
                options: prevState.options.concat([option])
            }
        });
    }
    render(){
         const title = 'Indecison';
         const subtitle = 'Put your life in the hands of a computer';
        
        return(
        <div>
            <Header title={title} subtitle={subtitle}/>
            <Action
            hasOptions={this.state.options.length > 0}
            handlePickOptions={this.handlePickOptions}
            />
            <Options 
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

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    // handlePick() {
    //     const randomNum = Math.floor(Math.random() * this.props.options.length);
    //     const option = this.props.options[randomNum];
    //     alert(randomNum);
    // }
    render() {
        return (
            <div>
                <button
                onClick={this.props.handlePickOptions}
                disabled={!this.props.hasOptions}>
                What should I do?
                </button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
            {
                this.props.options.map((option) => <Option key={option} optionText={option}/>)
            }
            <button onClick={this.props.handleDeleteOptions}>Remove All</button>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <ol>
            <li>{this.props.optionText}</li>
            </ol>
        );
    }
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

        this.setState(() => {
            return { error };
        });
    
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


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));