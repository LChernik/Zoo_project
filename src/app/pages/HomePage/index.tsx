import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
// import { Header } from '../../components/Header';

export function HomePage() {
  const { i18n } = useTranslation();

  function changeLanguage(e) {
    i18n.changeLanguage(e.target.value);
  }

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      {/* <Header /> */}
      <button onClick={changeLanguage} value='ru'>langRu</button>
      <button onClick={changeLanguage} value='en'>langEn</button>
    </>
  );
}
