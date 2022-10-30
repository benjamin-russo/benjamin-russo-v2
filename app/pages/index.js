import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Hero from '../components/Hero/Hero';

const HomeContainer = styled.section``;

const Home = (props) => {
  return <Hero />;
};

Home.propTypes = {
  homepage: PropTypes.object.isRequired,
};

export default Home;

export const getStaticProps = async () => {
  // const homepage = await fetchEntries('homepage');
  // if (!homepage) {
  //   return {
  //     notFound: true,
  //     revalidate: 3600,
  //   };
  // }
  return {
    props: { homepage: 'tt' },
    revalidate: 3600,
  };
};
