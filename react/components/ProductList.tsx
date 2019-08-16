import React from "react"
import * as Amp from 'react-amphtml'

const ProductList: React.FC = ({ products }) => {
  return(
    <Amp.AmpCarousel layout="fixed-height" height="600" width="1000" specName="AMP-CAROUSEL [type=carousel]">
      {products.map(product => (
        <Amp.AmpImg 
          width="500"
          height="600"
          src={product.items[0].images[0].imageUrl}
          specName="default"
          layout="responsive"
        />
      ))}
    </Amp.AmpCarousel>
  )
}

export default ProductList