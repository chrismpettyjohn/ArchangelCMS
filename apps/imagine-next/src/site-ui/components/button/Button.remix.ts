'use client';
import {darken} from 'polished';
import styled from '@emotion/styled';
import {Button} from './Button';

export const ButtonBrand = styled(Button)`
  color: ${({theme}) => theme.color.brandText};
  background: ${({theme}) => theme.color.brand};
  border-color: ${({theme}) => darken(20, theme.color.brand)};
`;

export const ButtonDanger = styled(Button)`
  border-color: #7c0f0f;
  color: #7c0f0f;
  border-color: ${({theme}) => darken(20, '#7C0F0F')};
`;

export const ButtonSuccess = styled(Button)`
  background: ${({theme}) => theme.color.success};
  border-color: ${({theme}) => darken(20, theme.color.success)};
`;

export const ButtonClear = styled(Button)`
  background: none;
  border-color: ${({theme}) => darken(20, theme.color.brand)};
  color: ${({theme}) => theme.color.brand};
`;
