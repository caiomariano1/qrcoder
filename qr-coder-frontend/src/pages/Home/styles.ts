import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: white;

   @media (max-width: 1250px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`

export const QrCodeDesktop = styled.div`
  display: flex;
   width: 50%;

  @media (max-width: 1250px) {
    display: none;
  }
`;

export const FormWrapperDesktop = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1250px) {
    width: 100%;
  }
`;
