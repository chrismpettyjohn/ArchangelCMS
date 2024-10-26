import styled from '@emotion/styled';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #134a71;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  justify-content: center;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;
  margin-bottom: 10px;
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

export const UserStatus = styled.span`
  font-size: 1rem;
  color: #666;
`;

export const Footer = styled.footer`
  width: 100%;
  text-align: center;
  padding: 10px 0;
  background-color: #ddd;
  font-size: 0.9rem;
  margin-top: auto;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0;
  padding: 40px;
  width: 100%;
  max-width: 400px;
  margin-top: auto;
  border: 1px solid #ccc;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  width: 100%;
  font-size: 1.5rem;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
  text-align: left;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 1rem;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #005bb5;
  }
`;