import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Constants } from './utils/theme/themeConstants';
import Layout from './hoc/layout';
import { StateProvider } from './store';
const App = () => {
	return (
		<StateProvider>
			<ThemeProvider theme={Constants}>
				<Layout />
			</ThemeProvider>
		</StateProvider>
	);
};

export default App;
