
import { useMemo } from "react";
import { ApolloClient, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { relayStylePagination } from "@apollo/client/utilities";
import { setContext } from "@apollo/client/link/context";

import { ssrMode } from './ssr';

let apolloClient: ApolloClient<NormalizedCacheObject>;

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const session = JSON.parse(localStorage.getItem("session") || "null");

    //console.log('session', session);

    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: session ? `Bearer ${session.token}` : "",
        },
    };
});


function createApolloClient() {
    return new ApolloClient({
        //ssrMode: typeof window === "undefined", // set to true for SSR
        ssrMode,
        link: authLink.concat(createUploadLink({
            uri: process.env.GRAPHQL,
            // credentials: 'same-origin',
            //credentials: "include"            
        })),
        cache: new InMemoryCache({
            // fetchPolicy: "cache-and-network", 
            // nextFetchPolicy: "cache-first",
            typePolicies: {
                Query: {
                    fields: {
                        feed: relayStylePagination(["act"]),
                        comments: relayStylePagination(["to"])
                    }
                }
            }
        }),

    });
}

export function createClient(initialState = null) {
    const _apolloClient = apolloClient ?? createApolloClient();

    // If your page has Next.js data fetching methods that use Apollo Client,
    // the initial state gets hydrated here
    if (initialState) {
        // Get existing cache, loaded during client side data fetching
        // const existingCache = _apolloClient.extract();

        // Restore the cache using the data passed from
        // getStaticProps/getServerSideProps combined with the existing cached data
        // _apolloClient.cache.restore({ ...existingCache, ...initialState });
        _apolloClient.cache.restore(initialState);
    }

    // For SSG and SSR always create a new Apollo Client
    if (typeof window === "undefined") return _apolloClient;

    // Create the Apollo Client once in the client
    if (!apolloClient) apolloClient = _apolloClient;
    return _apolloClient;
}

export function useApollo(initialState = null) {
    const store = useMemo(() => createClient(initialState), [initialState]);
    return store;
}
