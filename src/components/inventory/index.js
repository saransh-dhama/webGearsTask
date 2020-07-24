import React, { useEffect } from 'react';
import { ElevatedBox, HeadingLabel } from '../../uiComponents';
import styled from 'styled-components';
const InventorySection = styled.section`
	grid-area: inventory;
`;

const Inventory = () => {
	return (
		<InventorySection>
			<ElevatedBox className='inventory_elevated'>
				<HeadingLabel className='inventory_heading'>Inventory</HeadingLabel>
			</ElevatedBox>
		</InventorySection>
	);
};

export default Inventory;
