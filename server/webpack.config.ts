const path = require("path");

module.exports = {
    entry: {
        main: path.resolve(__dirname, "src/index.ts"),
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build"),
        libraryTarget: "commonjs",
    },
    target: "node",
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: "ts-loader",
                exclude: ["/node_modules/"],
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
    },
};
