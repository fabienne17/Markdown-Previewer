import React from "react";

//input default value
var markdownStr = '## Code\nInline `Some code here`\nBlock code\n``` js\nvar foo = function (bar) {\n  return bar++;\n};\nconsole.log(foo(5));\n```\n\n## Images\n![Minion](https://octodex.github.com/images/minion.png)\n![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")';

//setup markdown parser
var marked = require('marked');

//setup markdown options
marked.setOptions({
	sanitize: true,
	smartypants: true,
	highlight: function (code) {
    	return require('highlight.js').highlightAuto(code).value;
  	}
});

class Body extends React.Component {
	constructor(props) {
    	super(props);
    	this.handleChange = this.handleChange.bind(this);
    	this.state = {value: markdownStr};
  	}

  	handleChange(e) {
    	this.setState({value: e.target.value});
  	}

  	getRawMarkup() {
		var markup = marked(this.state.value, {});
		return { __html: markup };
  	}
	
  	render() {
	    return (
	      	<div className="row full-height">
	      		<section className="col-xs-6 full-height">
	      			<p>Input</p>
	      			<div className="full-height">
	        			<textarea
	        				placeholder='Type some *markdown* here!'
	        				className='input'
	        				rows="5"
	          				onChange={this.handleChange}
	          				defaultValue={this.state.value} />
	          		</div>
	          	</section>
	          	<section className="col-xs-6 full-height">
	          		<p>Output</p>
	          		<div className="full-height">
	        			<div
	          				className="result full-height"
	          				rows="5"
	          				dangerouslySetInnerHTML={this.getRawMarkup()}/>
	        		</div>
	        	</section>
	    	</div>
    	);
	}
}

export default Body;