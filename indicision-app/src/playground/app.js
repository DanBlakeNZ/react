class IndicisionApp extends React.Component {

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

const Header = (props)=>{
	return (
		<div>
			<h1>{props.title}</h1>
			{props.subtitle && <h2>{props.subtitle}</h2>}
		</div>
	)
}

Header.defaultProps = {
	title: "Indicision App"
}

const Action = (props)=>{
	return (
		<div>
			<button 
				onClick={props.handlePick}
				disabled={!props.hasOptions}
			>
			What should I do?
			</button>
		</div>
	)
}

const Options = (props)=>{
	return(
		<div>
			<button onClick={props.handleDeleteOptions}>Remove All</button>
			{props.options.length === 0 && <p>Please add and option to get started</p>}
			{
				props.options.map((option) => (
					<Option 
						key={option} 
						optionText={option} 
						handleDeleteOption={props.handleDeleteOption}
					/>
				))
			}
		</div>
	)
}

const Option = (props)=>{
	return(
		<div>
			{props.optionText}
			<button 
				onClick={()=>{
					props.handleDeleteOption(props.optionText)
				}}
			>
				Remove
			</button>
		</div>
	)
}

class AddOption extends React.Component{
	constructor(props){
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			error: undefined
		}
	}

	handleAddOption(event){
		event.preventDefault();

		const option = event.target.elements.option.value.trim();
		const error = this.props.handleAddOption(option);

		this.setState(()=>( { error } ))  // error:error

		if(!error){
			event.target.elements.option.value = ""; // resets input
		}
	}

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
	}
}

const User = (props)=>{
	return(
		<div>
			<p>Name:{props.name}</p>
			<p>Age:{props.age}</p>
		</div>
	)
};


ReactDOM.render(<IndicisionApp />, document.getElementById('app'))

