// import fs from 'fs';
// import path from 'path';
import type { NextConfig } from "next";
// import { Compiler } from 'webpack';

const nextConfig: NextConfig = {
    /* config options here */
    output: "export",
    // webpack: (config) => {
    //     config.plugins?.push({
    //         apply: (compiler: Compiler) => {
    //             compiler.hooks.afterEmit.tap('CopyCNAMEPlugin', () => {
    //                 const source = path.join(process.cwd(), 'public', 'CNAME');
    //                 const destination = path.join(process.cwd(), 'out', 'CNAME');
    //
    //                 console.log(`Checking if CNAME exists at: ${source}`);
    //                 if (fs.existsSync(source)) {
    //                     console.log('CNAME file found, copying to output directory...');
    //                     fs.copyFileSync(source, destination);
    //                 } else {
    //                     console.error('CNAME file not found!');
    //                 }
    //             });
    //         },
    //     });
    //
    //     return config;
    // },
};

export default nextConfig;
