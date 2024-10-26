'use client'
import React, { useContext } from 'react';
import { sessionContext, SITE_NAME } from '@imagine-cms/web';
import { Footer, FormContainer, Header, Logo, PageContainer, Title, UserStatus } from '../login-screen/LoginScreen.styled';
import { usersOnlineContext } from '@imagine-cms/websocket';
import { ButtonSuccess } from '../../components/button/Button.remix';
import Link from 'next/link';

export function MeScreen() {
  const { session } = useContext(sessionContext);
  const { usersOnline } = useContext(usersOnlineContext);

  return (
    <PageContainer>
      <FormContainer>
        <Header>
          <Logo>{SITE_NAME}</Logo>
          <UserStatus>{usersOnline} users online</UserStatus>
        </Header>
        <Title>Welcome back, {session?.username}</Title>
        <Link href="/play">
          <ButtonSuccess>Start exploring</ButtonSuccess>
        </Link>
      </FormContainer>
      <Footer>Powered by <b>Archangel</b> <br />by <b>LeChris</b></Footer>
    </PageContainer>
  )
}
