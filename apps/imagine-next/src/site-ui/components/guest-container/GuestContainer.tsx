import React from 'react';
import { LoginModal } from '../login-modal/LoginModal';
import { RegisterModal } from '../register-modal/RegisterModal';

export function GuestContainer() {
  return (
    <>
      <header>
        <nav className="navbar navbar-light navbar-expand-md navbar-default">
          <div className="container-fluid">
            <div><a className="navbar-brand navbar-brand-centered" href="index.html">
              <img style={{ maxHeight: 50 }} src="/img/habrp-logo.gif" /></a><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon">Menu</span></button></div>
            <div
              className="collapse navbar-collapse" id="navcol-1">
              <ul className="nav navbar-nav">
                <li className="nav-item" role="presentation"><a className="nav-link" href="#" data-toggle="modal" data-target="#loginModal">Login</a></li>
                <li className="nav-item" role="presentation"><a className="nav-link register" href="#" data-toggle="modal" data-target="#registerModal">Register</a></li>
              </ul>
              <ul className="nav navbar-nav ml-auto">
                <li className="nav-item dropdown" role="presentation"><a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Community</a>
                  <div className="dropdown-menu"><a className="dropdown-item" href="#">Link</a><a className="dropdown-item" href="#">Link</a></div>
                </li>
                <li className="nav-item" role="presentation"><a className="nav-link" href="#">Shop</a></li>
                <li className="nav-item" role="presentation"><a className="nav-link" href="#">Leaderboards</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <section className="iframe-video-section"><iframe src="https://player.vimeo.com/video/242196689?autoplay=1&amp;background=1&amp;loop=1&amp;autopause=0"></iframe>
        <div className="iframe-overlay"></div>
        <div className="iframe-content container">
          <h1>Welcome to HabRPG<br /></h1>
          <p><br />&nbsp;Step into a post-apocalyptic world where you can craft, survive, and thrive in a unique roleplaying experience inspired by dystopian RPGs. Join us and shape your story in the wasteland!<br /><br /></p><a className="btn btn-primary-new btn-lg mr-2"
            data-toggle="modal" data-target="#loginModal">Login</a><a className="btn btn-secondary btn-lg" data-toggle="modal" data-target="#registerModal">Register</a></div>
      </section>
      <section className="features-section">
        <div className="ash-overlay"></div>
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-4">
              <div className="feature-box">
                <h3>Crafting</h3><img src="/img/features/crafting.png" />
                <p>Gather resources and craft unique items essential for survival.<br /></p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box">
                <h3>Exploration<br /></h3><img src="/img/features/exploration.png" />
                <p>Venture through dangerous territories and uncover hidden secrets.<br /></p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box">
                <h3>Alliances<br /></h3><img src="/img/features/alliances.png" />
                <p>Form alliances with other players to strengthen your stand in the wasteland.<br /></p>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-4">
              <div className="feature-box">
                <h3>Survival</h3><img src="/img/features/survival.png" />
                <p>Endure the challenges of a harsh, dystopian environment.<br /></p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box">
                <h3>Roleplaying</h3><img src="/img/features/roleplaying.png" />
                <p>Embrace your character’s story and impact the world around you.<br /></p>
              </div>
            </div>
          </div>
        </div>
        <div className="section-bg-1"></div>
      </section>

      <LoginModal />
      <RegisterModal />

      <div className="footer-basic">
        <footer>
          <ul className="list-inline">
            <li className="list-inline-item"><a href="#">Designed by bop</a></li>
          </ul>
          <p className="copyright">HabRPG © 2042</p>
        </footer>
      </div>
    </>
  );
}
