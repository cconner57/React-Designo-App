import styled from 'styled-components';

export const colors = {
	peach: 'hsl(11,73%,66%)',
	black: 'hsl(270, 3%,11%)',
	white: 'hsl(0,0%,100%)',
	lightPeach: 'hsl(11,100%,80%)',
	darkGrey: 'hsl(264, 5%, 20%)',
	lightGrey: 'hsl(210, 17%, 95%)',
};

export const Button = styled.button`
	height: 56px;
	width: 152px;
	color: ${({ textColor }) => textColor || colors.black};
	border-radius: 8px;
	background-color: ${({ backgroundColor }) =>
		backgroundColor || 'hsl(0, 0%, 100%)'};
	text-transform: uppercase;
	cursor: pointer;
	transition: all .25s ease;
	&:hover {
		color: ${colors.white};
		background-color: ${colors.lightPeach};
	}
`;

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const H1 = styled.h1`
	font-weight: 500;
	font-size: 48px;
	line-height: 48px;
`;

export const H2 = styled.h2`
	font-weight: 500;
	font-size: 40px;
	line-height: 48px;
	letter-spacing: 2px;
	text-transform: uppercase;
	color: ${({ textColor }) => textColor || colors.white};
	user-select: none;
`;

export const H3 = styled.h3`
	font-weight: 500;
	font-size: 20px;
	line-height: 26px;
	letter-spacing: 5px;
	user-select: none;
`;

export const Body = styled.p`
	width: 100%;
	margin-top: 11px;
	font-weight: 400;
	font-size: 16px;
	line-height: 26px;
	user-select: none;
`;
