import React from 'react'
import { Helmet } from 'react-helmet'
import { useRuntime } from 'vtex.render-runtime'
import * as Amp from 'react-amphtml'

const CONTENT_TYPE = 'text/html; charset=utf-8'
const META_ROBOTS = 'index, follow'

const joinKeywords = (keywords: string[]) => keywords && keywords.join(', ')

const AmpProvider: React.FC = ({ children }) => {
  const runtime = useRuntime()
  const {
    getSettings,
    culture: { country, locale, currency },
    route: { title: pageTitle, metaTags },
  } = runtime

  const storeSettings = getSettings('vtex.store')

  const {
    titleTag,
    metaTagDescription,
    metaTagKeywords,
    metaTagRobots,
    storeName,
  } = storeSettings

  const description = (metaTags && metaTags.description) || metaTagDescription
  const keywords =
    joinKeywords(metaTags && metaTags.keywords) || metaTagKeywords

  const title = pageTitle || titleTag

  return (
    <React.Fragment>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: keywords },
          { name: 'copyright', content: storeName },
          { name: 'author', content: storeName },
          { name: 'country', content: country },
          { name: 'language', content: locale },
          { name: 'currency', content: currency },
          { name: 'robots', content: metaTagRobots || META_ROBOTS },
          { httpEquiv: 'Content-Type', content: CONTENT_TYPE },
        ].filter(meta => !!meta.content)}
      />
      <Amp.AmpState id="__RUNTIME__" specName="amp-state">
        {runtime}
      </Amp.AmpState>
      {children}
    </React.Fragment>
  )
}

export default AmpProvider
