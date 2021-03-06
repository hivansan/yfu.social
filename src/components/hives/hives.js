import React from 'react';
import { withRouter } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import { AiOutlineWarning } from 'react-icons/ai';

import HivesList from './hives-list';

const Hives = (props) => {
  return (
    <div className='pt-5'>
      <div className='p-5'>
        <h4 className='orange'>ANIME LIMITED</h4>
        <h1>ACTIVE POOLS</h1>
        <div className='row'>
          <div className='col-md-6'>
            {/* <div className='alert alert-success' role='alert'>
              <AiOutlineWarning /> Bonus only applies on your first stake.
            </div> */}
          </div>
        </div>

        <HivesList justifyContent='flex-start' />
      </div>
    </div>
  );
};

export default withNamespaces()(withRouter(Hives));
