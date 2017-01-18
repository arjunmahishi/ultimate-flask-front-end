var TestComponent = React.createClass({
	getInitialState: function(){
    return { heading: '' };
  },

	makeChange: function(event){
		console.log("ddd");
		this.setState({heading:event.target.value});
		console.log("SS");
	},

	render: function(){
		return(
			<div>
				<h2>{this.state.heading}</h2>
				<input type="text" onChange={this.makeChange}/>
			</div>
		);
	}
});

ReactDOM.render(
  <TestComponent />,
  document.getElementById('content')
);
