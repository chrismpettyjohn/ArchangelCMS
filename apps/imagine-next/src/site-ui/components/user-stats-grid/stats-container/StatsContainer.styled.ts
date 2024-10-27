'use client';
import styled from '@emotion/styled';

const StatsContainerElement = styled.div`
  background: ${({theme}) => theme.color.s30};
  border: ${({theme}) => `4px solid ${theme.color.s40}`};
  border-radius: ${({theme}) => theme.radius.oneUnit};
  color: ${({theme}) => theme.color.s50};
  cursor: pointer;
  display: flex;
  flex: 1;
  font-weight: 500;
  font-size: ${({theme}) => theme.fontSize.oneUnit};
  gap: ${({theme}) => theme.space.oneUnit};
  padding: ${({theme}) => theme.space.halfUnit};

  b {
    font-weight: 800;
    color: ${({theme}) => theme.color.s60};
  }

  img {
    display: flex;
    width: 30px;
    height: 30px;
  }

  &:hover {
    border: ${({theme}) => `2px solid ${theme.color.s30}`};
  }
`;

export const CreditStatsContainerElement = styled(StatsContainerElement)`
  background: #e0b246;
  border-color: #f6c44f;
`;

export const PixelStatsContainerElement = styled(StatsContainerElement)`
  background: #a55ca0;
  border-color: #bf6dba;
`;

export const DiamondStatsContainerElement = styled(StatsContainerElement)`
  background: #588e84;
  border-color: #c7ebe3;
`;

export const HabboClubStatsContainerElement = styled(StatsContainerElement)`
  background: #4a3b17;
`;
