// import fs from 'fs';
// import path from 'path';
import type { NextConfig } from "next";
// import { Compiler } from 'webpack';

const nextConfig: NextConfig = {
    output: "export",
};
module.exports = {
  images: {
    domains: ['github.com'],
  },
};

export default nextConfig;
