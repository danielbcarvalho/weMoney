import React from "react";
import logoImg from "../../assets/LogoWeMoney2.svg";
import { Container, Content } from "./styles";
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
