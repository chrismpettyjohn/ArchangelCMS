import styled from '@emotion/styled';

export const GameClientActionsElement = styled.div`
  display: fixed;
  background: transparent;
  gap: ${({ theme }) => theme.space.oneUnit};
  pointer-events: auto;
  height: fit-content;
  width: 100%;
  top: 20px;
  left: 20px;

  button {
    cursor: pointer;
  }

  .action {
    background: ${({ theme }) => theme.color.s20};
    border: ${({ theme }) => `2px solid ${theme.color.s40}`};
    border-radius: 5px;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 4px;

    &:hover {
      border-color: ${({ theme }) => theme.color.s60};
    }
  }
`;
