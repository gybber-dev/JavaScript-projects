import React from 'react';
import PropTypes from 'prop-types';
import Portal from '../portal/Portal';

import './Modal.css';

const Modal = ({
  title, isOpen, onCancel, onSubmit, children,
}) => {

  return (
    <>
      { isOpen &&
        <Portal>
          <div className="modalOverlay">
            <div className="modalWindow">
              <div className="modalHeader">
                <div className="modalTitle">{title}</div>
                {/* <Icon name="times" onClick={onCancel} /> */}
              </div>
              <div className="modalBody">
                {children}
              </div>
              <div className="modalFooter">
                <button onClick={onCancel}>Cancel</button>
                <button onClick={onSubmit}>Submit</button>
              </div>
            </div>
          </div>
        </Portal>
      }
    </>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.node,
};

Modal.defaultProps = {
  title: 'Modal title',
  isOpen: false,
  onCancel: () => {},
  onSubmit: () => {},
  children: null,
};

/*
========
Example:
========

  const [show, setShow] = useState(false);
  const handleCancel = ()=>setShow(false)
  onSubmit={handleSubmit}
  return(
    <Modal
          title="Test Dialog window"
          isOpen={show}
          onCancel={handleCancel}
          onSubmit={handleSubmit}
      >
          <div className="form-inline" style={{justifyContent: 'center'}}>
              <input type="text" className="form-control" id="inlineFormInputName2" placeholder="Enter your name" />
              <button type="submit" className="btn btn-primary mb-2" onClick={handleSubmit}>Submit</button>
          </div>
      </Modal>
  )


*/

export default Modal;
