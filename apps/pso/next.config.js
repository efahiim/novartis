/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/** @type {import('next').NextConfig} */
const config = require('./config/config.json');
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    styledComponents: true,
  },
  env: {
    CONTENTFUL_HOST: config.Contentful.CONTENTFUL_HOST,
    CONTENTFUL_SPACE_ID: config.Contentful.main.SpaceID,
    CONTENTFUL_ACCESS_TOKEN: config.Contentful.main.CONTENTFUL_ACCESS_TOKEN
  },
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    config.module.rules.push(
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      }
    );

    config.module.rules.push(
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, '../../components'),
        loader: 'ts-loader',
      }
    );

    return config;
  },
};

module.exports = nextConfig;
