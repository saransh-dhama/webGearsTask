import React from 'react';
import { string, func } from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';
const InputElement = styled.input`
	background: none;
	box-shadow: none;
	border: none;
	color: ${(props) => props.theme.color};
	font-size: 14px;
	line-height: 30px;
	margin: 5px;
	border-bottom: 1px solid #6d6d6d;
	outline: none !important;
	width: ${(props) => props.inputWidth + `%`};
`;
const Input = ({
	placeholder,
	name,
	id,
	type,
	value,
	className,
	onKeyUpHandler,
	handleChange,
	inputWidth,
}) => {
	return (
		<InputElement
			placeholder={placeholder}
			name={name}
			id={id}
			type={type}
			value={value}
			className={className}
			onKeyUp={_.debounce(onKeyUpHandler, 300)}
			onChange={(e) => handleChange(e.target.value)}
			inputWidth={inputWidth}
			autoComplete='off'
		/>
	);
};

Input.propTypes = {
	value: string.isRequired,
	className: string,
	name: string.isRequired,
	id: string.isRequired,
	placeholder: string,
	type: string.isRequired,
	handleClick: func,
	handleChange: func,
};

export default Input;
