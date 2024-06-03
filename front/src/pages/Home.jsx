import React, { useContext } from 'react';

import { Hero } from '../components/Hero';
import Posts from '../components/Posts';

export const Home = () => {

  return (
    <>
     <Hero />
        <Posts />
    </>
  );
};
