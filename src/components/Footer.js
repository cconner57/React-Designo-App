import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Button, Body, colors } from '../Styles';

import Circle from '../images/shared/desktop/bg-pattern-small-circle.svg';
import Circles2 from '../images/shared/desktop/bg-pattern-two-circles.svg';
import { ReactComponent as FacebookIcon } from '../images/shared/desktop/icon-facebook.svg';
import { ReactComponent as YoutubeIcon } from '../images/shared/desktop/icon-youtube.svg';
import { ReactComponent as TwitterIcon } from '../images/shared/desktop/icon-twitter.svg';
import { ReactComponent as PinterestIcon } from '../images/shared/desktop/icon-pinterest.svg';
import { ReactComponent as InstagramIcon } from '../images/shared/desktop/icon-instagram.svg';

const Footer = () => {
	const location = useLocation();
	return (
		<FooterContainer height={(location.pathname === '/contact').toString()}>
			{location.pathname !== '/contact' && (
				<ContactProject>
					<div>
						<h5>Let's talk about your project</h5>
						<Body>
							Ready to take it to the next level? Contact us today and find out
							how our expertise can help your business grow.
						</Body>
					</div>
					<Button>Get in touch</Button>
					<img src={Circles2} alt='Background Circles' />
					<img src={Circle} alt='Background Circles' />
					<img src={Circles2} alt='Background Circles' />
				</ContactProject>
			)}
			<ContactContainer>
				<div className='TopSection'>
					<img src='/images/logo-light.png' alt='Logo' />
					<div className='LinkList'>
						<p>Our Company</p>
						<p>Locations</p>
						<p>Contact</p>
					</div>
				</div>
				<hr />
				<div className='BottomSection'>
					<div className='ContactInfo'>
						<Body>
							<span>Designo Central Office</span>
							<br />
							3886 Wellington Street
							<br /> Toronto, Ontario M9C 3J5
						</Body>
						<Body>
							<span>Contact Us (Central Office)</span>
							<br />
							<span>P: +1 253-863-8967</span>
							<br />
							<span>M: contact@designo.co</span>
						</Body>
					</div>
					<div className='IconList'>
						<FacebookIcon />
						<YoutubeIcon />
						<TwitterIcon />
						<PinterestIcon />
						<InstagramIcon />
					</div>
				</div>
			</ContactContainer>
		</FooterContainer>
	);
};

export default Footer;

const FooterContainer = styled(Container)`
	min-height: ${({ height }) => (JSON.parse(height) ? '0vh' : '60vh')};
	min-width: 100vw;
	margin-top: ${({ height }) => (height ? '160px' : '380px')};
	padding-bottom: ${({ height }) => (height ? '40px' : '0')};
	position: relative;
	background-color: ${colors.black};
`;

const ContactProject = styled(Container)`
	height: 292px;
	width: 1111px;
	position: absolute;
	top: -15%;
	left: 50%;
	justify-content: space-around;
	transform: translate(-50%, -50%);
	border-radius: 15px;
	background-color: ${colors.peach};
	color: ${colors.white};
	overflow: hidden;
	div {
		height: 174px;
		width: 459px;
		margin-top: 52px;
		h5 {
			height: 98px;
			width: 268px;
			font-size: 40px;
			line-height: 40px;
			font-weight: 500;
		}
	}
	button {
		z-index: 3;
	}
	img:nth-child(3) {
		position: absolute;
		top: -142px;
		right: 0;
		transform: scaleY(-1);
		z-index: 2;
	}
	img:nth-child(4) {
		min-width: 275px;
		position: absolute;
		top: 150px;
		right: 575px;
		transform: rotate(270deg);
		z-index: 2;
	}
	img:last-child {
		position: absolute;
		top: 150px;
		right: 0;
		transform: scaleY(-1);
		z-index: 2;
	}
`;

const ContactContainer = styled.div`
	width: 1111px;
	margin-top: 90px;
	.TopSection {
		display: flex;
		justify-content: space-between;
		align-items: center;
		img {
			height: 27px;
			width: 202px;
		}
		.LinkList {
			height: 14px;
			width: 370px;
			display: flex;
			justify-content: space-between;
			color: ${colors.white};
			p {
				font-size: 14px;
				font-weight: 400;
				line-height: 14px;
				letter-spacing: 2px;
			}
		}
	}
	hr {
		height: 1px;
		width: 100%;
		margin: 40px 0;
		opacity: 10%;
		background-color: ${colors.white};
	}
	.BottomSection {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		.ContactInfo {
			display: flex;
			color: ${colors.white};
			opacity: 50%;
			p {
				height: 78px;
				width: 350px;
				span {
					font-weight: bold;
				}
			}
		}
		.IconList {
			height: 24px;
			width: 184px;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
	}
`;
