import React from 'react';
import * as Amp from 'react-amphtml'

import Shelf from './components/Shelf'

const Home = () => {
  return (
    <>
      <Amp.AmpImg
        specName="default"
        layout="responsive"
        height="720px"
        width="1720px"
        srcset="https://storecomponents.vteximg.com.br/arquivos/banner-principal.png 1800w,
        https://storecomponents.vteximg.com.br/arquivos/banner-principal-mobile.jpg 200w"/>
      <Shelf/>
    </>
  )
}

export default Home