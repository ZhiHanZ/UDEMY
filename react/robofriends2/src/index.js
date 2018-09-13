import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import {robots} from './robots';
import registerServiceWorker from './registerServiceWorker';
import Cardlist from './Cardlist'
ReactDOM.render(<Cardlist robots={robots}/>,
    document.getElementById('root'));
registerServiceWorker();
