import React from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';


import testimage from '../../static/img/open-graph.png';

import jpgTestimage from '../../static/img/red-panda.jpg';

import Image from '@theme/IdealImage';

interface Props {
  data: any;
}

function ImageTestPage(props: Props): JSX.Element {

  return (
    <Layout title="Hello">
      <BrowserOnly
          fallback={<h1>Pre-rendered! NODE_ENV: {process.env.NODE_ENV} </h1>}>
          {() => (<h1>In the browser! NODE_ENV: {process.env.NODE_ENV} </h1>)}
      </BrowserOnly>
      <h1>PNG Test</h1>
      <h2>Min: 50, Max: 1000</h2>
      <Image img={testimage} min={50} max={1000} style={{width: '100%'}}/>

      <h2>Sizes: 50, 400, 1000</h2>
      <Image img={testimage} sizes={[50, 400, 1000]} style={{width: '100%'}}/>

      <h2>Size: 200</h2>
      <Image img={testimage} size={200} style={{width: '100%'}}/>

      <h2>Name: testing, Quality: 10</h2>
      <Image img={testimage} name='testing' quality={10} style={{width: '100%'}}/>

      <h1>JPG Test</h1>
      <h2>Min: 50, Max: 1000</h2>
      <Image img={jpgTestimage} min={50} max={1000} style={{width: '100%'}}/>

      <h2>Sizes: 50, 400, 1000</h2>
      <Image img={jpgTestimage} sizes={[50, 400, 1000]} style={{width: '100%'}}/>

      <h2>Size: 200</h2>
      <Image img={jpgTestimage} size={200} style={{width: '100%'}}/>

      <h2>Name: testing, Quality: 10</h2>
      <Image img={jpgTestimage} name='testing' quality={10} style={{width: '100%'}}/>

      {/* <img src='/static/img/open-graph.png' /> */}
    </Layout>
  );
}

export default ImageTestPage;