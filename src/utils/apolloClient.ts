import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://www.toiletmap.org.uk/api',
    cache: new InMemoryCache(),
});

export default client;
