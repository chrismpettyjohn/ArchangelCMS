'use client'
import React, { useContext, useEffect } from 'react';
import { useUserFetchOne } from '@imagine-cms/client';
import { useParams } from 'next/navigation';
import { Footer, FormContainer, Header, Logo, PageContainer, Title, UserStatus } from '../login-screen/LoginScreen.styled';
import { SITE_NAME } from '@imagine-cms/web';
import { usersOnlineContext } from '@imagine-cms/websocket';
import { YoutubeVideo } from '../../components/youtube-video/YoutubeVideo';

export function ProfileScreen() {
  const params = useParams<{ username: string }>();
  const { usersOnline } = useContext(usersOnlineContext);

  const username = params!.username;

  const fetchUser = useUserFetchOne();

  useEffect(() => {
    fetchUser.fetch({ username })
  }, [username]);


  const matchingProfile = fetchUser?.data;

  return (
    <PageContainer>
      <FormContainer>
        <Header>
          <Logo>{SITE_NAME}</Logo>
          <UserStatus>{usersOnline} users online</UserStatus>
        </Header>
        <Title>{matchingProfile?.username ?? username}'s Profile</Title>
        <YoutubeVideo videoID="XQxCxkAUJ70" startAt={101} />
      </FormContainer>
      <Footer>Powered by <b>Archangel</b> <br />by <b>LeChris</b></Footer>
    </PageContainer>
  )
}