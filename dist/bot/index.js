"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const botbuilder_1 = require("botbuilder");
const default_1 = require("./dialogs/default");
const conversationState = new botbuilder_1.MemoryBotStorage();
const connector = new botbuilder_1.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});
const bot = new botbuilder_1.UniversalBot(connector, default_1.default);
bot.set("storage", conversationState);
exports.default = connector;
//# sourceMappingURL=index.js.map