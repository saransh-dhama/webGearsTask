import React from 'react';
import { shape, string, number, func } from 'prop-types';
import styled from 'styled-components';
const Item = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-column-gap: 15px;
	border-bottom: 1px solid ${(props) => props.theme.background};
	padding: 15px 15px 10px 15px;
`;
const ItemInfo = styled.div`
	display: grid;
	grid-template-columns: 1fr 15px;
	grid-template-rows: 26px 26px;
	grid-column-gap: 15px;
	grid-row-gap: 5px;
`;
const TitleDIv = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-column-gap: 15px;
`;
const ClearItem = styled.p`
	font-size: 2rem;
	color: #2f2f31;
	cursor: pointer;
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
const ReduceItemQunatity = styled.button`
	border: 0px;
	outline: none;
	border-radius: 4px;
	font-size: 0.8rem;
	background-color: ${(props) => props.theme.background};
	color: ${(props) => props.theme.color};
	width: 110px;
	line-height: 18px;
	cursor: pointer;
	&:hover {
		background-color: ${(props) => props.theme.secondaryColor};
	}
`;
const EachItem = ({ product, remove, reduce }) => {
	return (
		<Item className='each_item_in_cart'>
			<ItemInfo>
				<TitleDIv>
					<Title>
						{product.title}{' '}
						<span>{`$` + product.price * product.orderQuantity}</span>
					</Title>
					<div>
						<Quantity>
							Quantity: <span>{product.orderQuantity}</span>
						</Quantity>
					</div>
				</TitleDIv>
				<ClearItem onClick={remove}>X</ClearItem>
			</ItemInfo>
			<ReduceItemQunatity onClick={reduce}>
				{product.orderQuantity > 1 ? `Remove one item` : `Clear`}
			</ReduceItemQunatity>
		</Item>
	);
};
EachItem.propTypes = {
	product: shape({
		title: string.isRequired,
		price: number.isRequired,
		productImage: string.isRequired,
		description: string.isRequired,
	}).isRequired,
	remove: func.isRequired,
	reduce: func.isRequired,
};
export default EachItem;
