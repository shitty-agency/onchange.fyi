import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  align-items: center;
  align-self: start;
  background-color: ${p => p.theme.color.primary};
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  justify-content: center;
  padding: ${p => p.theme.spacing.medium};
  width: 100%;
`;

const Nav = () => (
  <Wrapper>
    <h1>COMING SOON</h1>
  </Wrapper>
);

export default Nav;
