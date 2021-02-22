import React from 'react';
import styled from 'styled-components';
import { Container, H3, Body } from '../Styles';

import Circle from '../images/home/desktop/bg-pattern-hero-home.svg';
import { ReactComponent as Passionate } from '../images/home/desktop/illustration-passionate.svg';
import { ReactComponent as Resourceful } from '../images/home/desktop/illustration-resourceful.svg';
import { ReactComponent as Friendly } from '../images/home/desktop/illustration-friendly.svg';

const Quality = ({ title, text }) => {
	return (
		<QualityContainer active={title}>
			{title === 'Passionate' && <Passionate />}
			{title === 'Resourceful' && <Resourceful />}
			{title === 'Friendly' && <Friendly />}
			<H3>{title}</H3>
			<Body>{text}</Body>
		</QualityContainer>
	);
};

export default Quality;

const QualityContainer = styled(Container)`
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
		z-index: 2;
		background: url(${Circle}) no-repeat;
		${({ active }) =>
			active === 'Passionate'
				? {
						backgroundSize: '60% 50%',
						transformOrigin: '40% 15%',
						transform: 'rotate(270deg) translateX(-10px)',
				  }
				: active === 'Resourceful'
				? {
						backgroundSize: '60% 50%',
						transformOrigin: '40% 25%',
						transform: 'rotate(180deg)',
				  }
				: {
						backgroundSize: '60% 50%',
						transformOrigin: '50% 50%',
						transform: 'translateX(70px)',
				  }}
	}
	svg {
		z-index: 3;
	}
`;
