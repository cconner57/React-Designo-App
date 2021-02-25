import React from 'react';
import LocationItem from '../components/LocationItem';
import styled from 'styled-components';
import { Container, colors } from '../Styles';

import CanadaMap from '../images/locations/desktop/image-map-canada.png';
import AustraliaMap from '../images/locations/desktop/image-map-australia.png';
import UKMap from '../images/locations/desktop/image-map-united-kingdom.png';

const LocationsScreen = () => {
	return (
		<LocationContainer>
			<LocationItem
				name='Canada'
				abr='Central'
				address1='3886 Wellington Street'
				address2='Toronto, Ontario M9C 3J5'
				phone='+1 253-863-8967'
				email='contact@designo.co'
				image={CanadaMap}
			/>
			<LocationItem
				name='Australia'
				abr='AU'
				address1='19 Balonne Street'
				address2='New South Wales 2443'
				phone='(02) 6720
			9092'
				email='contact@designo.au'
				image={AustraliaMap}
			/>
			<LocationItem
				name='United Kingdom'
				abr='UK'
				address1='13 Colorado
			Way'
				address2='Rhyd-y-fro SA8 9GA'
				phone='078 3115 1400'
				email='contact@designo.uk'
				image={UKMap}
			/>
		</LocationContainer>
	);
};

export default LocationsScreen;

const LocationContainer = styled(Container)`
	min-height: 85vh;
	min-width: 100vw;
	flex-direction: column;
	margin-bottom: 400px;
`;
