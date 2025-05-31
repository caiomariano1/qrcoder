import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    -45deg,
    black 0%,
    rgba(0, 0, 0, 0.65) 15%,
    black 50%,
    rgba(0, 0, 0, 0.65) 85%,
    black 100%
  );
  color: black;
  width: 100%;
  height: 100vh;

  input {
    border: 1px solid #d1d6d9;
    height: 30.4px;
    &:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }
    &:focus,
    &:active,
    &:focus-visible {
      outline: none;
      border: 1px solid #A9B2B7; 
    }
}

  h3 {
    font-weight: 700;
    font-size: 24px;
    margin: 48px 0 24px;
  }

  form {
    display: flex; 
    flex-direction: column;
    gap: 60px;
  }

  @media (max-width: 1250px) {
    background: transparent;
    align-items: flex-start;
    background-color: #F6F8F8;

    h3 {
      margin: 16px 0 16px;
    }

    form {
    gap: 16px;
  }
  }
`;

export const FormWrapper = styled.div`
  background-color: white;
  padding: 48px;
  border: 4px solid #d1d6d9;
  border-radius: 0 16px 0 16px;

  @media (max-width: 1250px) {
    margin-top: 16px;
    padding: 24px 0;
    margin-inline: 24px;
    width: 100%;
    border-radius: 0;
    border: none;
    background-color: #F6F8F8;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  border-bottom: 2px solid #D1D6D9;

  .logo {
    width: 127px;
    height: 110px;
    margin: 23px 0;
  }

  .logo-escrita {
    width: 288px;
    height: 82px;
    object-fit: contain;
  }

  @media (max-width: 1250px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    background-color: white;
    border-bottom: 1.9px solid #D1D6D9;
    justify-content: center;
    height: 60px;

    .logo {
      width: 51px;
      height: 44px;
      margin: 0;
    }

    .logo-escrita {
      width: 155px;
      height: 44px;
    }
  }
`;

export const LogoDivider = styled.div`
  width: 1px;
  height: 82px;
  background-color: #D1D6D9;
  border-radius: 8px;

   @media (max-width: 1250px) {
    height: 44px;
   }
`;

export const SuccessMessage = styled.span`
  display: flex;
  gap: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #81888C;
  margin-bottom: 16px;
  align-items: center;
`;

export const InstructionText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #81888C;
  margin-bottom: 16px;
`;

export const StyledInput = styled.input`
  padding: 8px;
  font-size: 16px;
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;

export const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 16px;

  @media (max-width: 1250px) {
    gap: 8px;
    align-items: stretch;
  }
`;

export const Button = styled.button`
  width: max-content;
  transition: opacity 0.3s ease;
  font-weight: 600;
  padding: 8px 16px;
  border: none;
  background-color: #000;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  &:focus,
  &:active,
  &:focus-visible {
    outline: none;
    border: 1px solid #d1d6d9; 
  }

  @media (max-width: 1250px) {
    width: auto;
  }
`;

export const QrCodeMobile = styled.div`
  display: none;

  @media (max-width: 1250px) {
    display: flex;
    justify-content: center;
    margin: 24px 0;
  }
`;
