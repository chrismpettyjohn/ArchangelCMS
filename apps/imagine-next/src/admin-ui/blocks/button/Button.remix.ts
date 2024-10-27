import {Button} from './Button';
import styled from '@emotion/styled';

export const ButtonPrimary = styled(Button)`
  color: ${({theme}) => theme.color.s30};
  border-color: ${({theme}) => theme.color.s30};
`;

export const ButtonDanger = styled(Button)`
  border-color: #7c0f0f;
  color: #7c0f0f;
  &:hover {
    border-color: #b90909;
    color: #b90909;
  }
`;

export const ButtonSuccess = styled(Button)`
  border-color: green;
  color: green;
  &:hover {
    border-color: green;
    color: green;
  }
`;

export const ButtonNoBorder = styled(Button)`
  border-color: transparent;
`;
