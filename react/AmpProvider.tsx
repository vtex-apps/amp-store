import React from 'react'
import { Helmet } from 'react-helmet'
import { useRuntime } from 'vtex.render-runtime'

const CONTENT_TYPE = 'text/html; charset=utf-8'
const META_ROBOTS = 'index, follow'

const joinKeywords = (keywords: string[]) => keywords && keywords.join(', ')

const AmpProvider: React.FC = ({ children }) => {
  const {
    getSettings,
    culture: { country, locale, currency },
    route: { title: pageTitle, metaTags },
  } = useRuntime()

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
          { name: 'description', content: description || '' },
          { name: 'keywords', content: keywords || '' },
          { name: 'copyright', content: storeName || '' },
          { name: 'author', content: storeName || '' },
          { name: 'country', content: country || '' },
          { name: 'language', content: locale || '' },
          { name: 'currency', content: currency || '' },
          { name: 'robots', content: metaTagRobots || META_ROBOTS },
          { httpEquiv: 'Content-Type', content: CONTENT_TYPE },
        ]}
      />
      {children}
    </React.Fragment>
  )
}

export default AmpProvider
