import { Card, Title, Container } from '@mantine/core';
import React, { useState } from 'react';
import bird from '../assets/bird.jpg';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

interface Character {
	id: number;
	name: string;
	image: string;
}

const Characters: React.FC = () => {
	const [charactes, setCharacters] = useState<Character[]>([]);
	const client = new ApolloClient({
		uri: 'https://rickandmortyapi.com/graphql',
		cache: new InMemoryCache(),
	});

	client
		.query({
			query: gql`
				query ($id: ID!) {
					character(id: $id) {
						name
						gender
						image
						origin {
							type
						}
					}
				}
			`,
			variables: {
				id: 1,
			},
		})
		.then((result) => console.log([result.character]));
	return (
		<div>
			{charactes?.map((char) => (
				<Card key={char?.id}>
					<Title>{char?.name}</Title>
					<Container>
						<img src={char?.image} height="300px" width="200px" />
					</Container>
				</Card>
			))}
		</div>
	);
};

export default Characters;
