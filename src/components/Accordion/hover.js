import React from 'react';
import { Modal} from 'react-bootstrap';
import './accordion.css';


class Item extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }

  close() {
    this.setState({
      showModal: false
    });
  };

  open() {
    this.setState({
      showModal: true
    });
  };

  render() {
    let image = this.props.lineDrawing

    return (
      <div>
        <img className='small-image' src={image} alt='logo' onClick={this.open.bind(this)}/>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)} >
          <Modal.Body>
            <img className='large-image' src={image} alt='logo'/>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
};


export default Item;
