import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Gallery } from '../../components/AnimalGallery/AnimalGallery';
import { Welcome } from '../../components/Welcome/Welcome';
import { homeObjOne } from 'app/components/Welcome/Data';
 
export function HomePage() {
  const { i18n } = useTranslation();

  function changeLanguage(e) {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Welcome {...homeObjOne}/>
      <Gallery />
      <button onClick={changeLanguage} value='ru'>langRu</button>
      <button onClick={changeLanguage} value='en'>langEn</button>
    </>
  );
}
