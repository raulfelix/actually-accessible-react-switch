import PropTypes from 'prop-types';
import React, {useState} from 'react';
import styled from 'styled-components';

const SwitchButton = styled.button`
  background-color: #706D6E;
  border: none;
  border-radius: 1.5rem;
  display: inline-block;
  vertical-align: middle;
  height: 1.5rem;
  padding: 0 1.25rem;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: 0;
    box-shadow: rgba(17, 117, 181, 0.6) 0 0 0 3px;
  }

  ${({ isActive }) => isActive && `
    background-color: #00AA00;

    ${SwitchIndicator} {
      left: 1.125rem;
    }
  `}

  ${({ isReadOnly }) => isReadOnly && `
    ${SwitchIndicator} {
      background-color: #DDD;
      &:hover {
        cursor: not-allowed;
      }
    }
  `}

`
const SwitchIndicator = styled.span`
  background-color: #FFFFFF;
  border-radius: 50%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);
  height: 1.25rem;
  width: 1.25rem;
  position: absolute;
  top: 0.125rem;
  left: 0.125rem;
  transition: all 200ms ease;
`

const Switch = ({ id, label = '', className = '', value = false, readonly = false, onChange }) => {
  const classes = ['switch', className];
  if (isActive) {
    classes.push('switch--active');
  }
  if (readonly) {
    classes.push('switch--readonly');
  }

  const [isActive, setIsActive] = useState(value)

  function onSwitched() {
    if (readonly === false) {
      setIsActive(!isActive);
      onChange(!isActive)
    }
  }

  return (
    <SwitchButton
      id={id}
      type="button"
      className={classes.join(' ')}
      role="switch"
      isActive={isActive}
      isReadOnly={readonly}
      aria-checked={isActive}
      aria-label={label}
      aria-readonly={readonly}
      onClick={() => onSwitched()}
    >
      <SwitchIndicator className="switch__indicator" />
    </SwitchButton>
  );
}

Switch.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.bool,
  readonly: PropTypes.bool,
  classes: PropTypes.string
};

export default Switch;