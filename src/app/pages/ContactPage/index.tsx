import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/Header';

export function ContactPage() {

  return (
    <>
      <Helmet>
        <title>Contact Us Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Header />
    </>
  );
}
