import React from "react"
import * as Amp from 'react-amphtml'


const Banners: React.FC = ({ banners }) => {
  const getSrcSet = (banner) => ([banner.image + " 1500w", banner.mobileImage + " 350w"])
  return (
    <Amp.AmpCarousel
      layout="fixed-height"
      height="720px"
      specName="AMP-CAROUSEL [type=slides]">
      {banners.map( banner => (
        <Amp.AmpImg
          specName="default"
          layout="responsive"
          srcset={getSrcSet(banner)}
        >
        </Amp.AmpImg>
      ))}
    </Amp.AmpCarousel>
  )
}

export default Banners
