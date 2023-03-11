import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

// const metaDecorator = require("../../data/metaDecorator.json");

const MetaDecorator = ({ title, description, imageUrl, imageAlt }) => (
  <Helmet>
    <title>{title}</title>

    <meta name="description" content={description} data-react-helmet="true" />


    <meta property="og:title" content={title} data-react-helmet="true" />
    <meta property="og:description" content={description} data-react-helmet="true" />
    <meta property="og:image" content={process.env.REACT_APP_API_URL + imageUrl} data-react-helmet="true" />
    <meta
      property="og:url"
      content={process.env.REACT_APP_FRONT_FILES + window.location.pathname + window.location.search}
      data-react-helmet="true"
    />

    <meta property="twitter:url" content={process.env.REACT_APP_FRONT_FILES + window.location.pathname + window.location.search} data-react-helmet="true" />
    <meta property="twitter:title" content={title} data-react-helmet="true" />
    <meta property="twitter:description" content={description} data-react-helmet="true" />


    <meta name="twitter:card" content="summary_large_image" data-react-helmet="true" />
    <meta name="twitter:image" content={imageAlt} data-react-helmet="true" />
    {/* <meta name="twitter:site" content={metaDecorator.twitterUsername} /> */}
  </Helmet>
);

MetaDecorator.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
};

export default MetaDecorator;