import { ApolloProvider } from '@apollo/client';
import client from '@/utils/apolloClient';
import { AppProps } from 'next/app';
import RootLayout from '@/app/layout';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
	<RootLayout>
		<SessionProvider session={pageProps.session}>
    	<ApolloProvider client={client}>
      		<Component {...pageProps} />
    	</ApolloProvider>
		</SessionProvider>
	</RootLayout>
  );
}
