'use client';
import {Grid} from '../grid/Grid';
import {GridLarge} from '../grid/Grid.remix';
import React, {useEffect, useState} from 'react';
import {ButtonClear} from '../button/Button.remix';
import {useFriendshipFetchMany} from '@imagine-cms/client';
import {UserFriendsGridProps} from './UserFriendsGrid.types';
import {SmallUserProfileContainer} from '../small-user-profile-container/SmallUserProfileContainer';
import {SmallUserProfileContainerMock} from '../small-user-profile-container/SmallUserProfileContainerMock';

const FRIENDS_PAGE_SIZE = 4;

export function UserFriendsGrid({user}: UserFriendsGridProps) {
  const [page, setPage] = useState(0);
  const friendshipFetch = useFriendshipFetchMany();

  const canGoUp = (friendshipFetch?.data?.length ?? 0) >= FRIENDS_PAGE_SIZE;

  const canGoDown = page > 0;

  const goUpOnePage = () => {
    if (!canGoUp) {
      return;
    }
    setPage(_ => _ + 1);
  };

  const goBackOnePage = () => {
    if (!canGoDown) {
      return;
    }
    setPage(_ => _ - 1);
  };

  useEffect(() => {
    friendshipFetch.fetch({
      userID: user.id,
      skip: FRIENDS_PAGE_SIZE * page,
      limit: FRIENDS_PAGE_SIZE,
    });
  }, [user.id, page]);

  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <h2 style={{margin: 0}}>Friends</h2>
        {page > 0 && <h6 style={{margin: 0}}>Page {page + 1}</h6>}
      </div>
      {friendshipFetch.data?.length === 0 && <p>You don't have any friends</p>}
      <Grid>
        {friendshipFetch.loading && (
          <>
            <SmallUserProfileContainerMock showMotto={false} showRank={false} />
          </>
        )}
        {friendshipFetch.data?.map(_ => (
          <SmallUserProfileContainer
            key={`friendship_${_.friendID}`}
            user={_.friend as any}
            showMotto={false}
            showRank={false}
          />
        ))}
      </Grid>
      <br />
      <GridLarge>
        {canGoDown ? (
          <ButtonClear onClick={goBackOnePage}>
            <i
              className={
                friendshipFetch.loading
                  ? 'fa fa-spinner fa-spin'
                  : 'fa fa-arrow-left'
              }
            />
          </ButtonClear>
        ) : (
          <div />
        )}
        {canGoUp && (
          <ButtonClear onClick={goUpOnePage}>
            <i
              className={
                friendshipFetch.loading
                  ? 'fa fa-spinner fa-spin'
                  : 'fa fa-arrow-right'
              }
            />
          </ButtonClear>
        )}
      </GridLarge>
    </>
  );
}
