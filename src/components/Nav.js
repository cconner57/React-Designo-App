import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {colors} from '../Styles'

const Nav = () => {
	return (
		<Header>
			<Link to='/'>
				<img src='/images/logo-dark.png' alt='Logo' />
			</Link>
			<LinkContainer>
				<Link to='/about'>
					<h5>Our Company</h5>
				</Link>
				<Link to='/locations'>
					<h5>Locations</h5>
				</Link>
				<Link to='/contact'>
					<h5>Contact</h5>
				</Link>
			</LinkContainer>
		</Header>
	);
};

export default Nav;

const Header = styled.header`
	min-height: 15vh;
	min-width: 1111px;
	margin: 0 11.5vw;
	display: flex;
	align-items: center;
	justify-content: space-between;
	img {
		height: 24px;
		width: 196px;
	}
	a {
		text-decoration: none;
	}
`;
const LinkContainer = styled.div`
	height: 14px;
	width: 370px;
	display: flex;
	justify-content: space-between;
	h5 {
		font-size: 14px;
		line-height: 14px;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: ${colors.black};
		transition: color .25s ease;
		&:hover {
			color: ${colors.lightGrey};
		}
	}
`;
