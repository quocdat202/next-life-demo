// next.config.mjs
import path from 'path';
import { fileURLToPath } from 'url';
import withAntdLess from 'next-plugin-antd-less';

/** @type {import('next').NextConfig} */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = withAntdLess({
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/styles')],
    },
    lessVarsFilePath: './src/styles/variables.less',
    lessVarsFilePathAppendToEndOfContent: false,
    cssLoaderOptions: {},
    webpack: (config, { isServer }) => {
        config.resolve.alias['@styles'] = path.join(__dirname, 'src/styles');
        return config;
    },
});

export default nextConfig;
