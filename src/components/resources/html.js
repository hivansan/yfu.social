import React from 'react';

import { withNamespaces } from 'react-i18next';

const HtmlComponent = (props) => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: props.html }}></div>
    </>
  );
};

export default withNamespaces()(HtmlComponent);
