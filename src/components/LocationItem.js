import React from 'react';
import styled from 'styled-components';
import { Container, H2, Body, colors } from '../Styles';

const LocationItem = ({
	name,
	abr,
	address1,
	address2,
	phone,
	email,
	image,
}) => {
	return (
		<LocationContainer>
			{name === 'Australia' && (
				<img style={{ marginRight: '30px' }} src={image} alt='Map' />
			)}
			<div className='ContactContainer'>
				<H2>{name}</H2>
				<div className='Contact'>
					<div className='Address'>
						<Body style={{ fontWeight: '700' }}>{`Designo ${abr} Office`}</Body>
						<Body>{address1}</Body>
						<Body>{address2}</Body>
					</div>
					<div className='Contact'>
						<Body style={{ fontWeight: '700' }}>Contact</Body>
						<Body>{`P: ${phone}`}</Body>
						<Body>{`M: ${email}`}</Body>
					</div>
				</div>
			</div>
			{name !== 'Australia' && (
				<img style={{ marginLeft: '30px' }} src={image} alt='Map' />
			)}
		</LocationContainer>
	);
};

export default LocationItem;

const LocationContainer = styled(Container)`
	height: 326px;
	width: 1110px;
	margin-bottom: 32px;
	.ContactContainer {
		height: 326px;
		width: 730px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-radius: 15px;
		background-color: hsl(14, 76%, 97%);
		h2 {
            margin-left: 95px;
			align-self: flex-start;
			color: ${colors.peach};
		}
		.Contact {
            height: 150px;
            width: 540px;
			display: flex;
			.Address,
			.Contact {
				height: 78px;
				width: 255px;
                margin-top: 24px;
                display: flex;
                flex-direction: column;
                p {
                    margin: 0;
                }
			}
		}
	}
	img {
		height: 326px;
		width: 350px;
		border-radius: 15px;
	}
`;
