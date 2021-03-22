import React from "react";
import Modal from "react-modal";
import logoImg from "../../assets/LogoWeMoney2.svg";
import { Container, Content } from "./styles";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="WeMoney" />
        <button type="button">New Transaction</button>
      </Content>
    </Container>
  );
}
