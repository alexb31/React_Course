import React from 'react';
import Header from './Header';
import AddOption from './AddOption';
import Action from './Action';
import Options from './Options';

export default class IndecisionApp extends React.Component {
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