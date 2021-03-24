import React, { FormEvent, useState } from "react";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { ButtonType, Container, TransactionTypeContainer } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState("deposit");
  const green = "#33cc954d";
  const red = "#e52e4d4d";

  function handleCreateNewTransaction(event: FormEvent) {}

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Close modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Register New Transaction</h2>
        <input placeholder="Title" />

        <input type="number" placeholder="Value" />

        <TransactionTypeContainer>
          <ButtonType
            type="button"
            onClick={() => {
              setType("deposit");
            }}
            isActive={type === "deposit"}
            color={green}
          >
            <img src={incomeImg} alt="Income" />
            <span>Income</span>
          </ButtonType>
          <ButtonType
            type="button"
            onClick={() => {
              setType("withdraw");
            }}
            isActive={type === "withdraw"}
            color={red}
          >
            <img src={outcomeImg} alt="Outcome" />
            <span>Outcome</span>
          </ButtonType>
        </TransactionTypeContainer>

        <input placeholder="Category" />

        <button type="submit">Register</button>
      </Container>
    </Modal>
  );
}
