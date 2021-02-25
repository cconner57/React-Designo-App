import React from 'react';
import styled from 'styled-components';
import { Container, H2, Body, colors } from '../Styles';

const AboutDetails = ({ title, content, image }) => {
	return (
		<AboutContainer>
			{title === 'World-class talent' && (
				<img
					src={process.env.PUBLIC_URL + `/images/${image}`}
					alt='World-class talent'
				/>
			)}
			<div className='About'>
				<H2>{title}</H2>
				<Body>{content}</Body>
			</div>
			{title === 'The real deal' && (
				<img
					src={process.env.PUBLIC_URL + `/images/${image}`}
					alt='The real deal'
				/>
			)}
		</AboutContainer>
	);
};

export default AboutDetails;

const AboutContainer = styled(Container)`
	height: 640px;
	width: 1111px;
	margin-top: 160px;
    display: flex;
    justify-content: space-between;
	overflow: hidden;
	margin-bottom: 32px;
	border-radius: 15px;
	background-color: hsl(14, 76%, 97%);
	.About {
        height: 332px;
        width: 465px;
        margin: 0 auto;
		
		h2 {
			color: ${colors.peach};
		}
		p {
			margin-top: 32px;
		}
	}
	img {
		height: 640px;
		width: 476px;
	}
`;
