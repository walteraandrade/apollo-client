import { gql } from '@apollo/client';

export const characteresQuery = gql`
	query ($page: Int) {
		characters(page: $page) {
			results {
				id
				name
				gender
				image
			}
		}
	}
`;
