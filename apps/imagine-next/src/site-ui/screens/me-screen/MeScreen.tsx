'use client';
import React, { useEffect } from 'react';
import { UserLayout } from '../../components/user-layout/UserLayout';
import { HOTEL_NAME, useSession } from '@imagine-cms/web';
import Link from 'next/link';
import { useCorporationFetchOne, useGangFetchOne, useRPStatsFetchOne } from '@imagine-cms/client';

export function MeScreen() {
  const session = useSession()
  const rpStats = useRPStatsFetchOne();
  const gang = useGangFetchOne()
  const corp = useCorporationFetchOne();

  useEffect(() => {
    rpStats.fetch({ userID: session.id })
  }, []);
  useEffect(() => {
    if (!rpStats.data) {
      return;
    }

    if (rpStats.data.gangID) {
      gang.fetch({ id: rpStats.data.gangID })
    }

    corp.fetch({ id: rpStats.data.corporationID })
  }, [rpStats]);

  return (
    <UserLayout>
      <div style={{ display: 'flex', gap: 12 }}>
        <div style={{ position: 'relative', width: '100%' }}>
          <div
            className="profile-content"
            style={{
              backgroundImage: 'url(https://images.habbo.com/web_images/habbo-web-articles/builderswordpress_Sept22.png)',
              flexGrow: 1,
              position: 'relative',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >

            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                zIndex: 1
              }}
            />
            <div style={{ display: 'flex', position: 'relative', zIndex: 2, padding: 20 }}>
              <div className="profile-image"></div>
              <div className="profile-info">
                <h2>{session.username}</h2>
                <p>{session.motto}</p>
              </div>
            </div>
          </div>

          <div className="gang-info-item">
            <span><i className="fas fa-coins" /> Currency</span>
            <span>{session.credits}</span>
          </div>
          <button className="play-button" style={{ position: 'absolute', bottom: 0, left: 0 }}>Play {HOTEL_NAME}</button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
          <div className="stats-card">
            <div className="exp-header">
              <i className="fas fa-star" /> EXPERIENCE
            </div>
            <div className="progress-bar exp-bar">
              <div className="progress-fill"></div>
            </div>
          </div>

          <h4 style={{ textAlign: 'left' }}>Top 5 skills</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div className="list-card" style={{ width: '100%' }}>
              <div className="list-header"><i className="fas fa-hand-back-fist" /> Boxing</div>
              <div className="list-header"><i className="fas fa-trowel" /> Sharpshooter</div>
              <div className="list-header"><i className="fas fa-crosshairs" /> Mining</div>
              <div className="list-header"><i className="fas fa-tree" /> Tree Chopping</div>
              <div className="list-header"><i className="fas fa-person-running" /> Sprinting</div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div style={{ display: 'flex', gap: 12 }}>
        <div className="gang-card" style={{ width: '100%' }}>
          <div className="gang-header"><i className="fas fa-user-tie" /> JOB INFORMATION</div>
          <div className="list-item">
            <div className="item-image gang-image" style={{ backgroundImage: 'url(https://images.habbo.com/c_images/album1584/PV017.png)' }} />
            <div className="item-info">
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <div>HabRPG Police</div>
                <div className="badge">HIRING</div>
              </div>
            </div>
          </div>
          <div className="gang-info-item">
            <span>Name</span>
            <span>Shadow Warriors</span>
          </div>
          <div className="gang-info-item">
            <span>Headquarters</span>
            <span>42</span>
          </div>
          <div className="gang-info-item">
            <span>Employees</span>
            <span>1,337</span>
          </div>
          <div className="gang-info-item">
            <span>Revenue</span>
            <span>100,000</span>
          </div>
        </div>
        <div className="gang-card" style={{ width: '100%' }}>
          <div className="gang-header"><i className="fas fa-user-shield" /> GANG INFORMATION</div>
          <div className="list-item">
            <div className="item-image gang-image" style={{ backgroundImage: 'url(https://images.habbo.com/c_images/album1584/HSH03.png)' }} />
            <div className="item-info">
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <div>Crips</div>
                <div className="badge">Level 4</div>
              </div>
            </div>
          </div>
          <div className="gang-info-item">
            <span>Name</span>
            <span>Shadow Warriors</span>
          </div>
          <div className="gang-info-item">
            <span>Headquarters</span>
            <span>100,000</span>
          </div>
          <div className="gang-info-item">
            <span>Kills</span>
            <span>1,337</span>
          </div>
          <div className="gang-info-item">
            <span>Members</span>
            <span>42</span>
          </div>
        </div>
      </div>



      <div className="separator"></div>
      <h2 className="leaderboard-title">{HOTEL_NAME} Leaderboard</h2>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Kills</th>
            <th>Deaths</th>
            <th>Most Damage Dealt</th>
            <th>Most Damage Received</th>
            <th>Bomb Kills</th>
            <th>Bombs Thrown</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="profile-circle" style={{ backgroundImage: 'https://imager.habfrost.com/?figure=hd-190-2.lg-280-63.hr-831-61.ch-93483434-66-62.sh-990000056-92.ca-1000001082-63-63.ea-1000000373-62.he-990000005-92&size=m&direction=2&head_direction=3&dance=3&img_format=gif' }} />
            </td>
            <td>REACT</td>
            <td>150</td>
            <td>30</td>
            <td>300</td>
            <td>200</td>
            <td>50</td>
            <td>80</td>
          </tr>
          <tr>
            <div className="profile-circle" style={{ backgroundImage: 'https://imager.habfrost.com/?figure=hd-190-2.lg-280-63.hr-831-61.ch-93483434-66-62.sh-990000056-92.ca-1000001082-63-63.ea-1000000373-62.he-990000005-92&size=m&direction=2&head_direction=3&dance=3&img_format=gif' }} />
            <td>LeChris</td>
            <td>120</td>
            <td>40</td>
            <td>250</td>
            <td>180</td>
            <td>40</td>
            <td>70</td>
          </tr>
          <tr>
            <div className="profile-circle" style={{ backgroundImage: 'https://imager.habfrost.com/?figure=hd-190-2.lg-280-63.hr-831-61.ch-93483434-66-62.sh-990000056-92.ca-1000001082-63-63.ea-1000000373-62.he-990000005-92&size=m&direction=2&head_direction=3&dance=3&img_format=gif' }} />
            <td>Tre</td>
            <td>100</td>
            <td>50</td>
            <td>200</td>
            <td>150</td>
            <td>30</td>
            <td>60</td>
          </tr>
          <tr>
            <div className="profile-circle" style={{ backgroundImage: 'https://imager.habfrost.com/?figure=hd-190-2.lg-280-63.hr-831-61.ch-93483434-66-62.sh-990000056-92.ca-1000001082-63-63.ea-1000000373-62.he-990000005-92&size=m&direction=2&head_direction=3&dance=3&img_format=gif' }} />
            <td>LeChris</td>
            <td>80</td>
            <td>20</td>
            <td>150</td>
            <td>130</td>
            <td>20</td>
            <td>40</td>
          </tr>
          <tr>
            <div className="profile-circle" style={{ backgroundImage: 'https://imager.habfrost.com/?figure=hd-190-2.lg-280-63.hr-831-61.ch-93483434-66-62.sh-990000056-92.ca-1000001082-63-63.ea-1000000373-62.he-990000005-92&size=m&direction=2&head_direction=3&dance=3&img_format=gif' }} />
            <td>Tre</td>
            <td>60</td>
            <td>25</td>
            <td>100</td>
            <td>120</td>
            <td>15</td>
            <td>30</td>
          </tr>
        </tbody>
      </table>
    </UserLayout >
  )
}
