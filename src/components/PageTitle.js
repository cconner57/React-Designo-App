import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button, H1, Body, Container, colors } from '../Styles';

const PageTitle = ({ height, title, text, button, children }) => {
	return (
		<TitleContainer height={height}>
			<div className={button ? 'HomeContainer' : 'TextContainer'}>
				<H1>{title}</H1>
				<Body>{text}</Body>
				{button === 'about' && (
					<Button className='AboutButton'>
						<Link to={`/${button}`}>Learn More</Link>
					</Button>
				)}
			</div>
			{children}
		</TitleContainer>
	);
};

export default PageTitle;

const TitleContainer = styled(Container)`
	height: ${({ height }) => height || '252px'};
	width: 1111px;
	position: relative;
	background-color: ${colors.peach};
	overflow: hidden;
	border-radius: 15px;
	justify-content: space-between;
	z-index: 1;
	.HomeContainer {
		max-height: 350px;
		width: 540px;
		margin: 145px 95px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		color: ${colors.white};
		user-select: none;
		.AboutButton {
			margin-top: 40px;
			a {
				text-decoration: none;
				color: ${colors.black};
			}
		}
	}
	.TextContainer {
		max-width: 410px;
		margin: 0 auto;
		color: ${colors.white};
		display: flex;
		flex-direction: column;
		align-items: center;
		p {
			margin-top: 24px;
			text-align: center;
		}
	}
	.Circle1 {
		position: absolute;
		top: -142px;
		right: 0;
		z-index: 2;
	}
	.Circle2 {
		min-width: 300px;
		position: absolute;
		top: -150px;
		right: 585px;
		transform: rotate(90deg);
		z-index: 2;
	}
	.Circle3 {
		position: absolute;
		top: 150px;
		right: 0;
		z-index: 2;
	}
`;
