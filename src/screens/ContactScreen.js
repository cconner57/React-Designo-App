import React, { useState } from 'react';
import PageTitle from '../components/PageTitle';
import Location from '../components/Location';
import InputError from '../components/InputError';
import styled from 'styled-components';
import { Container, Button, colors } from '../Styles';
import Circle from '../images/contact/desktop/bg-pattern-hero-desktop.svg';

import { ReactComponent as LeafPattern } from '../images/shared/desktop/bg-pattern-leaf.svg';

const ContactScreen = () => {
	const [form, setForm] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
	});
	const [error, setError] = useState(false);

	const submitHandler = (e) => {
		e.preventDefault();
		if (
			form.name === '' ||
			form.email === '' ||
			form.phone === '' ||
			form.message === ''
		) {
			setError(true);
		} else {
			console.log(form);
			setForm({
				name: '',
				email: '',
				phone: '',
				message: '',
			});
			setError(false)
		}
	};

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	return (
		<ContactContainer>
			<PageTitle
				height='480px'
				title='Contact Us'
				text='Ready to take it to the next level? Let’s talk about your	project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.'
				button>
				<ContactForm onSubmit={submitHandler}>
					<div className='InputContainer'>
						{error && form.name === '' && <InputError />}
						<input
							type='text'
							name='name'
							value={form.name}
							placeholder='Name'
							onChange={handleChange}
						/>
					</div>
					<div className='InputContainer'>
						{error && form.email === '' && <InputError />}
						<input
							type='text'
							name='email'
							value={form.email}
							placeholder='Email Address'
							onChange={handleChange}
						/>
					</div>
					<div className='InputContainer'>
						{error && form.phone === '' && <InputError />}
						<input
							type='text'
							name='phone'
							value={form.phone}
							placeholder='Phone'
							onChange={handleChange}
						/>
					</div>
					<div className='TextAreaContainer'>
						{error && form.message === '' && <InputError />}
						<textarea
							name='message'
							value={form.message}
							placeholder='Your Message'
							onChange={handleChange}
						/>
					</div>
					<Button>Submit</Button>
				</ContactForm>
				<img className='ContactCircle' src={Circle} alt='Background Circle' />
			</PageTitle>
			<div className='LocationsContainer'>
				<Location title='Canada' />
				<Location title='Australia' />
				<Location title='United Kingdom' />
			</div>
			<LeafPattern className='LeafPatternBottom' />
		</ContactContainer>
	);
};

export default ContactScreen;

const ContactContainer = styled(Container)`
	min-height: 85vh;
	min-width: 100vw;
	flex-direction: column;
	h1 {
		margin-bottom: 32px;
	}
	.LocationsContainer {
		height: 364px;
		min-width: 1110px;
		margin-top: 160px;
		display: flex;
		justify-content: space-evenly;
	}
	.LeafPatternBottom {
		position: absolute;
		bottom: -350px;
		right: 0;
		z-index: -1;
		transform-origin: 50% 75%;
		transform: rotate(180deg);
	}
	.ContactCircle {
		position: absolute;
		top: -162px;
		left: 0px;
		z-index: -1;
	}
`;

const ContactForm = styled.form`
	height: 371px;
	width: 380px;
	margin-right: 96px;
	display: flex;
	flex-direction: column;
	.InputContainer {
		height: 38px;
		width: 380px;
		margin-bottom: 23px;
		position: relative;
		input {
			height: 38px;
			width: 380px;
			padding-left: 16px;
			color: ${colors.white};
			background-color: transparent;
			border-bottom: 1px solid ${colors.white};
			&::placeholder {
				color: hsla(0, 0%, 100%, 0.5);
			}
		}
		input:focus {
			border-bottom: 3px solid ${colors.white};
		}
		input:focus::placeholder {
			color: ${colors.white};
		}
	}
	.TextAreaContainer {
		height: 102px;
		width: 380px;
		margin-bottom: 24px;
		position: relative;
		textarea {
			height: 100%;
			width: 100%;
			resize: none;
			background-color: transparent;
			padding-left: 16px;
			color: ${colors.white};
			border-bottom: 1px solid ${colors.white};
			&::placeholder {
				color: hsla(0, 0%, 100%, 0.5);
			}
		}
		textarea:focus {
			border-bottom: 3px solid ${colors.white};
		}
		textarea:focus::placeholder {
			color: ${colors.white};
		}
	}
	button {
		align-self: flex-end;
	}
`;
