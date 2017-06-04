// import modules
import React from 'react';
import ReactDOM from 'react-dom';

//import partials
import Header from './components/Header.jsx';
import Body from './components/Body.jsx';

// Setup render
class App extends React.Component {
  	render() {
    	return (
    		<div className="row full-height">
    			<Header/>
    			<Body />
      		</div>
    	);
  	}
}

// Render the Components
ReactDOM.render(<App />, document.getElementById('app'));