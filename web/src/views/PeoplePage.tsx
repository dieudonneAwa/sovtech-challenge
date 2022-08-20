import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { usePeople } from "../context";
import { useNavigate } from "react-router-dom";
import {
  Container,
  LoaderWrapper,
  PeopleWrapper,
  Wrapper,
  PersonCard,
} from "./styled";

const PeoplePage = () => {
  const { people, isLoading, fetchMorePeople, hasMore } = usePeople();

  const navigate = useNavigate();

  return (
    <Wrapper>
      <header>
        <h1>Star wars People</h1>
      </header>
      <Container>
        <PeopleWrapper>
          <div className="people-container">
            <InfiniteScroll
              dataLength={people?.length || 0}
              next={fetchMorePeople}
              hasMore={hasMore}
              loader={<span className="loading-more">Loading more...</span>}
              height="calc(100vh - 100px)"
              endMessage=""
            >
              {isLoading && <Loader />}
              {!isLoading &&
                people.map((person) => (
                  <PersonCard
                    key={person.name}
                    onClick={() => navigate(`/people/${person.name}`)}
                  >
                    <span className="person-name">{person.name}</span> <br />
                    <span>
                      Height: <strong>{person.height}</strong>
                    </span>{" "}
                    &bull;{" "}
                    <span>
                      Mass: <strong>{person.mass}</strong>
                    </span>{" "}
                    &bull;{" "}
                    <span>
                      Gender: <strong>{person.gender}</strong>
                    </span>
                  </PersonCard>
                ))}
            </InfiniteScroll>
          </div>
        </PeopleWrapper>
      </Container>
    </Wrapper>
  );
};

const Loader = () => {
  return <LoaderWrapper>Loading...</LoaderWrapper>;
};

export default PeoplePage;
