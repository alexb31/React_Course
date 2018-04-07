class IndecisionApp extends React.Component {
    render(){
        const title = 'Indecison';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['A', 'B', 'D'];
        
        return(
        <div>
            <Header title={title} subtitle={subtitle}/>
            <Action />
            <Options options={options}/>
            <AddOption />
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
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.props.options.length);
        const option = this.props.options[randomNum];
        alert(randomNum);
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }
    handleRemove() {
        console.log(this.props.options);
    }
    render() {
        return (
            <div>
            {
                this.props.options.map((option) => <Option key={option} optionText={option}/>)
            }
            <button onClick={this.handleRemove}>Remove All</button>
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
    handleAddOptions(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        if(option) {
            alert(option);
            e.target.elements.option.value = '';
        } else {
            alert('No options');
        }

        
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOptions}>
                    <input type="text" placeholder="Add Option" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));