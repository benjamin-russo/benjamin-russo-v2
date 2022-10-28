import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import { facebookFormat } from '../../utils/imageFormatUrl';

const Seo = (props) => {
  const { description, image, specific, title, type = 'website' } = props;
  const { asPath } = useRouter();
  return (
    <Head>
      {specific ? <title>{`La Grange D'Angel | ${specific}`}</title> : <title>{`${title} | La Grange D'Angel`}</title>}
      <meta name='copyright' content='Angélique RUSSO' />
      <meta name='author' content='Angélique RUSSO' />
      {/* <meta name='robots' content='noindex, nofollow' /> */}
      <meta name='robots' content='index, follow' />
      <meta name='description' content={description} />

      {/* <!-- Open Graph meta pour Facebook --> */}
      <meta property='og:title' content={title} />
      <meta property='og:url' content={`https://lagrangedangel.fr${asPath}`} />
      {/* {image && <meta property='og:image' content={facebookFormat(image, 400)} />} */}
      <meta property='og:description' content={description} />
      <meta property='og:site_name' content="La Grange d'Angel" />
      <meta property='og:type' content={type} />
    </Head>
  );
};

Seo.propTypes = {
  description: PropTypes.string.isRequired,
  specific: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Seo;
