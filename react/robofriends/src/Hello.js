import React, { Component } from 'react';
import './Hello.css';
const Hello = (props) => {
            return(
            <div className='f1 tc'>
                <h1>Hello world!</h1>
                <p> It is my first react component!!!!</p>
                {this.props.greeting}
            </div>
        );

}
// class Hello extends Component {
//     render(){
//         return(
//             <div className='f1 tc'>
//                 <h1>Hello world!</h1>
//                 <p> It is my first react component!!!!</p>
//                 {this.props.greeting}
//             </div>
//         );
//     }
// }
export default Hello;