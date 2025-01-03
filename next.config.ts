import fs from 'fs';
import path from 'path';
import type { NextConfig } from "next";
// import { Compiler } from 'webpack';

const nextConfig: NextConfig = {
    /* config options here */
    output: "export",
    webpack: (config, { isServer }) => {
        if (!isServer) {
            const cnamePath = path.join(__dirname, 'public', 'CNAME');
            const outPath = path.join(__dirname, 'out', 'CNAME');

            if (fs.existsSync(cnamePath)) {
                fs.copyFileSync(cnamePath, outPath);
                console.log(`Copied CNAME file from ${cnamePath} to ${outPath}`);
            } else {
                console.warn(`CNAME file does not exist at ${cnamePath}`);
            }
        }
        return config;
    },
};

export default nextConfig;
