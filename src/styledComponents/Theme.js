import React from 'react';
import { ThemeProvider } from 'styled-components';

const themes = {
	light: {
		bg: '#fff',
		main: 'mediumvioletred',
		font: '#000',
		header: 'mediumvioletred',
		post: {
			postCard: 'white',
			shadow: '0 0 6px rgba(0, 0, 0, 0.274)',
		},
		todo: {
			input: '#eee',
			hover: '#ccc',
		},
	},
	dark: {
		bg: '#2b2b2b',
		main: 'mediumvioletred',
		font: '#e4e4e4',
		header: '#151515',
		post: {
			card: '#131313',
			shadow: '0 0 10px rgba(0, 0, 0, 1)',
		},
		todo: {
			input: 'black',
			hover: '#151515',
		},
	},
};

const Theme = props => {
	console.log(props);
	return <ThemeProvider theme={themes[props.theme]}>{props.children}</ThemeProvider>;
};

export default Theme;
