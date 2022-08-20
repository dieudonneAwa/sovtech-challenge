import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  header {
    text-align: center;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  margin-top: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const PeopleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 500px;
  width: 100%;

  .people-container {
    margin-top: 1rem;
    height: 90vh;
    position: relative;
    overflow-y: auto;
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    .infinite-scroll-component,
    .infinite-scroll-component__outerdiv {
      width: 100%;

      .loading-more {
        padding: 2rem 1rem;
      }
    }
  }
`;

export const PersonCard = styled.div`
  border-bottom: 1px solid ${(p) => p.theme.colors.card};
  width: 100%;
  padding: 0.6rem 1rem;
  margin-bottom: 0.6rem;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
  font-size: ${(p) => p.theme.font.size.sm};
  color: ${(p) => p.theme.colors.gray};

  &:hover {
    background-color: ${(p) => p.theme.colors.card};
    border-radius: 10px;
    border-color: transparent;
  }

  .person-name {
    font-size: ${(p) => p.theme.font.size.lg};
    font-weight: bold;
    color: ${(p) => p.theme.colors.white};
  }
`;

export const LoaderWrapper = styled.div`
  margin: auto;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
