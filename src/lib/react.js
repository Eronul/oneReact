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
        this.states = {};
    
    }

    setState(newState) {
        Object.assign(this.states, newState);
    }
}
const React = {
    createElement,
    Component
};


export default React;