document.addEventListener("google-signin-success", function(e) {
  // Access the GAPI instance passed back from authorization
  var gapi = e.detail.gapi;
  gapi.client.load('drive','v2', function() {
    var request = gapi.client.request({
        'path': '/drive/v2/files',
        'method': 'GET',
        'params': {'maxResults': '1'},
        'q': '#securitycamerasfolder'
        });      
    request.execute(function(resp) {
      console.log(resp.items[0].description);
      console.log(resp.items[0].title);
      console.log(resp.items[0].id);
      console.log(resp.items[0].mimeType);
      
      var request2 = gapi.client.request({
        'path': '/drive/v2/files',
        'method': 'GET',
        'params': {'maxResults': '100'}
        });      
      request2.execute(function(resp) {
        console.log(resp);  
      });     
    });
  });
});

document.addEventListener("google-signed-out", function() {
});

document.addEventListener("google-signout-attempted", function() {
});