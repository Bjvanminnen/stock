export let config = {
  showResponse: true,
  attached: true
};

function prettyJSON(obj) {
  console.log(JSON.stringify(obj, null, 2));
}

export const wrap = () => {
  var protocols = ['http', 'https'];
  protocols.forEach(function (protocolString) {
    var protocol = require(protocolString);

    var orig = protocol.request;
    protocol.request = function (options, cb) {
      var request = orig(options, cb);
      console.log(request._headers.host + request.path);
      if (!config.attached) {
        return request;
      }

      // console.log('<Request - ' + protocolString + '>');
      // prettyJSON(options);
      // console.log('</Request>');
      //
      //
      request.on('response', function (response) {
        console.log(response.url);
      });
      //   console.log('<Response>');
      //   console.log('<headers>');
      //   prettyJSON(response.headers);
      //   console.log('</headers>');
      //
      //   response.on('data', function (chunk) {
      //     if (config.showResponse) {
      //       console.log(chunk.toString());
      //     }
      //   });
      //   response.on('end', function () {
      //     console.log('</Response>');
      //   });
      // });

      return request;
    };
  });
}

export const unwrap = () => {
  config.attach = false;
};
