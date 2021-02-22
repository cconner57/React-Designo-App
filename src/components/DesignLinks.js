import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors, Container, H2 } from '../Styles';

const DesignLinks = ({ title, height, image, link }) => {
	return (
		<RouterLink to={`/${link}`} height={height}>
			<DesignContainer image={process.env.PUBLIC_URL + `/images/${image}`}>
				<H2>{title}</H2>
				<p>
					View Projects <i className='fas fa-angle-right'></i>
				</p>
			</DesignContainer>
		</RouterLink>
	);
};

export default DesignLinks;

const RouterLink = styled(Link)`
	height: ${(props) => props.height || '308px'};
	min-width: 541px;
	display: flex;
	align-items: center;
	justify-content: center;
	text-decoration: none;
`;

const DesignContainer = styled(Container)`
	height: 100%;
	width: 100%;
	flex-direction: column;
	border-radius: 15px;
	color: ${colors.white};
	background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
		url(${(props) => props.image});
	cursor: pointer;
	p {
		margin-top: 24px;
		font-weight: 500;
		font-size: 15px;
		line-height: 22px;
		letter-spacing: 5px;
		text-transform: uppercase;
		user-select: none;
		i {
			margin-left: 8px;
			color: ${colors.peach};
		}
	}
`;
