// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms

// Helper function to display JavaScript value on HTML page.
function showResponse(response) {
    var responseString = JSON.stringify(response, '', 2);
    document.getElementById('response').innerHTML += responseString;
}

// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    // This API key is intended for use only in this lesson.
    // See http://goo.gl/PdPA1 to get a key for your own applications.
    gapi.client.setApiKey('AIzaSyBWLFMCKJ6Uy5pVPe73pk-YGYfpAagp9x4');

    // search();
}

function search(q) {

    // var q = 'basketball';

    // Use the JavaScript client library to create a search.list() API call.
    var request = gapi.client.youtube.search.list({
        q: q,
        part: 'snippet',
        maxResults: 10,
        order: 'viewCount',
        safeSearch: 'moderate',
        type: 'video',
        videoEmbeddable: true
    });

    // Send the request to the API server,
    // and invoke onSearchRepsonse() with the response.
    request.execute(onSearchResponse);
}

// Called automatically with the response of the YouTube API request.
function onSearchResponse(response) {
    // showResponse(response);
    console.log(response);

    var videos = response.items;

    $.each( videos , function( index, video ) {

      var videoID = video.id.videoId;
      var iframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/'+ videoID +'" frameborder="0" allowfullscreen></iframe>';

      $('#videos-row').append(iframe);


    });


}