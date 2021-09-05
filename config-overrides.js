const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
    alias({
        '@components': 'src/components',
        '@ui': 'src/components/UI',
        '@constants': 'src/constants',
        '@containers': 'src/containers',
        '@hoc-helper': 'src/hoc-helper',
        '@services': 'src/services',
        '@utils': 'src/utils',
        '@styles': 'src/styles',
        '@routes': 'src/routes',
        '@static': 'src/static',
        '@hook': 'src/hook',
        '@store': 'src/store',
    })(config);
    return config;
};
