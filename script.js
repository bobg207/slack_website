let rightVid = document.getElementById("right");
let leftVid = document.getElementById("left");

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player_right;
var player_left;
function onYouTubeIframeAPIReady() {
    player_right = new YT.Player('right', {
        videoId: 'hTaquqTGNn8',                                // add video ID here, inside quotes
        playerVars: {
        'playlist': 'hTaquqTGNn8',                             // add video ID here, inside quotes
        // 'listType': 'playlist',
        // 'list': 'PLPU7kGzQQRdusaJzu4vaMyKqUG2Neo49E',
        'enablejsapi': 1,
        'playsinline': 1,
        'loop': 1,
        'controls': 0,
        'showinfo': 0,
        },
        events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
        }
    });

    player_left = new YT.Player('left', {
        videoId: 'u6J20_Aem3Y',                             // add video ID here, inside quotes
        playerVars: {
        'playlist': 'u6J20_Aem3Y',                          // add video ID here, inside quotes
        // 'listType': 'playlist',
        // 'list': 'PLPU7kGzQQRdtl4Mhcr5ghAbhq5yVIePtR',
        'enablejsapi': 1,
        'playsinline': 1,
        'loop': 1,
        'controls': 0,
        'showinfo': 0,
        },
        events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}


// handle keyboard events ("l" and "r") 
// play/pause video and change color of border
window.addEventListener("keydown", function(event){
    if (event.defaultPrevented) {
        return;
    }

    if (event.code == "KeyL") {
        player_left.playVideo();
        player_right.pauseVideo();
        document.getElementById("right").style.border = '15px solid rgb(241, 89, 89)';
        document.getElementById("left").style.border = '15px solid greenyellow';
    } 
    else if (event.code == "KeyR") {
        player_right.playVideo();
        player_left.pauseVideo();
        document.getElementById("right").style.border = '15px solid greenyellow';
        document.getElementById("left").style.border = '15px solid rgb(241, 89, 89)';
    }

    event.preventDefault();
}, true)