import React from 'react';
import { YoutubeVideo } from '../../components/youtube-video/YoutubeVideo';
import { GuestContainer } from '../../components/guest-container/GuestContainer';
import Link from 'next/link';

export function AboutScreen() {
  return (
    <GuestContainer>
      <div className="register-container">
        <p>
          Developed from the ground up by&nbsp;
          <a
            href="https://github.com/habbo-hotel"
            target="_blank"
            style={{ cursor: 'pointer', color: 'white' }}
            rel="noreferrer"
          >
            <b>LeChris</b>
          </a>
        </p>
      </div>
      <br />
      <div className="register-container">
        <YoutubeVideo videoID="-ecbqm-KQ9c" startAt={5} />
      </div>
      <br />
      <Link href="/me">
        <button className="register-button" type="button">Go Back</button>
      </Link>
    </GuestContainer >
  );
}
