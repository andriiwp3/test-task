import { ApolloProvider } from '@apollo/client';
import client from '@/utils/apolloClient';
import { AppProps } from 'next/app';
import RootLayout from '@/app/layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
	<RootLayout>
    	<ApolloProvider client={client}>
      		<Component {...pageProps} />
    	</ApolloProvider>
	</RootLayout>
  );
}
