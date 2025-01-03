import fs from 'fs';
import path from 'path';
import type { NextConfig } from "next";
import { Compiler } from 'webpack';

const nextConfig: NextConfig = {
    /* config options here */
    output: "export",
    webpack: (config) => {
        config.plugins?.push({
            apply: (compiler: Compiler) => {
                compiler.hooks.afterEmit.tap('CopyCNAMEPlugin', () => {
                    const source = path.join(process.cwd(), 'public', 'CNAME');
                    const destination = path.join(process.cwd(), 'out', 'CNAME');

                    if (fs.existsSync(source)) {
                        fs.copyFileSync(source, destination);
                        console.log('CNAME file copied to the out directory.');
                    }
                });
            },
        });

        return config;
    },
};

export default nextConfig;
