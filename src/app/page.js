import Hero from '@/components/homepage/Banner';
import FeaturedEbooks from '@/components/homepage/FeaturedEbooks';
import TopWriters from '@/components/homepage/TopWriter';
import React from 'react';

const HomePage = () => {
  return (
    <div>
            <Hero></Hero>
            <FeaturedEbooks></FeaturedEbooks>
            <TopWriters></TopWriters>
    </div>
  );
};

export default HomePage;