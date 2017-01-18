import React from 'react';
import '../accordion.css';


const styles = {
  active: {
    display: 'inherit'
  },

  inactive: {
    display: 'none'
  }
};


class Accordion extends React.Component {

  constructor() {
    super();
    this.state = {
      active: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      active:!this.state.active
    });
  }

  render () {
    const stateStyle = this.state.active ? styles.active : styles.inactive;

    return (
      <section>
        <p onClick={this.toggle} className='accordion-header'>
          HI
        </p>
        <p style={stateStyle} className='accordion-body'>
          BYE
        </p>
      </section>
    );
  }
}

// Accordion.propTypes = {
//   summary: React.PropTypes.string.isRequired,
//   details: React.PropTypes.string.isRequired
// };

export default Accordion;
