import React from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';


import testimage from '../../static/img/open-graph.png';

import Image from '@theme/IdealImage';

interface Props {
  data: any;
}

function ImageTestPage(props: Props): JSX.Element {

  return (
    <Layout title="Hello">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          Edit <code>pages/hello.js</code> and save to reload.
        </p>
      </div>

      <BrowserOnly
          fallback={<h1>Pre-rendered! NODE_ENV: {process.env.NODE_ENV} </h1>}>
          {() => (<h1>In the browser! NODE_ENV: {process.env.NODE_ENV} </h1>)}
        </BrowserOnly>
        <Image img={testimage} min={50} max={1000} style={{width: '100%'}}/>
      {/* <img src='/static/img/open-graph.png' /> */}
    </Layout>
  );
}

export default ImageTestPage;