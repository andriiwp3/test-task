import { ApolloProvider } from '@apollo/client';
import client from '@/utils/apolloClient';
import { AppProps } from 'next/app';
import RootLayout from '@/app/layout';

function App({ Component, pageProps }: AppProps) {
  return (
	<RootLayout>
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
	</RootLayout>
  );
}

export default App;
