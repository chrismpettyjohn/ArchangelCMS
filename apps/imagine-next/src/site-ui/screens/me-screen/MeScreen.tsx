'use client';
import React, { useContext } from 'react';
import { UserLayout } from '../../components/user-layout/UserLayout';
import { Avatar } from '../../components/avatar/Avatar';
import { sessionContext } from '@imagine-cms/web';
import Link from 'next/link';

export function MeScreen() {
  const { session } = useContext(sessionContext);
  return (
    <UserLayout>
      <div className="container my-2">
        <div className="row">
          <div className="col-md-6 profile">
            <div className="custom-card">
              <div className="card-header">
                <h4><i className="far fa-id-card"></i>&nbsp;Identification Card</h4>
              </div>
              <div className="card-body text-center">
                <h5>Lvl. 1 - {session!.username}</h5>
                <Avatar look={session?.look ?? '-'} />
                <p><i className="fas fa-coins" />: {session?.credits?.toLocaleString()}<br /></p>
                <hr />
                <p className="width: 50%;">Experience:<span id="experience">&nbsp;2500/5000</span>&nbsp;XP<br /></p>
                <div className="progress">
                  <div className="progress-bar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }}>50%</div>
                </div>
              </div>
              <div className="stats">
                <div className="stat-box">
                  <p className="p-profile">Kills:&nbsp;<span id="kills">-</span></p>
                </div>
                <div className="stat-box">
                  <p>Deaths:&nbsp;<span id="deaths">-</span></p>
                </div>
                <div className="stat-box">
                  <p>K/D:&nbsp;<span id="kd">-</span></p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="play-card">
              <h4><i className="fas fa-globe-americas mr-2" />World Portal</h4>
              <Link href="/play">
                <button className="btn btn-custom mx-2" type="button">Enter RP</button>
              </Link>
              <a href="https://discord.gg/bFHS3cMAMk" target="_blank">
                <button className="btn btn-custom mx-2" type="button">Join Discord</button>
              </a>
            </div>
            <div className="latest-news-card">
              <h4 className="news-articles"><i className="fas fa-newspaper"></i>Latest News and Updates!</h4>
              <div>
                <div className="news-article mb-3"><img src="/img/features/alliances.png" /><div className="article-title">Update: Companion Update!</div></div>
                <div className="news-article mb-3"><img src="/img/features/roleplaying.png" /><div className="article-title">Bug Fix: You can now embark on a mission!</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  )
}
