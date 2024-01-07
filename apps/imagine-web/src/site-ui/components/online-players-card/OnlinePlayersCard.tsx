import { Card } from '../card/Card';
import { Grid } from '../grid/Grid';
import { GridLarge } from '../grid/Grid.remix';
import React, { useEffect, useState } from 'react';
import { useUserFetchMany } from '@imagine-cms/client';
import { ButtonNoBorder } from '../button/Button.remix';
import { SmallUserProfileContainer } from '../small-user-profile-container/SmallUserProfileContainer';
import { SmallUserProfileContainerMock } from '../small-user-profile-container/SmallUserProfileContainerMock';

const USERS_PAGE_SIZE = 8;

export function OnlinePlayersCard() {
  const [page, setPage] = useState(0);
  const { data, fetch, loading } = useUserFetchMany();

  const canGoDown = page > 0;
  const canGoUp = (data?.length ?? 0) >= USERS_PAGE_SIZE;

  const goBackOnePage = () => {
    if (!canGoDown) {
      return;
    }
    setPage(_ => _ - 1)
  };
  const goUpOnePage = () => {
    if (!canGoUp) {
      return;
    }
    setPage(_ => _ + 1);
  }


  useEffect(() => {
    fetch({ online: true, skip: page & USERS_PAGE_SIZE, limit: USERS_PAGE_SIZE });
  }, [page]);

  return (
    <Card header={<>{loading && <i className="fa fa-spinner fa-spin" style={{ marginRight: 8 }} />}Online Users {page > 0 && <small>Page {page + 1}</small>}</>}>
      <Grid>
        {
          loading && (
            <>
              <SmallUserProfileContainerMock showMotto={false} showRank={false} />
            </>
          )
        }
        {
          data?.map(user => (
            <SmallUserProfileContainer key={`online_user_${user.id}`} user={user as any} showMotto={false} showRank={false} showOnlineStatus={false} />
          ))
        }
      </Grid>
      <GridLarge>
        {canGoDown ?
          <ButtonNoBorder onClick={goBackOnePage}>
            <i className={loading ? 'fa fa-spinner fa-spin' : 'fa fa-arrow-left'} />
          </ButtonNoBorder>
          : <div />}
        {
          canGoUp && (
            <ButtonNoBorder onClick={goUpOnePage}>
              <i className={loading ? 'fa fa-spinner fa-spin' : 'fa fa-arrow-right'} />
            </ButtonNoBorder>
          )
        }
      </GridLarge>
    </Card>
  )
}
