import React from 'react';
import styled from 'styled-components';
const Item = styled.div`
	display: grid;
	grid-template-columns: 1fr 30px;
	grid-column-gap: 15px;
	margin-top: 30px;
	border-bottom: 1px solid #6d6d6d;
	padding-bottom: 10px;
	&:hover {
		button {
			background-color: ${(props) => props.theme.primaryColor};
		}
	}
`;
const ItemInfo = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 26px 26px;
	grid-column-gap: 15px;
	grid-row-gap: 5px;
`;
const Title = styled.h3`
	font-size: 1.2rem;
	span {
		float: right;
		color: ${(props) => props.theme.secondaryColor};
	}
`;

const Quantity = styled.p`
	font-size: 1.2rem;
	span {
		float: right;
		color: ${(props) => props.theme.secondaryColor};
	}
`;
const Remove = styled.p`
	font-size: 2rem;
	color: #2f2f31;
	cursor: pointer;
`;
const EachProduct = () => {
	return (
		<Item className='each_item_in_cart'>
			<ItemInfo>
				<Title>
					Title of Item 1 <span>24$</span>
				</Title>
				<Quantity>
					Quantity: <span>2</span>
				</Quantity>
			</ItemInfo>
			<Remove>x</Remove>
		</Item>
	);
};

export default EachProduct;
