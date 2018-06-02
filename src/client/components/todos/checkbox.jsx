import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Checkbox = props => (
  <Container>
    <Input type="checkbox" checked={props.checked} onChange={props.callback} />
    <Checkmark />
  </Container>
);

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  callback: PropTypes.func.isRequired,
};

const Container = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  left: 0;
  &:checked ~ span {
    border: 2px solid transparent;
    &:after {
      display: block;
    }
  }
`;

const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 15px;
  width: 15px;
  border: 2px solid ${p => p.theme.colors.text};
  border-radius: 50%;
  &:after {
    content: '';
    position: absolute;
    display: none;
    left: 2px;
    top: -2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

export default Checkbox;
