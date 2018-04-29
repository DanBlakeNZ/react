class VisibilityToggle extends React.Component{

    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility(){
        this.setState((prevState)=>{
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? "Hide Details" : "Show Details"}</button>
                {this.state.visibility && (
                    <div>
                        <p>Hey, here are some details</p>
                    </div>
                )}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));



// const appRoute = document.getElementById('app');
// let visible = false;

// const toggleVisibility = ()=> {
//     visible = !visible;
//     render();
// }

// const render = ()=> {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>{visible ? "Hide Details" : "Show Details"}</button>
//             {visible && (
//                 <div>
//                     <p>Hey, these are some details</p>
//                 </div>
//             )}
//         </div>
//     );

//     ReactDOM.render(template, appRoute)
// }

// render();