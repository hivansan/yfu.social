import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

import Store from '../../stores/store';

const Home = () => {
  return (
    <>
      <div className='text-center home-first-section-bg home-first-section'>
        <div className='p-5'>
          <div className='p-5'>
            <img alt='' src={require('../../assets/yfu/anime-limited.png')} />
            <h2>A COMMUNITY FOR ALL ENTHUSIASTS.</h2>
          </div>
        </div>
      </div>
      <div className='p-5'>
        <div className='row'>
          <div className='col-9 fs-3'>
            <p>
              “Anime Limited envisions to grow into the biggest Crypto/Anime
              community in the world by bringing new technologies to a broader
              market and serving as a platform for people to communicate and
              learn.” - Karasu
            </p>
            <h3>YFU TOKENS</h3>
            <p>
              YFU (ワイフ — /ˈwaɪfuː/) is a community token for the Anime
              Limited and its collectible ecosystem. It’s meant as the core
              governance mechanic for the future generation of
              waifu/anime/defi/crypto enthusiasts. We are working day and night
              to indulge our community members while pushing our YFU tokens into
              a common, easy and effective way to satiate the communities wants
              and needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default withNamespaces()(withRouter(Home));
