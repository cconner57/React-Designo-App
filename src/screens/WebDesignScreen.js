import React from 'react';
import styled from 'styled-components';
import { Container } from '../Styles';
import PageTitle from '../components/PageTitle';
import DesignItem from '../components/DesignItem';
import DesignLinks from '../components/DesignLinks';

import Circle from '../images/shared/desktop/bg-pattern-small-circle.svg';
import Circles2 from '../images/shared/desktop/bg-pattern-two-circles.svg';

import { ReactComponent as LeafPattern } from '../images/shared/desktop/bg-pattern-leaf.svg';

const WebDesignScreen = () => {
	return (
		<WebDesignContainer>
			<PageTitle
				title='Web design'
				text='We build websites that serve as powerful marketing tools and bring
				memorable brand experiences.'>
				<img className='Circle1' src={Circles2} alt='Background Circles' />
				<img className='Circle2' src={Circle} alt='Background Circles' />
				<img className='Circle3' src={Circles2} alt='Background Circles' />
			</PageTitle>
			<LeafPattern className='LeafPatternTop' />
			<div className='DesignItemContainer'>
				<DesignItem
					image='image-express.jpg'
					title='Express'
					text='A multi-carrier shipping website for ecommerce businesses'
				/>
				<DesignItem
					image='image-transfer.jpg'
					title='Transfer'
					text='Site for low-cost money transfers and sending money within seconds '
				/>
				<DesignItem
					image='image-photon.jpg'
					title='Photon'
					text='A state-of-the-art music player with high-resolution audio and DSP effects'
				/>
				<DesignItem
					image='image-builder.jpg'
					title='Builder'
					text='Connects users with local contractors based on their location'
				/>
				<DesignItem
					image='image-blogr.jpg'
					title='Blogr'
					text='Blogr is a platform for creating an online blog or publication'
				/>
				<DesignItem
					image='image-camp.jpg'
					title='Camp'
					text='Get expert training in coding, data, design, and digital marketing.'
				/>
			</div>
			<div className='DesignContainer'>
				<DesignLinks
					title='App Design'
					image='image-app-design.jpg'
					link='appdesign'
				/>
				<DesignLinks
					title='Graphic Design'
					image='image-graphic-design.jpg'
					link='graphicdesign'
				/>
			</div>
		</WebDesignContainer>
	);
};

export default WebDesignScreen;

const WebDesignContainer = styled(Container)`
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
