import React from "react"
import * as Amp from 'react-amphtml'

import { Button } from 'vtex.styleguide'

const ProductList: React.FC = ({ products }) => {
  return(
    <div className="flex flex-column items-center">
      <h1 className="t-heading-2 fw3 w-100 flex justify-center pt7 pb6 c-muted-1">
        Hot Stuff
      </h1>
      <Amp.AmpCarousel 
        layout="fixed"
        height="600"
        width="1500" 
        loop
        specName="AMP-CAROUSEL [type=carousel]">
        {products.map(product => (
          <section className="ph3 h-100">
            <div className="flex flex-column justify-center">
              <Amp.AmpImg 
                width="300" height="300"
                src={product.items[0].images[0].imageUrl}
                specName="default"
              />
              <h2 className="t-body tc">{product.productName}</h2>
              <span className="dib t-heading-5 tc c-on-base pv5">
                $ { product.items[0].sellers[0].commertialOffer.Price }
              </span>
              <Button block={false} size="regular">Buy</Button>
            </div>
          </section>
        ))}
      </Amp.AmpCarousel>
    </div>
  )
}

export default ProductList