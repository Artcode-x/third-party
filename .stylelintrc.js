// # extends:
// #     [
// #         'stylelint-config-standard',
// #         'stylelint-config-prettier',
// #         'stylelint-prettier/recommended',
// #     ]

module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-prettier',
        'stylelint-prettier/recommended',
    ],
    // Для проверки файла scss
    customSyntax: 'postcss-scss',
    plugins: ['stylelint-scss'],
}
