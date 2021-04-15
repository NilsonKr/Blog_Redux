import React from 'react';
import { ThemeProvider } from 'styled-components';

const themes = {
	light: {
		bg: '#fff',
		main: 'mediumvioletred',
		font: '#000',
		header: 'mediumvioletred',
	},
	dark: {
		bg: '#2b2b2b',
		main: 'mediumvioletred',
		font: '#fff',
		header: '#151515',
	},
};

const Theme = props => {
	return <ThemeProvider theme={themes['dark']}>{props.children}</ThemeProvider>;
};

export default Theme;
