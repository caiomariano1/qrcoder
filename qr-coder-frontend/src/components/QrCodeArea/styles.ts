import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: black;
  width: 100%;
  height: 100%;

  div {
    margin: 48px;
    padding: 48px;
  }

  @media (max-width: 1250px) {
    background-color: #F6F8F8;

    div {
      margin: 16px;
      padding: 16px;
    }

    img {
      width: 222px !important; 
    }
  }
`;
