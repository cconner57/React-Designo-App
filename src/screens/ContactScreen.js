import React from 'react';
import PageTitle from '../components/PageTitle';
import Location from '../components/Location';
import styled from 'styled-components';
import { Container, Button, colors } from '../Styles';
import Circle from '../images/contact/desktop/bg-pattern-hero-desktop.svg';

const ContactScreen = () => {
	return (
		<ContactContainer>
			<PageTitle
				height='480px'
				title='Contact Us'
				text='Ready to take it to the next level? Let’s talk about your	project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.'
				button>
				<ContactForm onSubmit={(e) => e.preventDefault()}>
					<input type='text' name='name' placeholder='Name' />
					<input type='text' name='email' placeholder='Email Address' />
					<input type='text' name='phone' placeholder='Phone' />
					<textarea name='message' cols='30' rows='10'>
						Your Message
					</textarea>
					<Button>
						Submit
					</Button>
					<img className='ContactCircle' src={Circle} alt='Background Circle' />
				</ContactForm>
			</PageTitle>
			<div className='LocationsContainer'>
				<Location title='Canada' />
				<Location title='Australia' />
				<Location title='United Kingdom' />
			</div>
		</ContactContainer>
	);
};

export default ContactScreen;

const ContactContainer = styled(Container)`
	min-height: 85vh;
	min-width: 100vw;
	flex-direction: column;
	p {
		margin-top: 32px;
	}
	.LocationsContainer {
		height: 364px;
		min-width: 1110px;
		margin-top: 160px;
		display: flex;
		justify-content: space-evenly;
	}
`;

const ContactForm = styled.form`
	height: 371px;
	width: 380px;
	margin-right: 96px;
	display: flex;
	flex-direction: column;
	input {
		height: 38px;
		width: 380px;
		background-color: transparent;
		border-bottom: 1px solid ${colors.white};
		&::placeholder {
			padding-left: 16px;
			color: hsla(0, 0%, 100%, 0.5);
		}
		&:nth-child(2) {
			margin: 25px 0;
		}
	}
	textarea {
		height: 102px;
		width: 380px;
		margin-top: 25px;
		resize: none;
		background-color: transparent;
		padding-left: 16px;
		color: hsla(0, 0%, 100%, 0.5);
		border-bottom: 1px solid ${colors.white};
	}
	button {
		margin-top: 24px;
		align-self: flex-end;
	}
	.ContactCircle {
		position: absolute;
		top: -162px;
		left: 0px;
	}
`;
