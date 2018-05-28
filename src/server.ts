import { createServer } from "http";
import app from "./app";


const port = normalizePort(process.env.PORT || "45321");

app.set("port", port);

//Create Server
const server = createServer(app as any);


/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port , () => {
    console.log(`Bot listening to ${server.listen.toString}`);
});


function normalizePort(val: string) {
    const parsedPort = parseInt(val, 10);
  
    if (isNaN(parsedPort)) {
      // named pipe
      return val;
    }
  
    if (parsedPort >= 0) {
      // port number
      return parsedPort;
    }
  
    return false;
  }



