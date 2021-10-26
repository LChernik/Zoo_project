import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Gallery } from '../../components/AnimalGallery/AnimalGallery';
import { Welcome } from '../../components/Welcome/Welcome';
 
export function HomePage() {
  const { i18n } = useTranslation();

  function changeLanguage(e) {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Info about the online zoo" />
      </Helmet>
      <Welcome />
      <Gallery />
      <button onClick={changeLanguage} value='ru'>langRu</button>
      <button onClick={changeLanguage} value='en'>langEn</button>
    </>
  );
}
