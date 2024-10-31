'use client';
import { useEffect } from 'react';
import { useUserFetchOne } from '@imagine-cms/client';
import { useParams } from 'next/navigation';

export function ProfileScreen() {
  const params = useParams<{ username: string }>();

  const username = params!.username;

  const fetchUser = useUserFetchOne();

  useEffect(() => {
    fetchUser.fetch({ username });
  }, [username]);

  const matchingProfile = fetchUser?.data;

  return null;
}
