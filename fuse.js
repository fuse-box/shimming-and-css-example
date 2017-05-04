const {FuseBox, HTMLPlugin, Sparky, WebIndexPlugin, CSSResourcePlugin, CSSPlugin} = require("fuse-box");

const fuse = FuseBox.init({
    homeDir: "src",
    output: "dist/$name.js",
    cache: true,
    plugins: [
        [/node_modules.*\.css$/,
            CSSResourcePlugin({inline: true}),
            CSSPlugin()
        ],
        WebIndexPlugin({title: "Welcome to FuseBox"})
    ]
});

fuse.dev({port: 7775});

fuse.bundle("app")
    .shim({
        jquery: {
            source: "node_modules/jquery/dist/jquery.js",
            exports: "$"
        }
    })
    .watch()
// this bundle will not contain HRM related code (as only the first one gets it)
// but we would want to HMR it
    .hmr()
    // enable sourcemaps for our package
    .sourceMaps(true)
    // bundle without deps (we have a vendor for that) + without the api
    .instructions("> index.ts");

fuse.run();