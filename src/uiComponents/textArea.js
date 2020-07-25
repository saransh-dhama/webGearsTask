import React from 'react';
import { string, func } from 'prop-types';
import styled from 'styled-components';
const TextAreaElement = styled.textarea`
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
const TextArea = ({
	placeholder,
	name,
	id,
	value,
	className,
	onKeyUpHandler,
	handleChange,
	inputWidth,
}) => {
	return (
		<TextAreaElement
			placeholder={placeholder}
			name={name}
			id={id}
			value={value}
			className={className}
			onKeyUp={onKeyUpHandler}
			onChange={(e) => handleChange(e.target.value)}
			inputWidth={inputWidth}
		/>
	);
};

TextArea.propTypes = {
	value: string.isRequired,
	className: string,
	name: string.isRequired,
	id: string.isRequired,
	placeholder: string,
	handleClick: func,
	handleChange: func,
};

export default TextArea;
