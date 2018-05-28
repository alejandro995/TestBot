"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bot_1 = require("./bot");
const app = express();
app.post("/api/messages", bot_1.default.listen());
exports.default = app;
//# sourceMappingURL=app.js.map