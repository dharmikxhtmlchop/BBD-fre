import React from 'react';
import { Helmet } from 'react-helmet';
import favicon from '../images/favicon/favicon.ico'

 
 
 
const Layout = ({ children, pageTitle,    }) => (
   
  <React.Fragment>
    <Helmet htmlAttributes={{ lang: 'fr' }} >
    <link rel="icon" href={favicon} />

      <title>{pageTitle}</title>
      <meta name="robots" content="noindex"/>
    </Helmet>
     
    <React.Fragment>
      {children}
    </React.Fragment>
   
  </React.Fragment>
);

export default Layout;