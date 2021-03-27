import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

// import './swarm.scss';

const nftsData = [
  {
    address: '0x21ba1e0b219ca2d301e689d0886ed48150646aea',
    tokenId: '1',
    image: 'waifu-1.png',
    name: 'Nobara Kugisaki',
    description: `If you like a waifu who is smart and mysterious, you will fall in love with Hondomachi. She is a great secret agent, getting her way by using her foolproof logic and deduction skills. Her clothes are also very professional, for all those who love a sharp-dressed waifu.`,
  },
  {
    address: '0x21ba1e0b219ca2d301e689d0886ed48150646aea',
    tokenId: '2',
    image: 'waifu-2.png',
    name: 'Nobara Kugisaki',
    description: `If you like a waifu who is smart and mysterious, you will fall in love with Hondomachi. She is a great secret agent, getting her way by using her foolproof logic and deduction skills. Her clothes are also very professional, for all those who love a sharp-dressed waifu.`,
  },
  // {
  //   address: '',
  //   tokenId: '',
  //   image: 'waifu-3.png',
  //   name: 'Nobara Kugisaki',
  //   description: `If you like a waifu who is smart and mysterious, you will fall in love with Hondomachi. She is a great secret agent, getting her way by using her foolproof logic and deduction skills. Her clothes are also very professional, for all those who love a sharp-dressed waifu.`,
  // },
  {
    address: '0x495f947276749ce646f68ac8c248420045cb7b5e',
    tokenId:
      '28023187433289049094106571694531650250834107404160255306566064234055266729985',
    image: 'waifu-3.png',
    name: 'Nobara Kugisaki',
    description: `If you like a waifu who is smart and mysterious, you will fall in love with Hondomachi. She is a great secret agent, getting her way by using her foolproof logic and deduction skills. Her clothes are also very professional, for all those who love a sharp-dressed waifu.`,
  },
];

const nftLayout = (nft) => (
  <div className='col-lg-3 col-md-4 col-sm-6'>
    <div className='card'>
      <img
        alt=''
        src={require(`../../assets/yfu/${nft.image}`)}
        className='img-fluid round-17'
      />
      <div className='card-body'>
        <div className='text-center mt-3'>
          <h5>{nft.name}</h5>
          <h5 className='gray'>1 of 3</h5>
        </div>
        <p>{`${nft.description.substr(0, 50)}...`}</p>
        <Link
          to={`/nft/${nft.address}/${nft.tokenId}`}
          className='btn btn-primary btn-orange'
        >
          View
        </Link>
      </div>
    </div>
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
