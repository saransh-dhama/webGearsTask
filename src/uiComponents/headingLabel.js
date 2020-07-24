import React from 'react';
import styled from 'styled-components';
import { any, string } from 'prop-types';

const HeadingH2 = styled.h2`
	text-align: center;
	font-size: 1.5rem;
	font-weight: ${(props) => props.theme.fontBold};
`;
const HeadingLabel = ({ className, children }) => (
	<HeadingH2 className={className}>{children}</HeadingH2>
);

HeadingLabel.propTypes = {
	children: any.isRequired,
	className: string,
};

export default HeadingLabel;
