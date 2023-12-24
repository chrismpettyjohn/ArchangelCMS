import { Link, useRoute } from 'wouter';
import { configContext } from '@imagine-cms/web';
import { usePhotoFetchOne } from '@imagine-cms/client';
import React, { useContext, useEffect, useState } from 'react';
import { PhotoViewScreenImagePreview } from './PhotoViewScreen.styled';
import { PhotoCommentsCard } from './photo-comments-card/PhotoCommentsCard';
import { PhotoCreateCommentCard } from './photo-create-comment-card/PhotoCreateCommentCard';
import { SmallUserProfileContainer } from '../../components/small-user-profile-container/SmallUserProfileContainer';
import { SmallUserProfileContainerMock } from '../../components/small-user-profile-container/SmallUserProfileContainerMock';
import { GridLarge } from '../../components/grid/Grid.remix';

export function PhotoViewScreen() {
  const [key, setKey] = useState(0);
  const { config } = useContext(configContext);
  const [_, params] = useRoute<{ photoID: string }>('/photos/:photoID');
  const photoID = Number(params!.photoID);

  const bumpKey = () => setKey(_ => _ + 1);

  const { data, fetch } = usePhotoFetchOne();

  useEffect(() => {
    fetch({ id: photoID })
  }, [photoID]);


  return (
    <>
      <h1><Link to="/photos"><i className="fa fa-caret-left" style={{ marginRight: 8 }} /></Link>Photos - #{photoID}</h1>
      <br />
      {
        data && (
          <GridLarge>
            <div>
              <PhotoViewScreenImagePreview src={data.photoURL} />
              {data.user ? <SmallUserProfileContainer user={data.user as any} /> : <SmallUserProfileContainerMock />}
            </div>
            <div key={`photo_${photoID}_comments_${key}`}>
              <PhotoCommentsCard photo={data} />
            </div>
            <PhotoCreateCommentCard photoID={data.id} onCreation={bumpKey} />
          </GridLarge>
        )
      }
    </>
  )
}