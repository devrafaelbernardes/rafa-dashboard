import { ApolloClient, InMemoryCache } from 'apollo-boost';
import { createUploadLink } from 'apollo-upload-client';
import { setContext } from 'apollo-link-context';
import { split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

import { isDevelopment } from 'config/infos';
import { getToken } from 'storage';

const PORT = 4040;
const LINK_API_SERVER = isDevelopment ? `${window.location.hostname}:${PORT}/` : "api.rbernardes.com.br/";
export const BASE_API = `http${!isDevelopment ? 's' : ''}://${LINK_API_SERVER}`;
export const URL_BASE_API = `${BASE_API}`;


const wsLink = new WebSocketLink({
	uri: `ws${!isDevelopment ? 's' : ''}://${LINK_API_SERVER}`,
	options: {
		reconnect: true,
		connectionParams: {
			"authorization": getToken() ? `Bearer ${getToken()}` : "",
		}
	}
});

const httpLink = createUploadLink({
	uri: URL_BASE_API,
});

const authLink = setContext(async (request) => {
	const token = getToken();
	return {
		headers: {
			"authorization": token ? `Bearer ${token}` : "",
		}
	}
});

const link = split(
	// split based on operation type
	({ query }) => {
		const definition = getMainDefinition(query);
		return (definition.kind === 'OperationDefinition' && definition.operation === 'subscription');
	},
	wsLink,
	httpLink,
);

export const client = new ApolloClient({
	link: authLink.concat(link),
	cache: new InMemoryCache()
});

export const objectPagination = ({
	pageSize = null,
	pageNumber = 1,
	orderBy = [],
}) => {
	const page = pageSize && {
		size: pageSize,
		number: pageNumber,
	};
	return {
		pagination: {
			page,
		},
		orderBy,
	}
};