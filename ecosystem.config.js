module.exports = {
    apps: [{
        name: "LeaseasyBackend",
        script: "./dist/main.js",
        node_args: "",
        watch: false,
        env: {
            ENVIRONMENT: "prod",
            DATABASE_URL: "postgres://postgres:Z3vBnzalNJ02m3Hd@db.trahswbinhowuhrcwezf.supabase.co:6543/postgres?pgbouncer=true&connection_limit=1",
            SHADOW_DATABASE_URL: "postgres://postgres:Z3vBnzalNJ02m3Hd@db.trahswbinhowuhrcwezf.supabase.co:5432/postgres"
        }
    }]
}