import './style.css';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = "Button HTML"

  btn.innerHTML = join(['hello', 'world'],' ')

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
