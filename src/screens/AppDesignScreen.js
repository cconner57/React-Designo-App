import React from 'react';
import styled from 'styled-components';
import { Container } from '../Styles';
import PageTitle from '../components/PageTitle';
import DesignItem from '../components/DesignItem';
import DesignLinks from '../components/DesignLinks';

import Circle from '../images/shared/desktop/bg-pattern-small-circle.svg';
import Circles2 from '../images/shared/desktop/bg-pattern-two-circles.svg';

import { ReactComponent as LeafPattern } from '../images/shared/desktop/bg-pattern-leaf.svg';

const AppDesignScreen = () => {
	return (
		<AppDesignContainer>
			<PageTitle
				title='App design'
				text='Our mobile designs bring intuitive digital solutions to your
				customers right at their fingertips.'>
				<img src={Circles2} alt='Background Circles' />
				<img src={Circle} alt='Background Circles' />
				<img src={Circles2} alt='Background Circles' />
			</PageTitle>
			<LeafPattern className='LeafPatternTop' />
			<div className='DesignItemContainer'>
				<DesignItem
					image='image-airfilter.jpg'
					title='Airfilter'
					text='Solving the problem of poor indoor air quality by filtering the air'
				/>
				<DesignItem
					image='image-eyecam.jpg'
					title='Eyecam'
					text='Product that lets you edit your favorite photos and videos at any time'
				/>
				<DesignItem
					image='image-faceit.jpg'
					title='Faceit'
					text='Get to meet your favorite internet superstar with the faceit app'
				/>
				<DesignItem
					image='image-todo.jpg'
					title='Todo'
					text='A todo app that features cloud sync with light and dark mode'
				/>
				<DesignItem
					image='image-loopstudios.jpg'
					title='Loopstudios'
					text='A VR experience app made for Loopstudios'
				/>
			</div>
			<div className='DesignContainer'>
				<DesignLinks
					title='Web Design'
					image='image-web-design-small.jpg'
					link='webdesign'
				/>
				<DesignLinks
					title='Graphic Design'
					image='image-graphic-design.jpg'
					link='graphicdesign'
				/>
			</div>
		</AppDesignContainer>
	);
};

export default AppDesignScreen;

const AppDesignContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	.LeafPatternTop {
		position: absolute;
		top: 15rem;
		left: 0;
		z-index: -1;
	}
	.DesignItemContainer {
		height: 988px;
		width: 1110px;
		margin: 160px 0;
		display: grid;
		grid-template-columns: repeat(3, 350px);
		grid-gap: 32px 30px;
	}
	.DesignContainer {
		max-height: 308px;
		width: 1112px;
		display: flex;
		justify-content: space-between;
	}
`;
