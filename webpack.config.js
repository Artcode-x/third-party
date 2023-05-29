const path = require('path') // импорт обьекта PATH из NODE_JS
const HtmlWebpackPlugin = require('html-webpack-plugin') // импортируем плагин из установленного пакета (npm i html-webpack-plugin -D)
const CopyPlugin = require('copy-webpack-plugin') // обращаемся к нужному пакету через ф-ию require.
//До импорта - npm i copy-webpack-plugin --save-dev , затем испортируем нужный класс из необходимой зависимости. Далее инициализируем 26 стр-ка (new CopyPlagin)
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'development' // NODE_ENV - переменная окружения - для задания конфигурации приложения. Чтобы можно было сконфигрировать не исправляя исходный код.

module.exports = {
    entry: './general.js', // входная точка файл general.js
    output: {
        // точка выхода - дир-ия, в которую будет складываться весь собранный код.
        path: path.resolve(__dirname, 'dist'), // с помощью path - указываем что нужно создать папку dist в корне проекта. и весь код положить в нее.
        // итог:
        // webpack получает точку входа нах-ся в general.js, затем анализирует операторы - import или require и создает граф зависимостей.
        // Затем webpack начинает собирать bundle, преобразовывая код с помощью соответствующих лоадеров. Он собирает bundle, и помещает его в папку dist.
        filename: 'bundle.js', // указываем как будет называться финальный собранный js код.
        clean: true, // Указывает вебпаку что прежде чем сгенерить новый код, нужно почистить предыдущий собранный код. Это нужно чтобы избежать коллизий и избежания кэширования ф-ов.
    },
    mode: isProduction ? 'production' : 'development', // 'development', // production    //Переключатель сред. Переключение между режимами сборки кода. //Минификация и жесткая оптимизация кода - становится не читаемым для человека в production. (например весь код в index.html сжимет в одну строку) в dev данная оптимизация не применяется
    module: {
        rules: [
            // все лоадеры находятся в ключе "rules"
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    'css-loader',
                ],
            },
            // { test: /\.css$/, use: ['style-loader', 'css-loader'] }, // Каждый лоадер - это обьект. Состоит из 2 частей: 1. Тип обрабатываемых ф-ов. 2. тот лоадер который мы хотим применить к этому типу ф-ов. //test - регулярное выр-ие которое позволяет найти нужный нам файл.  В данном случае мы будем искать css код. А в ключе "use" используем название лоадера который хотим применить, к данному формату ф-ов. // с пом-ю ss-loader - можно импортировать css файлы прямо в js код. Чтобы они были включены в DOM (применялись к эл-ам DOM-a), не просто импортированы, но и помещены в тег style - для этого нужен style-loader. //// Из за того что для обработки css ф-ов используется 2 лоадера, зн-ие св-ва use будет массивом. /////// Важен порядок следования лоадеров. webpack будет применять их в обратном порядке.
            { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resourse' }, //  Добавляем лоадер для обработки изображений.
            { test: /\.(woff|woff2|eot|ttf|otf)$/i, type: 'asset/resource' }, // webpack v5 внутри сод-т внут-ий модуль asset/resourse - который позволяет импортировать раличные шрифты без доп настроек. Добавляем лоадер для импорта шрифтов.
        ],
    },
    plugins: [
        // настройка которая содержит в себе массив
        //  new CopyPlugin({
        //        patterns: [{ from: 'img', to: 'img' }], // Хотим сохранить все статичные ф-ы в папке static и потом в папке dist получим точно такую же папку - static с такими же ф-ми. И к ним не будут применены никакие изменения. Просто будут переложены.  Из корневой папки копировать в dist без измененей
        // }),
        new HtmlWebpackPlugin({
            // декларируем нужный для работы плагин
            template: './index.html', // указываем ссылку где лежит страница
        }),
        new MiniCssExtractPlugin(),
    ],
    optimization: {
        minimizer: ['...', new CssMinimizerPlugin()],
    },
    devtool: isProduction ? 'hidden-source-map' : 'source-map',
}
