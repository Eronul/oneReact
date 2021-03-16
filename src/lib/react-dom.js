function setAttribute(node, attrs) {   // 这个函数是渲染属性
    if(!attrs) return;
      for(let key in attrs) {
    if(key.startsWith('on')) {
      node[key.toLocaleLowerCase()] = attrs[key];
    } else if(key === 'style') {
      Object.assign(node.style, attrs[key]);
    } else {
      node[key] = attrs[key];
    }
    }
   }

function render(vdom, container) {    //这里只处理了标签h1,span等，没有处理属性
    let node = createDomfromVdom(vdom);
    container.appendChild(node);
}

function createDomfromVdom(vdom) {
    let node;
    if(typeof vdom === 'string') {
      node = document.createTextNode(vdom);
      return node;
    }

    if(typeof vdom === 'object') {
      if(typeof vdom.tag === 'function') {
          let component = new vdom.tag(vdom.attrs);
          let vnode = component.render();
          node = createDomfromVdom(vnode);
          component.$root = node;
      } else {
          node = document.createElement(vdom.tag);
          setAttribute(node, vdom.attrs);
          vdom.children.forEach(childVdom => render(childVdom, node));
        }
    }
    return node;
}

function renderComponent(component) {
  let vdom = component.render();
  let node = createDomfromVdom(vdom);
  if(component.$root) {
    component.$root.parentNode.replaceChild(node, component.$root);
  }
  console.log('render')
}

// function createComponent(constructor, attrs) {
//     return new constructor(attrs);
// }

const ReactDOM = {
    render(vdom, container) {
    container.innerHTML = '';
    render(vdom, container);
    },
    renderComponent
   };


export default ReactDOM;