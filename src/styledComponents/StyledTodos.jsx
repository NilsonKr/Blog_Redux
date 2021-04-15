import styled from 'styled-components';

export const StyledTodos = styled.main`
	position: relative;
	width: 100%;
	background: ${p => p.theme.bg};
	color: ${p => p.theme.font};

	.todo--checked {
		position: relative;
		display: inline-block;
		width: 100%;
		height: 100%;
		background: ${p => p.theme.todo.input};
	}

	.todo--input:hover .todo--checked {
		background: ${p => p.theme.todo.hover};
	}

	.todo--input input:checked ~ .todo--checked {
		background: ${p => p.theme.main};
	}
`;

export const StyledNewTodo = styled.div`
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0;
	right: 0;
	left: 0;
	height: 100vh;
	background: ${p => p.theme.bg};
	box-shadow: -5px 0 8px rgba(0, 0, 0, 0.171);

	input {
		background: ${p => p.theme.bg};
		color: ${p => p.theme.font};
	}

	@media screen and (min-width: 1024px) {
		& {
			left: 60%;
		}
	}

	@media screen and (min-width: 1440px) {
		& {
			left: 75%;
		}
	}
`;
