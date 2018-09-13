import React from 'react';
import ReactDOM from 'react-dom';//for dom
import './index.css';//same directoty
import 'tachyons';
import Hello from "./Hello";
import registerServiceWorker from './registerServiceWorker';//off-line supporter

ReactDOM.render(<Hello greeting={'Hello' + ' miao miao miao'}/>, document.getElementById('root'));
registerServiceWorker();//Using function render
