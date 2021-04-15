import styled from 'styled-components';

export const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 10px 20px 10px 20px;
	background-color: ${p => p.theme.header};
	box-shadow: 0 5px 8px rgba(0, 0, 0, 0.404);

	a {
		text-decoration: none;
		font-size: 1.7rem;
		margin: 0 15px;
		color: white;
	}

	a:hover {
		text-decoration: underline;
	}
`;

export const StyledMain = styled.main`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 93vh;
	background: ${p => p.theme.bg};
	color: ${p => p.theme.font};
`;
