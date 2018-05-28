"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const app_1 = require("./app");
const port = normalizePort(process.env.PORT || "8081");
app_1.default.set("port", port);
const server = http_1.createServer(app_1.default);
server.listen(port, () => {
    console.log(`Bot listening to ${server.address}`);
});
function normalizePort(val) {
    const parsedPort = parseInt(val, 10);
    if (isNaN(parsedPort)) {
        return val;
    }
    if (parsedPort >= 0) {
        return parsedPort;
    }
    return false;
}
//# sourceMappingURL=server.js.map