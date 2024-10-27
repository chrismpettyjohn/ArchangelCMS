'use client';
import styled from '@emotion/styled';
import {Progress} from '../progress/Progress';

export const HealthProgress = styled(Progress)`
  background: #c62828;
  &&[value]::-webkit-progress-value {
    background: #c62828;
  }
`;

export const EnergyProgress = styled(Progress)`
  background: #2e7d32;
  &&[value]::-webkit-progress-value {
    background: #2e7d32;
  }
`;

export const HungerProgress = styled(Progress)`
  background: #ffc107;
  &&[value]::-webkit-progress-value {
    background: #ffc107;
  }
`;

export const ArmorProgress = styled(Progress)`
  background: #0277bd;
  &&[value]::-webkit-progress-value {
    background: #0277bd;
  }
`;
