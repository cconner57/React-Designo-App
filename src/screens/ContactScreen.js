import React from 'react';
import PageTitle from '../components/PageTitle';
import styled from 'styled-components';
import { Container, Button } from '../Styles';

const ContactScreen = () => {
	return (
		<ContactContainer>
			<PageTitle
				height='480px'
				title='Contact Us'
				text='Ready to take it to the next level? Let’s talk about your	project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.'>
				<ContactForm>
					<Button>Submit</Button>
				</ContactForm>
			</PageTitle>
			Canada See location Australia See location United Kingdom See location
		</ContactContainer>
	);
};

export default ContactScreen;

const ContactContainer = styled(Container)`
	min-height: 85vh;
	min-width: 100vw;
	outline: 1px solid red;
	flex-direction: column;
`;

const ContactForm = styled.form``;
