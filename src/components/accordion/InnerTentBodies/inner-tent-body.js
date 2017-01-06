import React, {Component} from 'react';
import '../accordion.css';


const styles = {
  active: {
    display: 'inherit'
  },

  inactive: {
    display: 'none'
  }
};

class InnerTentBodyCategory extends Component {
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
    const data = this.props.data;
    // OR const {data} = this.props
    const stateStyle = this.state.active ? styles.active : styles.inactive;

    const innerTentBodyList = data.map(part => {
      console.log(part.category, part.name)
      return (
        // <li key={part.id} className={part.category}>{part.name}</li>
        <li key={part.id}>
          <p onClick={this.toggle} className='accordion-header'>
            {part.name}
          </p>
          <p style={stateStyle} className='accordion-body'>
            {part.description}
          </p>
        </li>
      )
    })

    return (
      <ul className='part-list-accordion'>
        {innerTentBodyList}
      </ul>
    );
  }
}

export default InnerTentBodyCategory;

// Accordion.propTypes = {
//   summary: React.PropTypes.string.isRequired,
//   details: React.PropTypes.string.isRequired
// };
