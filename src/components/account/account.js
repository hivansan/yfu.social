import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { ERROR } from '../../constants/constants';

import Store from '../../stores/store';
const { emitter, store } = Store;

class Account extends Component {
  constructor(props) {
    super();

    const account = store.getStore('account');
    const themeType = store.getStore('themeType');
    const activeClass = store.getStore('activeClass');

    this.state = {
      activeClass: activeClass,
      loading: false,
      account: account,
      assets: store.getStore('assets'),
      modalOpen: false,
      themeType: themeType,
    };
  }
  componentWillMount() {
    emitter.on(ERROR, this.errorReturned);
  }

  componentWillUnmount() {
    emitter.removeListener(ERROR, this.errorReturned);
  }

  errorReturned = (error) => {
    //TODO: handle errors
  };

  render() {
    return (
      <div className='p-5 mt-5 text-center'>
        <h1>WELCOME TO ANIME LIMITED</h1>
        {/* <img
          src={require('../../assets/bees-logo.png')}
          className='bees-logo'
        ></img> */}
        <h4 className='light-gray'>
          Click in <span style={{ color: '#e95c30' }}>"Connect"</span> to start
          farming.
        </h4>
        <img
          src={require('../../assets/yfu/stopgirl.png')}
          className='fixed-bottom left-auto max-width-50'
          alt=''
        />
      </div>
    );
  }
}

export default Account;
