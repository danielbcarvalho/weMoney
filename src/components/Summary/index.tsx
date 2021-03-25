import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useContext } from "react";
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
  const { transactions } = useTransactions();

  // const incomes = transactions.reduce((total, transaction) => {
  //   if (transaction.type === "deposit") {
  //     return total + transaction.amount;
  //   }
  //   return total;
  // }, 0);

  const summary = transactions.reduce(
    (accumulator, transaction) => {
      if (transaction.type === "deposit") {
        accumulator.deposit += transaction.amount;
        accumulator.total += transaction.amount;
      } else {
        accumulator.withdraw += transaction.amount;
        accumulator.total -= transaction.amount;
      }
      return accumulator;
    },
    {
      deposit: 0,
      withdraw: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Incomes</p>
          <img src={incomeImg} alt="Incomes" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "USD",
          }).format(summary.deposit)}
        </strong>
      </div>
      <div>
        <header>
          <p>Outcomes</p>
          <img src={outcomeImg} alt="Incomes" />
        </header>
        <strong>
          -{" "}
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "USD",
          }).format(summary.withdraw)}
        </strong>
      </div>
      <div className="highlightComponent">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "USD",
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}
