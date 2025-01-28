
import { Transaction } from "./TransactionDetail.types";
import {
    Amount,
    TransactionIconBack,
    Card,
    Container,
    DateText,
    InfoBox,
    InfoText,
    Name,
    Total
} from "./TransactionDetail.styles";
import {FC} from "react";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import Grid2 from "@mui/material/Grid2";
import {Divider} from "@mui/material";

export const TransactionDetail: FC<{
    transaction: Transaction;
    onBack: () => void;
}> = ({ transaction, onBack }) => {
    return (
        <Container>
            <Card>
                <TransactionIconBack  onClick={onBack} icon={faChevronLeft}/>
                <Amount>${transaction.amount.toFixed(2)}</Amount>
                <Name>{transaction.name}</Name>
                <DateText>{new Date(transaction.date).toLocaleString()}</DateText>
                <InfoBox>
                    <InfoText>Status: Approved</InfoText>
                    <p>{transaction.description}</p>
                    <Divider />
                    <Total><Grid2 display={'flex'} justifyContent={'space-between'}>
                        <Grid2>Total</Grid2>
                        <Grid2>${transaction.amount.toFixed(2)}</Grid2>
                    </Grid2></Total>
                </InfoBox>
            </Card>
        </Container>
    )
}

