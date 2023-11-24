import { Card, Title, Flex, Text } from '@mantine/core';
import * as React from 'react';

interface Episode {
	id: number;
	name: string;
	air_date: string;
}
const Episodes: React.FC = () => {
	const [episodes, setEpisodes] = React.useState<Episode[]>([]);

	return (
		<Flex wrap="wrap">
			{episodes.map((ep) => (
				<Card key={ep.id}>
					<Title>{ep.name}</Title>
					<Text>{ep.air_date}</Text>
				</Card>
			))}
		</Flex>
	);
};

export default Episodes;
