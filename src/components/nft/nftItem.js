import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

import * as Web3 from 'web3';
import { OpenSeaPort, Network } from 'opensea-js';
import { OrderSide } from 'opensea-js/lib/types';

import Store from '../../stores/store';

import config from '../../config/example.config';
import { CONNECTION_CONNECTED } from '../../constants/constants';
import Loader from '../utils/Loader';

const { emitter, dispatcher, store } = Store;

const NftItem = (props) => {
  console.log(props);
  const [asset, setAsset] = useState({});
  const [account, setAccount] = useState('');

  const provider = new Web3.providers.HttpProvider(config.infuraProvider);

  useEffect(() => {
    getAsset();
    emitter.on(CONNECTION_CONNECTED, onConnected);

    return () => {
      emitter.removeListener(CONNECTION_CONNECTED, onConnected);
    };
  }, []);

  const onConnected = () => {
    let account = store.getStore('account');
    setAccount(account);
  };

  const getAsset = async () => {
    const seaport = new OpenSeaPort(provider, {
      networkName: Network.Main,
    });

    const asset = await seaport.api.getAsset({
      tokenAddress: props.match.params.tokenAddress, // string
      tokenId: props.match.params.tokenId, // string | number | null
    });

    if (asset.orders && asset.orders.length) {
      console.log(asset.orders[0].paymentTokenContract.usdPrice);
      console.log(`${asset.orders[0].currentPrice}` / 1000000000000000000);
      console.log(
        (`${asset.orders[0].currentPrice}` / 1000000000000000000) *
          asset.orders[0].paymentTokenContract.usdPrice
      );
    }

    setAsset(asset);
  };

  const onBuyItem = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable();

      console.log(window.web3);
      console.log(window.web3.currentProvider);
    }
    try {
      const seaport = new OpenSeaPort(window.web3.currentProvider, {
        networkName: Network.Main,
      });

      const order = await seaport.api.getOrder({
        side: OrderSide.Sell,
        token_id: asset.tokenId,
        order_by: 'created_date',
        order_direction: 'desc',
        bundled: 'false',
        include_bundled: 'false',
        include_invalid: 'false',
      });

      console.log(order);

      // console.log(account);
      const transactionHash = await seaport.fulfillOrder({
        order,
        accountAddress: account.address,
      });
      console.log(transactionHash);
    } catch (error) {
      console.log(error);
    }
    // const accountAddress = '0x...'; // The buyer's wallet address, also the taker
    // const transactionHash = await this.props.seaport.fulfillOrder({
    //   order,
    //   accountAddress,
    // });
  };

  return (
    <>
      {
        <div className='pt-5'>
          <div className='p-5'>
            {asset?.owner ? (
              <div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <div className='card'>
                    <img src={asset.imagePreviewUrl} alt='' />
                  </div>
                  <div className='card mt-3'>
                    <div className='card-body'>
                      <h5 className='card-title'>Details</h5>
                      <hr />
                      {asset.description && asset.description}
                      <div>
                        Chain Info
                        <hr />
                        <div>contract address {asset.tokenAddress}</div>
                        <div>token ID {asset.tokenId}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-8'>
                  <div>
                    <h4>{asset.name}</h4>
                    <div>
                      <img
                        src={asset.owner.profile_img_url}
                        className='owner-img mr-2'
                        alt=''
                      />
                      OWNED BY
                      {asset.owner.address}
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-3'></div>
                  </div>
                  <div className='card mt-3'>
                    <div className='card-body'>
                      <h5 className='card-title'>
                        {asset?.orders?.length ? (
                          <>
                            <span>
                              {`${asset.orders[0].currentPrice}` /
                                1000000000000000000}{' '}
                              eth
                            </span>
                            <span>
                              {' '}
                              (
                              {(
                                (`${asset.orders[0].currentPrice}` /
                                  1000000000000000000) *
                                asset.orders[0].paymentTokenContract.usdPrice
                              ).toFixed(2)}{' '}
                              usd)
                            </span>
                          </>
                        ) : null}
                      </h5>

                      {asset?.orders?.length ? (
                        <button
                          className='btn btn-outline-primary btn-outline-orange'
                          type='button'
                          onClick={onBuyItem}
                        >
                          Buy Item
                        </button>
                      ) : (
                        'item not purchaseable'
                      )}

                      <br />
                      <button disabled className='btn btn-secondary mt-3'>
                        Make offer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className='text-center'>
                <Loader />
              </div>
            )}
          </div>
        </div>
      }
    </>
  );
};

export default withNamespaces()(withRouter(NftItem));
