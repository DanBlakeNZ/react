console.log('app.js is running!'); // eslint-disable-line no-console

const app = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of the computer',
	options: []
};

const onFormSubmit = (event)=>{
	event.preventDefault();
	
	const option = event.target.elements.option.value;

	if(option){
		app.options.push(option);
		event.target.elements.option.value = "";
		render();	
	}
}

const removeAll = ()=>{
	app.options = [];
	render();
}

const onMakeDecision = ()=>{
	let randomNum = Math.floor(Math.random() * app.options.length);
	const option = app.options[randomNum];
	alert(option);
}

const render = ()=>{
	const appRoute = document.getElementById('app');

	const template = (<div>
		<h1>{app.title}</h1>
		{(app.subtitle && <p>{app.subtitle}</p>)}
		<button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
		<button onClick={removeAll}>Remove All</button>
		<p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
		<ol>
			{
				app.options.map((option) => <li key={option}>{option}</li>)
			}
		</ol>
		<form onSubmit={onFormSubmit}>
			<input type="text" name="option"/>
			<button>Add Option </button>
		</form>
	</div>);

	ReactDOM.render(template, appRoute);
}

render();