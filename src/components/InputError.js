import React from 'react';
import styled from 'styled-components';
import { colors } from '../Styles';

import IconError from '../images/contact/desktop/icon-error.svg';

const InputError = () => {
	return (
		<ErrorItem>
			<p>Can't be empty</p>
			<img src={IconError} alt='Error' />
		</ErrorItem>
	);
};

export default InputError;

const ErrorItem = styled.div`
	height: 26px;
	width: 110px;
	position: absolute;
	top: 6px;
	right: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 5;
	p {
		color: ${colors.white};
		font-size: 12px;
		font-weight: 400;
		font-style: italic;
		line-height: 26px;
	}
	img {
		height: 20px;
		width: 20px;
	}
`;
