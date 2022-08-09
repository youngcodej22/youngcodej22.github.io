/*
import React, { FC, PropsWithChildren } from 'react'
import { useSiteMetadata } from '../../hooks/use-site-metadata'

type SEOProps = {
  title?: string
  description?: string
  pathname?: string
  url?: string
  image?: string
}

export const SEO: FC<PropsWithChildren<SEOProps>> = ({
  title,
  description,
  pathname,
  children,
}) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    author,
    siteUrl,
  } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    author,
    url: `${siteUrl}${pathname || ``}`,
    // image: `${siteUrl}${image}`,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta name="description" content={seo.description} />
      <meta name="author" content={seo.author} />
      <meta name="image" content={seo.image} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content={seo.title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:creator" content={seo.author} />
      <meta name="twitter:site" content={seo.author} />
      <meta name="twitter:image" content={seo.image} />
      <meta property="fb:app_id" content={seo.author} />
      <meta property="fb:admins" content={seo.author} />
      <link
        id="favicon-icon"
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
      />
      {children}
    </>
  )
}
*/
