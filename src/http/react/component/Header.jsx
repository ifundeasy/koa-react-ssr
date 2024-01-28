import React from 'react'

function Header(props) {
  return (
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="viewport-fit=cover, user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1"
      />
      <meta name="description" content="Make your own koa app" />
      <meta name="author" content="Afa <ifundeasy@gmail.com>" />
      <meta name="theme-color" content="#ffffff" />
      { /* Favicon; Generated from https://realfavicongenerator.net */}
      <link rel="apple-touch-icon" sizes="180x180" href="/asset/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/asset/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/asset/favicon-16x16.png" />
      { /*
        manifest.json provides metadata used when your web app is installed on a
        user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
      */ }
      <link crossOrigin="use-credentials" rel="manifest" href="/asset/site.webmanifest" />
      <link rel="mask-icon" href="/asset/safari-pinned-tab.svg" color="#5bbad5" />
      { /*
        Notice the use of  in the tags above.
        It will be replaced with the URL of the `public` folder during the build.
        Only files inside the `public` folder can be referenced from the HTML.

        Unlike "/favicon.ico" or "favicon.ico", "/favicon.ico" will
        work correctly both with client-side routing and a non-root public URL.
        Learn how to configure a non-root public URL by running `npm run build`.
      */ }
      <title>{ props?.locals?.title || 'React (client)' }</title>
    </head>
  )
}

export default Header
