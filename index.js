/////////////////////// Class Component
class Hello extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello there!</h1>
				<h1>Hello there!</h1>
				<h1>Hello there!</h1>
			</div>
		);
	}
}

////////////////////////// Function Component
function Dog() {
	return <p>Lassie says 'Woof!'.</p>;
}

ReactDOM.render(<Hello />, document.getElementById('root'));
ReactDOM.render(<Dog />, document.getElementById('bark'));
