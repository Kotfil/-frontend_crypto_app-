import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  padding: 1rem;
  background-color: #f3f4f6;
  min-height: 100vh;
`;



export const Card = styled.div`
  background-color: #ffffff;
  padding: 20px 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Amount = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const Name = styled.p`
  font-size: 1.125rem;
  color: #4b5563;
`;

export const DateText = styled.p`
  font-size: 0.875rem;
  color: #9ca3af;
  margin-bottom: 1rem;
`;

export const InfoBox = styled.div`
  background-color: #f3f4f6;
  padding: 0.4rem 1rem;
  border-radius: 0.75rem;
  margin-bottom: 1rem;
`;

export const InfoText = styled.p`
  font-weight: 500;
`;

export const Total = styled.p`
  font-size: 1.125rem;
  font-weight: bold;
`;

export const TransactionIconBack = styled(FontAwesomeIcon)`
    font-size: 24px;
    color: silver;
    display: flex;
    cursor: pointer;
    justify-self: start; 
`;
