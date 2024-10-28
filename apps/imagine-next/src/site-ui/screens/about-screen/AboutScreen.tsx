import React from 'react';
import { YoutubeVideo } from '../../components/youtube-video/YoutubeVideo';
import { UserLayout } from '../../components/user-layout/UserLayout';

export function AboutScreen() {
  return (
    <UserLayout>
      <div className="container my-2">
        <div className="row">
          <div className="col-md-6 profile">
            <div className="custom-card">
              <div className="card-header">
                <h4>Archangel</h4>
              </div>
              <div className="card-body text-center">
                <img
                  src="https://i.imgur.com/CtyHVEq.png"
                  height={250}
                  width={250}
                  loading="lazy"
                />
                <p>
                  Crafted with precision using the latest technology, it's not just
                  a CMS; it's a game-changer for retros everywhere.
                </p>
                <p>
                  Imagine offers the unbeatable combination of top-tier performance,
                  blazing-fast speeds, and a development experience that's second to
                  none.
                </p>
                <p>
                  Developed from the ground up by
                  <a
                    href="https://github.com/habbo-hotel"
                    target="_blank"
                    style={{ cursor: 'pointer' }}
                    className="lechris"
                    rel="noreferrer"
                  >
                    <b>LeChris</b>
                  </a>
                </p>
                <p>
                  Designed by
                  <a
                    href="https://github.com/bopified"
                    target="_blank"
                    style={{ cursor: 'pointer' }}
                    className="bop"
                    rel="noreferrer"
                  >
                    <b>bop</b>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="play-card">
              <YoutubeVideo videoID="uR7URJZHhhY" startAt={31} />
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
