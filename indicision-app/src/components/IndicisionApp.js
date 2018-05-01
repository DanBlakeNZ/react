import React from 'react';

import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';

export default class IndicisionApp extends React.Component {

	constructor(props){
		super(props);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);
		this.state = {
			options: []
		}
	}

	componentDidMount(){
		try{ // used to try the code and ensure we have valid JSON
			const json = localStorage.getItem('options')
			const options = JSON.parse(json)

			if(options){
				this.setState(()=>({ options })) //options: options
			}
		}catch(e){
			// if there is an error you can handle it here or do nothing
		}
	}

	componentDidUpdate(prevProps, prevState){
		if(prevState.options.length !== this.state.options.length){
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json)
		}
	}

	componentWillUnmount(){
		console.log('component will unmount')
	}

	handleDeleteOptions(){
		this.setState(()=> ({ options: [] }));
	}

	handleDeleteOption(optionToRemove){
		this.setState((prevState)=>({
			options: prevState.options.filter((option)=> optionToRemove !== option)
		}));
	}

	handlePick(){
		let randomNum = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randomNum];
		alert(option);
	}

	handleAddOption(option){
		if(!option){
			return 'Enter valid value to add item';
		}else if(this.state.options.indexOf(option) > -1){
			return 'This option already exists';
		}
		//else
		this.setState((prevState)=>({ options: prevState.options.concat(option) }));
	}

	render(){
		const subtitle = "Put your life in the hands of a computer";
		return(
			<div>
				<Header subtitle={subtitle}/>
				<Action 
					hasOptions={this.state.options.length > 0}
					handlePick={this.handlePick}
				/>
				<Options 
					options={this.state.options}
					handleDeleteOption={this.handleDeleteOption}
					handleDeleteOptions={this.handleDeleteOptions}
				/>
				<AddOption
					handleAddOption={this.handleAddOption}
				/>
			</div>
		)
	}
}