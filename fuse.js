const fsbx = require("fuse-box");
const FuseBox = fsbx.FuseBox;

const fuseBox = FuseBox.init({
    homeDir: "src",
    outFile: "dist/bundle.js",
    shim: {
        jquery: {
            exports: "$",
            source: "node_modules/jquery/dist/jquery.min.js"
        }
    },
    plugins: [
        [/node_modules.*\.css$/,
            fsbx.CSSResourcePlugin({ inline: true }),
            fsbx.CSSPlugin()
        ]
    ]
});

fuseBox.devServer(">index.ts", {
    port: 7775
});