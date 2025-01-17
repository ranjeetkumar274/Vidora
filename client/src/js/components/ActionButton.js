/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ActionButton.scss';

export default function ActionButton({ className, disabled = false, icon, onClick }) {
  return (
    <button
      type="button"
      className={classnames('btn-action', { disabled }, className, 'call-btn')}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} color="white" />
    </button>
  );
}

ActionButton.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};
