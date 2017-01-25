import React from 'react';
import { Modal} from 'react-bootstrap';
import './accordion.css';


class EnlargeImage extends React.Component {
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
    let smImage = this.props.thumbnail
    let lgImage = this.props.lineDrawing
    let name = this.props.partName
    return (
      <div>
        <img className='small-image' src={smImage} alt={name} onClick={this.open.bind(this)}/>
        <Modal show={this.state.showModal} onHide={this.close.bind(this)} >
          <Modal.Header closeButton>
            <Modal.Title><strong>{name}</strong></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img className='large-image' src={lgImage} alt='logo'/>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
};


export default EnlargeImage;
