import styled from 'styled-components';

export const StyledPosts = styled.main`
	width: 100%;
	background: ${p => p.theme.bg};

	.posts--usertitle {
		font-size: 2.3rem;
		color: ${p => p.theme.font};
	}

	.posts--usertitle span {
		color: ${p => p.theme.main};
	}
`;

export const StyledPostCard = styled.div`
	position: relative;
	overflow: hidden;
	width: 90%;
	height: 90%;
	padding: 10px;
	color: ${p => p.theme.font};
	background-color: ${p => p.theme.post.card};
	box-shadow: ${p => p.theme.post.shadow};
	border-radius: 15px;

	.post--title {
		font-size: 1.5rem;
	}
	.post--body {
		margin-top: 5px;
		font-size: 1.2rem;
		opacity: 0.8;
	}

	.post--body span {
		font-weight: bold;
		color: ${p => p.theme.main};
	}
`;

export const StyledPost = styled.main`
	width: 100%;
	padding: 50px 10px 0;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-flow: column;
	background: ${p => p.theme.bg};
	color: ${p => p.theme.font};

	.post--userTitle {
		position: relative;
		z-index: 1;
		width: fit-content;
		margin: 0 auto;
		background-color: ${p => p.theme.bg};
		color: ${p => p.theme.font};
	}

	.post--userTitle span {
		color: ${p => p.theme.main};
	}

	.post--userTitle__container::after {
		content: '';
		position: absolute;
		top: 50%;
		right: 0;
		left: 0;
		height: 3px;
		background-color: ${p => p.theme.font};
		transform: translateY(-50%);
	}
`;

export const StyledComment = styled.div`
	width: 90%;
	margin: 20px auto;
	padding: 5px;
	background-color: ${p => p.theme.post.card};
	box-shadow: ${p => p.theme.post.shadow};
	border-radius: 20px;
`;
