import React from './lib/react.js';
import ReactDOM from './lib/react-dom.js';


class App extends React.Component {
    
    constructor(props) {
        super(props);

        this.states = {
            title:'jirengu'
        }
    }

    handleClick() {
        
    }

    render() {
        return (
            <div>
              <h1>{ this.states.title }</h1>    
              <span onClick={this.handelClick}>hello</span>
            </div>
        );
    }
}


function clickMe() {
    console.log('click Me');
}

let styleObj = {
    color: 'blue',
    fontsize: '20px'
}   

let div = (<h1 className="hello" id="header" onClick={ clickMe } style={ styleObj } dataId = "hello">  
    <span>hello</span>
    <span>world</span>
</h1>);  //JSX变成JS

console.log(div);


ReactDOM.render(div, document.body);  //把虚拟 DOM 转变成真实 DOM