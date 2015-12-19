const http = require("http");

function handleHTTPRequest(request, response) {
    //Process the url
    var requestParts = request.url.split("?");
    var requestURL = requestParts[0];
    var requestParameters = {};
    if (requestParts[1]) {
        requestParts[1].split("&").forEach(function(v) {
            var kvPair = v.split("=");
            requestParameters[kvPair[0]] = kvPair[1];
        });
    }

    switch (requestURL) {
        case "/poll":
            
            break;
        case "/push":
            break;
        default:
            break;
    }
    response.end(JSON.stringify(requestParameters));
    //response.end(requestURL);
}

var server = http.createServer(handleHTTPRequest);
server.listen(5678, function() {console.log("Listener started on port 5678")});