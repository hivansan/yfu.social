import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

import axios from 'axios';
import Html from './html';

const Resources = (props) => {
  const [mediumEntries, setMediumEntries] = useState(null);

  async function fetchData(source) {
    try {
      let {
        data,
      } = await axios.get(
        'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@yfu-finance',
        { cancelToken: source.token }
      );

      setMediumEntries(data.items);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();

    fetchData(source);
    return () => {
      source.cancel('');
    };
  }, []);

  const goToLink = (link) => {
    window.open(link);
  };

  const renderMediumEntries = () => {
    console.log(mediumEntries);
    return (
      mediumEntries &&
      mediumEntries.length &&
      mediumEntries.map(
        ({ title, pubDate, link, guid, author, thumbnail, description }) => {
          return (
            <div
              key={guid}
              onClick={() => {
                goToLink(link);
              }}
            >
              <h2>{title}</h2>
              <Html html={description}></Html>
              <hr />
            </div>
          );
        }
      )
    );
  };

  return (
    <>
      <div className='pt-5'>
        <div className='p-5'>
          <h4 className='orange'>ANIME LIMITED</h4>
          <h1>RESOURCES</h1>
          {renderMediumEntries()}
          {/* <img
            src={require('../../assets/yfu/woman-resources.png')}
            className='fixed-bottom max-width-25 right-auto left-auto'
            alt=''
          /> */}
        </div>
      </div>
    </>
  );
};

export default withNamespaces()(withRouter(Resources));
