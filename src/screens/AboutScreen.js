import React from 'react';
import PageTitle from '../components/PageTitle';
import AboutDetails from '../components/AboutDetails';
import Location from '../components/Location';
import styled from 'styled-components';
import { Container } from '../Styles';

import { ReactComponent as LeafPattern } from '../images/shared/desktop/bg-pattern-leaf.svg';

const AboutScreen = () => {
	return (
		<AboutContainer>
			<LeafPattern className='LeafPatternTop' />
			<PageTitle
				height='480px'
				button
				title='About us'
				text="Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients' audiences.">
				<img
					src={process.env.PUBLIC_URL + `/images/image-about-hero.jpg`}
					alt='Studying'
				/>
			</PageTitle>
			<AboutDetails
				title='World-class talent'
				content='We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms. Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.'
				image='image-world-class-talent.jpg'
			/>
			<div className='LocationsContainer'>
				<Location title='Canada' />
				<Location title='Australia' />
				<Location title='United Kingdom' />
			</div>
			<AboutDetails
				title='The real deal'
				content='As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success. We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.'
				image='image-real-deal.jpg'
			/>
			<LeafPattern className='LeafPatternBottom' />
		</AboutContainer>
	);
};

export default AboutScreen;

const AboutContainer = styled(Container)`
	min-height: 85vh;
	min-width: 100vw;
	flex-direction: column;
	margin-bottom: 400px;
	.LeafPatternTop {
		position: absolute;
		top: 20rem;
		left: 0;
		z-index: -1;
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
		bottom: 100px;
		right: 0;
		z-index: -1;
		transform-origin: 50% 75%;
		transform: rotate(180deg);
	}
`;
