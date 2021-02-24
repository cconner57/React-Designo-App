import React from 'react';
import PageTitle from '../components/PageTitle';
import DesignLinks from '../components/DesignLinks';
import Quality from '../components/Quality';
import styled from 'styled-components';
import { Container } from '../Styles';

import { ReactComponent as LeafPattern } from '../images/shared/desktop/bg-pattern-leaf.svg';

import Frame from '../images/home/desktop/image-hero-phone.png';
import BGFrame from '../images/home/desktop/bg-pattern-hero-home.svg';

const HomeScreen = () => {
	return (
		<HomeContainer>
			<PageTitle
				height='640px'
				title='Award-winning custom designs and digital branding solutions'
				text='With over 10 years in the industry, we are experienced in creating fully response websites, app design, and engaging brand experiences. Find out more about our services.'
				button='about'>
				<img className='Phone' src={Frame} alt={Frame} />
				<img className='BGCircle' src={BGFrame} alt='Background Circle' />
			</PageTitle>
			<LeafPattern className='LeafPatternTop' />
			<div className='DesignContainer'>
				<DesignLinks
					title='Web Design'
					height='640px'
					image='image-web-design-large.jpg'
					link='webdesign'
				/>
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
			<div className='QualitiesContainer'>
				<Quality
					title='Passionate'
					text='Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.'
				/>
				<Quality
					title='Resourceful'
					text="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients' needs"
				/>
				<Quality
					title='Friendly'
					text='We are a group of enthusiastic fols who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide'
				/>
			</div>
			<LeafPattern className='LeafPatternBottom' />
		</HomeContainer>
	);
};

export default HomeScreen;

const HomeContainer = styled(Container)`
	min-height: 100vh;
	min-width: 100vw;
	flex-direction: column;
	position: relative;
	.LeafPatternTop {
		position: absolute;
		top: 20rem;
		left: 0;
		z-index: 0;
	}
	.DesignContainer {
		min-height: 640px;
		min-width: 1111px;
		margin: 160px 0;
		z-index: 2;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 1fr);
		gap: 24px 30px;
		grid-template-areas:
			'web app'
			'web graphic';
		a:first-child {
			grid-area: web;
		}
		a:nth-child(2) {
			grid-area: app;
		}
		a:last-child {
			grid-area: graphic;
		}
	}
	.QualitiesContainer {
		height: 412px;
		min-width: 1110px;
		display: flex;
		justify-content: space-evenly;
	}
	.LeafPatternBottom {
		position: absolute;
		bottom: 0;
		right: 0;
		z-index: -1;
		transform-origin: 50% 75%;
		transform: rotate(180deg);
	}
`;
