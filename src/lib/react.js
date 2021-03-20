import { renderComponent } from './react-dom.js';

function createElement(tag, attrs, ...children) {   //通过这个函数把 JSX变成虚拟DOM
    return {
        tag,
        attrs,
        children
    }
}

class Component {
    constructor(props) {
        this.props = props;
        this.state = {};
    
    }

    setState(newState) {
        Object.assign(this.state, newState);
        console.log('666')
        renderComponent(this);
    }
}

export {
    createElement,
    Component
};


export default {
    createElement,
    Component
};