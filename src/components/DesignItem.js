import React from 'react';
import styled from 'styled-components';
import { Container, H3, Body, colors } from '../Styles';

const DesignItem = ({ image, title, text }) => {
	return (
		<Item>
			<img
				src={process.env.PUBLIC_URL + `/images/${image}`}
				alt={`${title} app`}
			/>
			<div>
				<H3>{title}</H3>
				<Body>{text}</Body>
			</div>
		</Item>
	);
};

export default DesignItem;

const Item = styled(Container)`
	height: 478px;
	width: 350px;
	flex-direction: column;
	border-radius: 15px;
	overflow: hidden;
	cursor: pointer;
	&:hover {
		div {
			background-color: ${colors.peach};
			h3,
			p {
				color: ${colors.white};
			}
		}
	}
	img {
		max-height: 320px;
		max-width: 350px;
	}
	div {
		min-height: 158px;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: hsl(14, 76%, 97%);
		transition: background-color 0.5s ease;
		h3 {
			color: ${colors.peach};
			text-transform: uppercase;
			transition: color .5s ease;
		}
		p {
			width: 286px;
			text-align: center;
			transition: color .5s ease;
		}
	}
`;
