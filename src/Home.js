import { useState } from "react";
import styled from "styled-components"
import homeimage from "./image/home-phones.png"
import screenshot from "./image/screenshot1.png"
function Home() {
    return (
      <main>
        <article>
          <Artcle_container>
            <StyledDiv >
            </StyledDiv >
            <StyledDiv_2>
            </StyledDiv_2>
          </Artcle_container>
        </article>
      </main>
    );
  }

  const Artcle_container = styled.article`
  width: 100%;
  margin-top: 32px;
  justify-content: center;
  padding: 32px 0 0 32px;
  display: flex;
  align-items: stretch;
  `;
  const StyledDiv = styled.div`
  height: 581.15px;
  margin-bottom: 12px;
  background-size: 468.32px 634.15px;
  background-image: url(${homeimage});
  background-repeat: no-repeat;
  background-position: -46px 0;
  align-self: center;
  flex-basis: 380.32px;
  margin-right: 32px;
`;

const StyledDiv_2 = styled.img`
  width: 250px;
  height: 538.84px;
  background-image: url(${screenshot});
  position: absolute;
`;
  export default Home;
  
  color: rgb(var(--ig-primary-text));
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  margin-top: 12px;
  max-width: 350px;