const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
    entry: {
        app: "./src/app.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js"
    },
    devServer: {
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.pug"
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "bundle.css",
            chunkFilename: "[id].css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: ["pug-loader"]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === "development"
                        }
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "fast-sass-loader",
                        options: {
                            includePaths: ["src/scss/*"]
                        }
                    }
                ]
            }
        ]
    }
};
module.exports = (env, argv) => {
    if (argv.mode === "development") {
    }
    if (argv.mode === "production") {
    }
    return config;
};
