'use client';
import styled from '@emotion/styled';

const PREVIEW_OFFSET = '25px';

export const GameClientElement = styled.div<{
  $visible: boolean;
  $preview: boolean;
}>`
  background: black;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  visibility: ${({ $visible }) =>
    $visible ? 'visible' : 'hidden'};

  iframe {
    border: none;
  }

  .content {
    width: 100%;
    height: 100%;
    position: fixed;
  }
    
  iframe {
    border: none;
  }
`;