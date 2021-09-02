import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/Header';

export function ZoosPage() {

  return (
    <>
      <Helmet>
        <title>Zoos Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Header />
    </>
  );
}
