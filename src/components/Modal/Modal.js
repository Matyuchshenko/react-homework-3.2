import PropTypes from 'prop-types';
import { Component } from 'react';
import './Modal.css';

import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handler);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handler);
  }

  handler = e => {
    if (e.code === 'Escape') {
      this.props.onToggleModal();
    }
  };

  handleBackdrop = e => {
    if (e.currentTarget === e.target) {
      this.props.onToggleModal();
    }
  };

  render() {
    const { largeImageURL } = this.props;

    return createPortal(
      <div className="Overlay" onClick={this.handleBackdrop}>
        <div className="Modal">
          <img src={largeImageURL} alt="" />
        </div>
      </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
  onToggleModal: PropTypes.func.isRequired,
};

