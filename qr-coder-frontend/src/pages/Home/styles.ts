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
  }
`

export const QrCodeDesktop = styled.div`
  display: flex;

  @media (max-width: 1250px) {
    display: none;
  }
`;
