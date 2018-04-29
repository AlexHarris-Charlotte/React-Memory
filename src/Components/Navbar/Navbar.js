import React from 'react';
import styles from './Navbar.css';

class Navbar extends React.Component {
    constructor() {
        super();
        score: 0;
        topScore: 0;
        this.state = {
            headerItems: ["Memory Game", "Click an image to begin", { score: 0, topScore: 0 }]
        };
    }
    
    render() {

        
        return (
            <div className="row navbar">
                {this.state.headerItems.map((item, index) => {
                    if(typeof(item) === 'string') {
                        return (
                            <p className="col" key={index}>
                                {item}
                            </p>
                        )
                    } else if (typeof(item) === 'object') {
                        return (
                            <p className=" col" key={index}>
                                {`Score: ${item.score} | TopScore: ${item.topScore}`}        
                            </p>
                        )
                    }
                })}
            </div>
        )
    }
}


export default Navbar;
