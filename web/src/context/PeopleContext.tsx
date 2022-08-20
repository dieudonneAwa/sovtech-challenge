import React, { createContext, useContext, useMemo, useState } from "react";
import { GetPeopleResponse, Person } from "model";
import { GET_PEOPLE } from "../graphql/queries";
import { ApolloError, useQuery } from "@apollo/client";

type PeopleContextState = {
  hasMore: boolean;
  people: Person[];
  isLoading: boolean;
  getPeopleError: ApolloError | undefined;
  fetchMorePeople: () => void;
};

export const PeopleContext = createContext<PeopleContextState>({
  people: [],
  isLoading: false,
  getPeopleError: undefined,
  fetchMorePeople: () => {},
  hasMore: false,
});

const PeopleProvider = (props: { children: React.ReactNode }) => {
  const { children } = props;
  const [hasMore, setHasMore] = useState(false);

  const { loading, data, error, fetchMore } = useQuery<{
    getPeople: GetPeopleResponse;
  }>(GET_PEOPLE, {
    variables: { page: 1 },
  });

  const currentPage = useMemo(() => {
    setHasMore(!!data?.getPeople.next);
    return (+data?.getPeople.next?.split("=")[1] || 0) - 1;
  }, [data]);

  const fetchMorePeople = async () => {
    if (!data.getPeople.next) return;
    const res = await fetchMore({
      variables: { page: currentPage + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return {
          getPeople: {
            ...fetchMoreResult.getPeople,
            results: [
              ...prev.getPeople.results,
              ...fetchMoreResult.getPeople.results,
            ],
          },
        };
      },
    });

    if (!res.data) return;
    setHasMore(!!res.data.getPeople.next);
  };

  return (
    <PeopleContext.Provider
      value={{
        hasMore,
        fetchMorePeople,
        isLoading: loading,
        getPeopleError: error,
        people: data?.getPeople.results || [],
      }}
    >
      {children}
    </PeopleContext.Provider>
  );
};

export const usePeople = () => useContext(PeopleContext);

export default PeopleProvider;
