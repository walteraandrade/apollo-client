import { ApolloClient, InMemoryCache } from '@apollo/client';
import React from 'react';
import { characteresQuery } from './characteres.query';
import { Character } from '../routes/characters';

const page = 1;
export const useQuery = () => {
	const [data, setData] = React.useState<Character[]>([]);
	const [error, setError] = React.useState<any>();
	const [loadig, setLoading] = React.useState(false);

	React.useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			const client = new ApolloClient({
				uri: 'https://rickandmortyapi.com/graphql',
				cache: new InMemoryCache(),
			});

			try {
				const result = await client.query({
					query: characteresQuery,
					variables: {
						page,
					},
				});

				setLoading(false);
				setData(result.data.characters.results);
			} catch (error) {
				console.error('Error fetching data:', error);
				setLoading(false);
				setError(error);
			}
		};
		fetchData();
	}, []);

	return { data, error, loadig };
};
