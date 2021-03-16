import React from 'react';
import { withRouter } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import { Button, Col, Accordion, Row } from 'react-bootstrap';
import { BsChevronRight } from 'react-icons/bs';

const Resources = (props) => {
  return (
    <>
      <div className='pt-5'>
        <div className='p-5'>
          <h4 className='orange'>ANIME LIMITED</h4>
          <h1>RESOURCES</h1>
          <img
            src={require('../../assets/yfu/woman-resources.png')}
            className='fixed-bottom max-width-25 right-auto left-auto'
            alt=''
          />
        </div>
      </div>
    </>
  );
};

export default withNamespaces()(withRouter(Resources));
