import React, { useEffect } from 'react';

const Gtm_components = () => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'pageview',
      pagePath: window.location.pathname,
      // Add any additional data you want to track
    });
  }, []);

  // Your component code here

  return (
    <div></div>
  );
};

export default Gtm_components;


