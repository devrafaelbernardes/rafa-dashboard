import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

import ContentApp from 'ContentApp';
import Theme from 'styles/themes/Theme';
import { client } from 'services/api/config';

function App() {
	return (
		<ApolloProvider client={client}>
			<CookiesProvider>
				<ThemeProvider theme={Theme}>
					<BrowserRouter>
						<ContentApp />
					</BrowserRouter>
				</ThemeProvider>
			</CookiesProvider>
		</ApolloProvider>
	);
}

export default App;