import React from 'react';
import { Link } from 'wouter';
import { GuestGuard, UserGuard } from '@imagine-cms/web';

export function SiteNav() {
  return (
    <>
      <GuestGuard>
        <li>
          <Link to="/login">
            <i className="fa fa-home" style={{ marginRight: 8 }} />
            Login
          </Link>
        </li>
      </GuestGuard>
      <UserGuard>
        <li>
          <Link to="/me">
            <i className="fa fa-home" style={{ marginRight: 8 }} />
            Home
          </Link>
        </li>
      </UserGuard>
      <li>
        <Link to="/community">
          <i className="fa fa-users" style={{ marginRight: 8 }} />
          Community
        </Link>
      </li>
      <li>
        <Link to="/ranks">
          <i className="fa fa-shield" style={{ marginRight: 8 }} />
          Staff
        </Link>
      </li>
      <li>
        <Link to="/high-scores">
          <i className="fa fa-trophy" style={{ marginRight: 8 }} />
          High Scores
        </Link>
      </li>
      <li>
        <Link to="/corps">
          <i className="fa fa-building" style={{ marginRight: 8 }} />
          Corporations
        </Link>
      </li>
      <li>
        <Link to="/gangs">
          <i className="fa fa-cannabis" style={{ marginRight: 8 }} />
          Gangs
        </Link>
      </li>
    </>
  )
}