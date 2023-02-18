module.exports = {
    apps: [{
        name: "LeaseasyBackend",
        script: "./dist/main.js",
        node_args: "",
        watch: false,
        env: {
            ENVIRONMENT: "prod",
        }
    }]
}