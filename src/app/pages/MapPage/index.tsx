import * as React from 'react';
import { Helmet } from 'react-helmet-async';

export function MapPage() {

  return (
    <>
      <Helmet>
        <title>Map Page</title>
        <meta name="description" content="Information about the animals geolocation on the map" />
      </Helmet>
    </>
  );
}
