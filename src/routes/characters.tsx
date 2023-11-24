import { Card, Title, Container, Flex, Skeleton } from '@mantine/core';
import * as React from 'react';
import { useQuery } from '../hooks/use-query.hook';

export interface Character {
	id: number;
	name: string;
	image: string;
}

const Characters: React.FC = () => {
	const { data: characters, loadig } = useQuery();

	if (loadig) {
		return (
			<Card>
				<Skeleton height="50px" />
				<Skeleton height="200px" />
			</Card>
		);
	}
	return (
		<Flex wrap="wrap">
			{characters?.map((char) => (
				<Card key={char?.id}>
					<Title>{char?.name}</Title>
					<Container>
						<img src={char?.image} height="300px" width="200px" />
					</Container>
				</Card>
			))}
		</Flex>
	);
};

export default Characters;
