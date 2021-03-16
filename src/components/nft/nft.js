import React from 'react';
import { withRouter } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

// import './swarm.scss';

const nftsData = [
  {
    image: 'waifu-1.png',
    name: 'Nobara Kugisaki',
    description: `If you like a waifu who is smart and mysterious, you will fall in love with Hondomachi. She is a great secret agent, getting her way by using her foolproof logic and deduction skills. Her clothes are also very professional, for all those who love a sharp-dressed waifu.`,
  },
  {
    image: 'waifu-2.png',
    name: 'Nobara Kugisaki',
    description: `If you like a waifu who is smart and mysterious, you will fall in love with Hondomachi. She is a great secret agent, getting her way by using her foolproof logic and deduction skills. Her clothes are also very professional, for all those who love a sharp-dressed waifu.`,
  },
  {
    image: 'waifu-3.png',
    name: 'Nobara Kugisaki',
    description: `If you like a waifu who is smart and mysterious, you will fall in love with Hondomachi. She is a great secret agent, getting her way by using her foolproof logic and deduction skills. Her clothes are also very professional, for all those who love a sharp-dressed waifu.`,
  },
];

const nftLayout = (nft) => (
  <div className='col-lg-3 col-md-4 col-sm-6'>
    <img
      alt=''
      src={require(`../../assets/yfu/${nft.image}`)}
      className='img-fluid round-17'
    />
    <div className='text-center mt-3'>
      <h5>{nft.name}</h5>
      <h5 className='gray'>1 of 3</h5>
    </div>
    <p>{nft.description}</p>
  </div>
);

const Nft = (props) => {
  return (
    <div className='pt-5'>
      <div className='p-5'>
        <h4 className='orange'>ANIME LIMITED</h4>
        <h1>NFTs</h1>
        <div className='row'>{nftsData.map(nftLayout)}</div>
      </div>
    </div>
  );
};

export default withNamespaces()(withRouter(Nft));
