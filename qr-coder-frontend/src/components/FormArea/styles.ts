import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    -45deg,
    black 0%,
    rgba(0, 0, 0, 0.5) 15%,
    black 50%,
    rgba(0, 0, 0, 0.5) 85%,
    black 100%
  );
  color: black;
  width: 100%;
  height: 100%;

  input:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  @media (max-width: 1250px) {
    padding: 16px;
    background: transparent;
  }
`;

export const FormWrapper = styled.div`
  background-color: white;
  padding: 48px;
  border: 4px solid #d1d6d9;
  border-radius: 0 16px 0 16px;

  @media (max-width: 1250px) {
    padding: 24px;
    width: 100%;
    border-radius: 0;
    border: none;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  border-bottom: 2px solid #D1D6D9;

  @media (max-width: 1250px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    background-color: white;
    padding: 16px;
    justify-content: center;
  }
`;

export const LogoDivider = styled.div`
  width: 1px;
  height: 82px;
  background-color: #D1D6D9;
  border-radius: 8px;
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
`;

export const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 16px;

  @media (max-width: 1250px) {
    flex-direction: column;
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

  @media (max-width: 1250px) {
    width: 100%;
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
