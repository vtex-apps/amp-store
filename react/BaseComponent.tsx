import React from 'react'
import * as Amp from 'react-amphtml'

const BaseComponent = () => {
  return (
    <React.Fragment>
      <h1>hello from amp page!</h1>
      <Amp.AmpImg
        specName="default"
        width="400"
        height="205"
        src="https://brand.vtex.com/static/media/logo.2f3fc60b.svg"
      />
    </React.Fragment>
  )
}

export default BaseComponent
