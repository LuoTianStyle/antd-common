const {
    override,
    fixBabelImports,
    addLessLoader,
    addWebpackPlugin,
    addWebpackAlias,
} = require('customize-cra');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const path = require('path');
const resolve = (dir) => path.join(__dirname, '.', dir);
module.exports = override(
    addWebpackAlias({
        '@': path.resolve(__dirname, 'src'),
    }),
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#f1892d' },
    }),
    addWebpackPlugin(new AntdDayjsWebpackPlugin())
);
