import {CardData, Transaction} from "./TransactionsList.types";
import {
    Card,
    CardFirst,
    CardHeader,
    CardHeaderTitle,
    CardSecond,
    CardText,
    CardTextWrapper,
    CardThird,
    CardValue,
    Container,
    ContainerWrapper,
    GridContainer,
    IconWrapper,
    LeftColumn,
    LowerGrid,
    RightColumn,
    StyledIcon,
    TransactionAmount,
    TransactionAmountWrapper,
    TransactionDetails,
    TransactionIcon,
    TransactionIconBack,
    TransactionIconWrapper,
    TransactionInfo,
    TransactionItem,
    TransactionList,
    TransactionName,
    TransactionPercentWrapper,
    UpperGrid
} from "./TransactionsList.styles";
import {Grid2} from "@mui/material";
import {formatDate, formatNumber} from "../../helpers/helpers";
import {faAppleAlt, faCheck, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {library} from '@fortawesome/fontawesome-svg-core';
import {FC} from "react";

library.add(faAppleAlt);

export const TransactionsList: FC<{
    data: CardData;
    onSelectTransaction: (transaction: Transaction) => void;
}> = ({data, onSelectTransaction}) => {

    const {cardBalance, noPaymentDue, dailyPoints, transactions} = data;
    return (
        <Container>
            <GridContainer>
                <LeftColumn>
                    <CardFirst>
                        <Grid2 pl={2}>
                            <CardHeader>Card Balance</CardHeader>
                            <CardValue>${cardBalance.balance.toFixed(2)}</CardValue>
                            <CardText>
                                ${cardBalance.limit - cardBalance.balance} Available
                            </CardText>
                        </Grid2>
                    </CardFirst>
                    <CardSecond>
                        <Grid2 container pl={2} display={'flex'} alignItems={'center'} style={{height: '100vh'}}>
                            <Grid2>
                                <Grid2>
                                    <CardText color="black">
                                        Daily Points
                                    </CardText>
                                </Grid2>
                                <Grid2><CardText color="gray">
                                    {formatNumber(dailyPoints)}
                                </CardText>
                                </Grid2>
                            </Grid2>
                        </Grid2>
                    </CardSecond>
                </LeftColumn>
                <RightColumn>
                    {noPaymentDue && (
                        <CardThird>
                            <ContainerWrapper>
                                <UpperGrid>
                                    <CardTextWrapper color="black">No Payment Due</CardTextWrapper>
                                    <CardText color="gray">You`ve paid your</CardText>
                                    <CardText color="gray">September balance.</CardText>
                                </UpperGrid>
                                <LowerGrid>
                                    <IconWrapper>
                                        <StyledIcon icon={faCheck}/>
                                    </IconWrapper>
                                </LowerGrid>
                            </ContainerWrapper>
                        </CardThird>
                    )}
                </RightColumn>
            </GridContainer>
            <Grid2 pl={2} pb={1.2}><CardHeaderTitle>Latest Transactions</CardHeaderTitle></Grid2>
            <Grid2 px={2}>
                <Card>
                    <TransactionList>
                        {transactions.map((transaction: Transaction, index: number) => {
                            const isIkeaIcon = transaction.name === "IKEA";
                            const isTargetIcon = transaction.name === "Target";
                            const iconSrc = isIkeaIcon ? "/ikea.svg" : isTargetIcon ? "/target.svg" : null;

                            return (
                                <TransactionItem key={index} onClick={() => onSelectTransaction(transaction)}>
                                    <TransactionIconWrapper transaction={transaction}>
                                        {iconSrc ? (
                                            <img
                                                src={iconSrc}
                                                alt={transaction.name}
                                                style={{ width: "64px", height: "64px", borderRadius: "12px" }}
                                            />
                                        ) : transaction.iconType ? (
                                            <TransactionIcon icon={["fas", transaction.iconType]} />
                                        ) : (
                                            <img
                                                src="/default.svg"
                                                alt="Default Icon"
                                                style={{ width: "64px", height: "64px", borderRadius: "12px" }}
                                            />
                                        )}
                                    </TransactionIconWrapper>
                                    <TransactionInfo>
                                        <TransactionName>{transaction.name}</TransactionName>
                                        <TransactionDetails>{transaction.description}</TransactionDetails>
                                        <TransactionDetails>
                                            {transaction.userName && <span>{transaction.userName} - </span>}
                                            <span>{formatDate(transaction.date)}</span>
                                        </TransactionDetails>
                                    </TransactionInfo>
                                    <TransactionAmountWrapper>
                                        <TransactionAmount>
                                            {transaction.type === "debit" ? "+" : ""}${transaction.amount.toFixed(2)}
                                        </TransactionAmount>
                                        {transaction.percent && (
                                            <TransactionPercentWrapper>{transaction.percent}</TransactionPercentWrapper>
                                        )}
                                    </TransactionAmountWrapper>
                                    <TransactionIconBack icon={faChevronRight}/>
                                </TransactionItem>
                            );
                        })}
                    </TransactionList>
                </Card>
            </Grid2>
        </Container>
    );
};
