import React from 'react';
import styled from 'styled-components';
import { any, string } from 'prop-types';

const Box = styled.div`
	background: ${(props) => props.theme.elevated};
	padding-top: 15px;
	border-radius: 4px;
`;
const ElevatedBox = ({ className, children }) => (
	<Box className={className}>{children}</Box>
);

ElevatedBox.propTypes = {
	children: any.isRequired,
	className: string,
};

export default ElevatedBox;
