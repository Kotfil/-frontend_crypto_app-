import  {FC, useState} from "react";
import {TransactionsList} from "./components/TransactionsList/TransactionsList";
import {TransactionDetail} from "./components/TransactionDetail/TransactionDetail";
import {Transaction} from "./components/TransactionsList/TransactionsList.types";
import data from "../mocks/data.json";
import "./App.css";

const App: FC = () => {
    const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
    return (
        <div>
            {selectedTransaction ? (
                <TransactionDetail
                    transaction={selectedTransaction}
                    onBack={() => setSelectedTransaction(null)}
                />
            ) : (
                <TransactionsList
                    data={data}
                    onSelectTransaction={(transaction) => setSelectedTransaction(transaction)}
                />
            )}
        </div>
    );
};

export default App;
