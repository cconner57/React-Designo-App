import React from 'react';
import styled from 'styled-components';
import { Container } from '../Styles';
import PageTitle from '../components/PageTitle';
import DesignItem from '../components/DesignItem';
import DesignLinks from '../components/DesignLinks';

import Circle from '../images/shared/desktop/bg-pattern-small-circle.svg';
import Circles2 from '../images/shared/desktop/bg-pattern-two-circles.svg';

import { ReactComponent as LeafPattern } from '../images/shared/desktop/bg-pattern-leaf.svg';

const GraphicDesignScreen = () => {
	return (
		<GraphicDesignContainer>
			<PageTitle
				title='Graphic design'
				text='We deliver eye-catching branding materials that are tailored to meet your business objectives.'>
				<img className='Circle1' src={Circles2} alt='Background Circles' />
				<img className='Circle2' src={Circle} alt='Background Circles' />
				<img className='Circle3' src={Circles2} alt='Background Circles' />
			</PageTitle>
			<LeafPattern className='LeafPatternTop' />
			<div className='DesignItemContainer'>
				<DesignItem
					image='image-airfilter.jpg'
					title='Tim Brown'
					text='A book cover designed for Tim Brown’s new release, ‘Change’'
				/>
				<DesignItem
					image='image-eyecam.jpg'
					title='Boxed water'
					text='A simple packaging concept made for Boxed Water '
				/>
				<DesignItem
					image='image-faceit.jpg'
					title='Science!'
					text='A
					poster made in collaboration with the Federal Art Project'
				/>
			</div>
			<div className='DesignContainer'>
				<DesignLinks
					title='App Design'
					image='image-app-design.jpg'
					link='appdesign'
				/>
				<DesignLinks
					title='Web Design'
					image='image-web-design-small.jpg'
					link='webdesign'
				/>
			</div>
		</GraphicDesignContainer>
	);
};

export default GraphicDesignScreen;

const GraphicDesignContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	margin-bottom: 400px;
	.LeafPatternTop {
		position: absolute;
		top: 15rem;
		left: 0;
		z-index: -1;
	}
	.DesignItemContainer {
		height: 478px;
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
