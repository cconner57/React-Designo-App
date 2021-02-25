import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container, H3, Button, colors } from '../Styles';

import Circle from '../images/home/desktop/bg-pattern-hero-home.svg';
import { ReactComponent as Canada } from '../images/shared/desktop/illustration-canada.svg';
import { ReactComponent as Australia } from '../images/shared/desktop/illustration-australia.svg';
import { ReactComponent as UnitedKingdom } from '../images/shared/desktop/illustration-united-kingdom.svg';

const Location = ({ title }) => {
	return (
		<LocationContainer active={title}>
			{title === 'Canada' && <Canada />}
			{title === 'Australia' && <Australia />}
			{title === 'United Kingdom' && <UnitedKingdom />}
			<H3>{title}</H3>
			<Link to='/locations'>
				<Button textColor={colors.white} backgroundColor={colors.peach}>
					See Location
				</Button>
			</Link>
		</LocationContainer>
	);
};

export default Location;

const LocationContainer = styled(Container)`
	max-height: 412px;
	max-width: 350px;
	position: relative;
	flex-direction: column;
	justify-content: space-between;
	text-align: center;
	&::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0px;
		z-index: -1;
		background: url(${Circle}) no-repeat;
		${({ active }) =>
			active === 'Canada'
				? {
						backgroundSize: '100% 55%',
						transformOrigin: '25% 15%',
						transform: 'translateY(10px)',
				  }
				: active === 'Australia'
				? {
						backgroundSize: '100% 55%',
						transformOrigin: '52% 29%',
						transform: 'rotate(270deg)',
				  }
				: {
						backgroundSize: '95% 55%',
						transformOrigin: '48.5% 30%',
						transform: 'rotate(180deg) translateY(10px)',
				  }}
	}
	svg {
		z-index: 3;
	}
`;
