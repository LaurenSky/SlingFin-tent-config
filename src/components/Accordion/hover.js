import React from 'react';
import './accordion.css';


class Item extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hover: false
        };
    }

    mouseOver() {
        this.setState({hover: true});
    }

    mouseOut() {
        this.setState({hover: false});
    }

    render() {
      let image = this.props.lineDrawing

      const { item, i } = this.props;
        return (
            <div onMouseOver={this.mouseOver.bind(this)} onMouseOut={this.mouseOut.bind(this)}>
              {(this.state.hover) ? (<img className='large-image' src={image} alt='logo'/>) : (<img className='small-image' src={image}/>) }
            </div>
        )
    }
}

// <img src={part.lineDrawing} onmouseover="this.width=50%; this.height=50%" onmouseout="this.width=10%; this.height=10%"/>
export default Item;
