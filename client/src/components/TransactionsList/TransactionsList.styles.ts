import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import {TransactionIcons} from "./TransactionsList.types";

export const Container = styled.div`
    padding: 1rem;
    background-color: #f3f4f6;
    min-height: 100vh;
`;

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr; 
    gap: 20px;
    padding: 1rem;
    margin: 0 auto; 
`;

export const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const RightColumn = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
`;

export const CardFirst = styled.div<{ bgColor?: string }>`
    background-color: ${(props) => props.bgColor || "#ffffff"};
    width: 300px;
    height: 140px;
    padding: 1rem;
    border-radius: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const CardSecond = styled(CardFirst)``;

export const CardThird = styled(CardFirst)`
    height: 332px;
`;


export const ContainerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%; 
`;

export const UpperGrid = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-self: flex-start; 
`;

export const LowerGrid = styled.div`
    align-self: flex-end; 
    margin-top: auto; 
`;


export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 75px; 
    height: 75px; 
    background-color: #dfdfdf; 
    border: 2px solid #d5d5d5; 
    border-radius: 50%; 
`;
export const StyledIcon = styled(FontAwesomeIcon)`
    font-size: 42px; 
    color: #000000; 
`;


export const CardHeader = styled.h2`
    font-size: 2.125rem;
    font-weight: 300;
    text-align: left;
    margin: 0;
    padding: 0;
`;

export const CardHeaderTitle = styled.h2`
    font-size: 2.4rem;
    font-weight: 700;
    text-align: left;
    margin: 0;
    padding: 0;
`;

export const CardValue = styled.p`
    font-size: 2.8rem;
    font-weight: bold;
    text-align: left;
    margin: 0;
    padding-top: -16px;
`;

export const CardText = styled.p<{ color?: string }>`
    font-size: 1.4rem;
    color: ${(props) => props.color || "#6b7280"};
    text-align: left;
    margin: 0;
    padding: 0;
`;

export const CardTextWrapper = styled.p<{ color?: string }>`
    font-size: 1.8rem;
    color: ${(props) => props.color || "#6b7280"};
    text-align: left;
    margin: 0;
    padding: 0;
`;

export const TransactionIcon = styled(FontAwesomeIcon)`
    font-size: 32px;
    color: white;
`;


export const Card = styled.div`
    background-color: #ffffff;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const TransactionList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const TransactionItem = styled.li`
    display: grid;
    grid-template-columns: 1fr 4fr 2fr 0.5fr;
    align-items: center;
    width: 700px;
    height: 80px;
    border-radius: 12px;
    border: 1px solid #e5e7eb;
    padding: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #f9fafb;
    }
`;

export const TransactionIconWrapper = styled.div<{ transaction?: TransactionIcons }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    background: ${({transaction}) =>
            transaction?.name === "Payment" ? "linear-gradient(45deg, purple, orange, green)" : "gray"};
    border-radius: 12px;
`;

export const TransactionInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    align-self: flex-start;
    gap: 0.5rem;
`;

export const TransactionName = styled.p`
    font-weight: 500;
    font-size: 24px;
    margin: 0;
`;

export const TransactionDetails = styled.p`
    font-size: 0.875rem;
    color: #9ca3af;
    margin: 0;
`;

export const TransactionAmountWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start; 
    align-items: flex-end;      
    gap: 0.25rem;
`;

export const TransactionAmount = styled.p`
    font-weight: 600;
    font-size: 24px;
    margin: 0;
`;

export const TransactionPercentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: grey;
    color: white;
    border-radius: 4px;
    height: 24px;
    width: 32px;
`;

export const TransactionIconBack = styled(FontAwesomeIcon)`
    font-size: 24px;
    color: silver;
    justify-self: end; 
`;