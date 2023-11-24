import { Card, Title, Container } from '@mantine/core';
import React from 'react';
import bird from '../assets/bird2.jpg';

const Episodes: React.FC = () => {
	return (
		<div>
			<Card>
				<Title>NiceBird</Title>
				<Container>
					<img src={bird} height="300px" width="200px" />
				</Container>
			</Card>
		</div>
	);
};

export default Episodes;
