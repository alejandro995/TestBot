import { Library} from "botbuilder";
import * as builder from "botbuilder";
import strings from "../../strings";

const lib = new Library("greetings");

lib.dialog("whatup", [
    session => {
        session.send(strings.greetings.hi.message);
        builder.Prompts.text(session, strings.greetings.name.message);
    },    
(session, results) => {
    session.endDialog(`Nice to meet you ${results.response}! , I am here to tell you anything about anyone! Just Ask!`);
}
]);

lib.dialog("askName", 
[
     
  (session : builder.Session) => {
      builder.Prompts.text(session, "Who are you looking for?");
},
session => {
    session.endDialog(strings.greetings.whatup.message);
}
]);

export default lib;
