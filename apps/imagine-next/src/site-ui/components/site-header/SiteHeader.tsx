import Link from 'next/link';
import React from 'react';

export function SiteHeader() {
  return (
    <header>
      <nav className="navbar navbar-light navbar-expand-md navbar-default">
        <div className="container-fluid">
          <div>
            <Link className="navbar-brand navbar-brand-centered" href="/me">
              <img style={{ maxHeight: 50 }} src="/img/habrp-logo.gif" />
            </Link>
            <button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="navbar-toggler-icon">Menu</span>
            </button>
          </div>
          <div
            className="collapse navbar-collapse" id="navcol-1">
            <ul className="nav navbar-nav">
              <li className="nav-item" role="presentation">
                <Link className="nav-link" href="/me">My Profile</Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link className="nav-link" href="/settings">Settings</Link>
              </li>
            </ul>
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item" role="presentation">
                <Link className="nav-link" href="/logout">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
