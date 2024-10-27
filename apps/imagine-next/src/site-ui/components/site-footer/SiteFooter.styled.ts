'use client';
import styled from '@emotion/styled';

export const SiteFooterElement = styled.footer`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  height: 100px;
  width: 100%;
  h2,
  h4 {
    color: ${({theme}) => theme.color.s10};
    cursor: pointer;
    &:hover {
      color: ${({theme}) => theme.color.s30};
    }
  }
  a {
    text-decoration: none;
  }
`;
