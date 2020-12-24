import './style.css';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = "Button HTML"

  btn.innerHTML = 'Click me and check the console!';
  // 点击时动态加载bundle
  btn.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
    var print = module.default
    print()
  });

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
