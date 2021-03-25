import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

import * as Web3 from 'web3';
import { OpenSeaPort, Network } from 'opensea-js';
import { OrderSide } from 'opensea-js/lib/types';

import Store from '../../stores/store';

import config from '../../config/example.config';
import { CONNECTION_CONNECTED } from '../../constants/constants';

const { emitter, dispatcher, store } = Store;
const provider = new Web3.providers.HttpProvider(config.infuraProvider);

const NftItem = (props) => {
  console.log(props);
  const [asset, setAsset] = useState({});
  const [account, setAccount] = useState('');

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

    // console.log(JSON.stringify(asset));

    setAsset(asset);
  };

  const onBuyItem = async () => {
    try {
      const seaport = new OpenSeaPort(provider, {
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
      // console.log(JSON.stringify(order));

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
      {asset?.owner && (
        <div className='pt-5'>
          <div className='p-5'>
            <div className='row'>
              <div className='col-md-4 col-sm-12'>
                <div className='card'>
                  <img src={asset.imagePreviewUrl} alt='' />
                </div>
                <div className='card mt-3'>
                  <div className='card-body'>
                    <h5 className='card-title'>Details</h5>
                    <hr />
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
                  {asset.description && <p>{asset.description}</p>}
                  <div>
                    <img
                      src={asset.owner.profile_img_url}
                      className='owner-img'
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
                    <h5 className='card-title'>Actions</h5>
                    <button
                      className='btn btn-outline-primary btn-outline-orange'
                      onClick={onBuyItem}
                    >
                      Buy Item
                    </button>
                    <br />
                    <button disabled className='btn btn-secondary mt-3'>
                      Make offer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default withNamespaces()(withRouter(NftItem));
