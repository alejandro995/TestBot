import { Session } from "botbuilder";
import { UserFinderService } from "../../service/UserFinderService"
import strings  from "../../strings";
import * as builder from "botbuilder";

// https://docs.microsoft.com/en-us/bot-framework/nodejs/bot-builder-nodejs-dialog-overview#default-dialog
// Called whenever the dialog stack is empty and no other dialog triggered.

export default [
  (session: Session) => {
    session.beginDialog('greetings:whatup');
},
  (session: builder.Session) => {
    builder.Prompts.text(session, strings.responses.looking.message);
},
  (session: Session, results: any) => {
    let userFinderService = new UserFinderService();
    session.send(`${strings.responses.takealook.message} ${results.response}`);
    if(!userFinderService.findUser(results.response)){
      session.send(strings.responses.notFound.message);
      session.beginDialog('greetings:askName');
    }else{
      session.send(strings.responses.found.message);
    }
  }
];
