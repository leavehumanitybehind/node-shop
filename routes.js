const fs = require("fs");

function requestHandler(req, res) {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Create user</title> </head>");
    res.write(
      "<body><form action='/create-user' method='POST'><input type='text' name='username'/><button type='submit'>Send form</button> </form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Main Page</title> </head>");
    res.write(`<body><h1>Hello! What do you want to do here? </h1>
    <ul> 
    <li>User 1  </li>
    <li>User 2  </li>
    <li>User 3  </li>
    <li>User 4  </li>
    </ul>
    </body>`);
    res.write("</html>");
    res.end();
  }
  //console.log(req.url, req.method, req.headers);
  //process.exit()
  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      // we listen data event
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      console.log(message)
    });
    res.statusCode = 302;
    res.setHeader("Location", "/users");
    res.end();
  }
}

module.exports = requestHandler;
//exports.handler = requestHandler
