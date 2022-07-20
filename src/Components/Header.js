import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <Head>
      <h1 className="title">Cryptocurrencies</h1>
    </Head>
  );
}

const Head = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
  border-width: 100vw;
  align-items: center;
  justify-content: center;
  border: aliceblue solid;
`;
