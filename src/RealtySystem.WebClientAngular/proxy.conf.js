module.exports = {
    "/api": {
        target:
            process.env["services__realtysystem-app__https__0"] ||
            process.env["services__realtysystem-app__http__0"] ||
            "http://localhost:3000",
        secure: process.env["NODE_ENV"] !== "development",
        pathRewrite: {
            "^/api": "",
        },
    },
};
