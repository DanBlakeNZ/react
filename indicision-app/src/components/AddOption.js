import React from 'react';

export default class AddOption extends React.Component{
	state = {
		error: undefined
	}

	handleAddOption = (event)=>{
		event.preventDefault();

		const option = event.target.elements.option.value.trim();
		const error = this.props.handleAddOption(option);

		this.setState(()=>( { error } ))  // error:error

		if(!error){
			event.target.elements.option.value = ""; // resets input
		}
	};

	render(){
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.handleAddOption}>
					<input type="text" name="option" />
					<button>Add option</button>
				</form>
			</div>
		)
	};
}

const User = (props)=>{
	return(
		<div>
			<p>Name:{props.name}</p>
			<p>Age:{props.age}</p>
		</div>
	)
};