import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };
    handleAddOptions = (e) => {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOptions(option);

        this.setState(() => ({ error }));

        if(!error) {
            e.target.elements.option.value = "";
        }
    };
    render() {
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOptions}>
                    <input type="text" placeholder="Add Option" name="option" />
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}