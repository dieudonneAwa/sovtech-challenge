import { useQuery } from "@apollo/client";
import { Person } from "model";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { GET_PERSON } from "../graphql/queries";
import { LoaderWrapper, Wrapper } from "./styled";

const PersonPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { data, loading, error } = useQuery<{
    getPersonByName: Person | undefined;
  }>(GET_PERSON, {
    variables: { name: params.name },
  });
  const person = data?.getPersonByName;

  return (
    <Wrapper>
      <Container>
        {loading && <LoaderWrapper>Loading...</LoaderWrapper>}
        {!loading && (
          <>
            <BackButton onClick={() => navigate(-1)}>← Back</BackButton>
            <span>
              <h1>{person?.name}</h1>
            </span>
            <br />
            <span>
              Height: <strong>{person?.height}</strong>
            </span>
            <br />
            <span>
              Mass: <strong>{person?.mass}</strong>
            </span>
            <br />
            <span>
              Gender: <strong>{person?.gender}</strong>
            </span>
            <br />
            <span>
              Home world:{" "}
              <a href={person?.homeworld} target="blank">
                {person?.homeworld}
              </a>
            </span>
          </>
        )}
      </Container>
    </Wrapper>
  );
};

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 500px;
`;

const BackButton = styled.span`
  cursor: pointer;
  font-weight: bold;
  align-self: flex-start;
`;

export default PersonPage;
