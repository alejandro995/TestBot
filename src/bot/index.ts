import { ChatConnector, UniversalBot, MemoryBotStorage } from "botbuilder";
import defaultDialog from "./dialogs/default";
import greetings from "./dialogs/greetings";

const conversationState = new MemoryBotStorage();

//Create chat connector for communicating
const connector = new ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
  });

const bot = new UniversalBot(connector, defaultDialog);
bot.set("storage", conversationState);
bot.library(greetings.clone());

export default connector;