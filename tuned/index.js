

const clientId = "94eb431327a44cc5b776a487f8901e71";
const params = new URLSearchParams(window.location.search);
const code = params.get("code");
const range_list = document.querySelector("#range"); //html input that selects range for the api listening request
let pressed = 0;

if (code) { document.getElementById("login_button").innerText = "Generate";} //changes the login button to say generate if the user has already logged in
function remove_duplicates_safe(arr) { // function used when filtering urls to make sure that there are no duplicates while preserving order
        var seen = {};
        var ret_arr = [];
        for (var i = 0; i < arr.length; i++) {
            if (!(arr[i] in seen)) {
                ret_arr.push(arr[i]);
                seen[arr[i]] = true;
            }
        }
        return ret_arr;

    }
let Token;
    async function get_login() { // this is the function that is run when login is needed
        {
            if (!code) { // if no code label exists the redirect to auth page
                redirectToAuthCodeFlow(clientId);
                console.log("error");

            } else {
            }

            Token = await getAccessToken(clientId, code); // if login code does exist use it to login

            window.history.replaceState(null, '', window.location.pathname);

            const profile = await fetchProfile(Token);

            populateUI(profile);



        }
    }

    export async function redirectToAuthCodeFlow(clientId) {
        const verifier = generateCodeVerifier(128);
        const challenge = await generateCodeChallenge(verifier);

        localStorage.setItem("verifier", verifier);

        const params = new URLSearchParams();
        params.append("client_id", clientId);
        params.append("response_type", "code");
        params.append("redirect_uri", "https://superpotato9.com/tuned/");
        params.append("scope", "user-top-read");
        params.append("code_challenge_method", "S256");
        params.append("code_challenge", challenge);


        document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
    }

    function generateCodeVerifier(length) {
        let text = '';
        let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }

    async function generateCodeChallenge(codeVerifier) {
        const data = new TextEncoder().encode(codeVerifier);
        const digest = await window.crypto.subtle.digest('SHA-256', data);
        return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=+$/, '');
    }

    export async function getAccessToken(clientId, code) {
        const verifier = localStorage.getItem("verifier");

        const params = new URLSearchParams();
        params.append("client_id", clientId);
        params.append("grant_type", "authorization_code");
        params.append("code", code);
        params.append("redirect_uri", "https://superpotato9.com/tuned/");
        params.append("code_verifier", verifier);

        const result = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",

            headers: {"Content-Type": "application/x-www-form-urlencoded"},

            body: params

        });
console.log(params.values())

        const {access_token} = await result.json();
        return access_token;



    }

    async function fetchProfile(token) {
        var range = document.getElementById("range").value;
        const result = await fetch("https://api.spotify.com/v1/me/top/tracks?time_range=" + range +"&offset=0", {
            method: "GET", headers: {
                "Authorization": "Bearer " + token
            }

        });

        return await result.json();
    }

    function populateUI(profile) {
        let names = []
        let images = []
        let artist_names = []
        let artist_urls = []

        console.log(profile);
        for (let i = 0; i < profile["limit"]; i++) {

            names.push(profile["items"][i]["name"])
            images.push(profile["items"][i]["album"]["images"][0]["url"])
            artist_names.push(profile["items"][i]["album"]["artists"][0]["name"])
            artist_urls.push(profile["items"][i]["artists"][0]["external_urls"]["spotify"])

        }
        let new_artist_urls;
        let new_artist_names;
        if (remove_duplicates_safe(images).length >= 9) {
            images = remove_duplicates_safe(images)
            new_artist_urls = remove_duplicates_safe(artist_urls)
            new_artist_names = remove_duplicates_safe(artist_names)
        }

console.log(images)
        let credit_html = ''
        let credit_length = 0;
        credit_length = artist_names.length - new_artist_names.length;
        console.log(credit_length)
        for(let i = 0; i !== credit_length; i++){
            console.log(artist_names[i]);
            if(new_artist_names[i] != undefined){
           credit_html += ' <a href="' + new_artist_urls[i] + '">' + new_artist_names[i]+ '</a>, '
        }}
        document.getElementById("credit").innerHTML = 'credit:' + credit_html





        // const canvas = document.getElementById("canvas");
        // const ctx = canvas.getContext("2d");

        //
        var myCanvas = document.getElementById("canvas");
        let ctx = myCanvas.getContext('2d');
        myCanvas.width = 1080;
        myCanvas.height = 1080;


// Function to load images
        function loadImage(src, index) {
            return new Promise(function(resolve, reject) {
                var img = new Image();
                img.setAttribute('crossorigin', 'anonymous');
                img.onload = function() {
                    resolve({ img: img, index: index });
                };
                img.onerror = function() {
                    reject(new Error('Failed to load image'));
                };
                img.src = src;
            });
        }

// Array of image URLs
        var imageURLs = [
            images[0],
            images[1],
            images[2],
            images[7],
            images[3],
            images[4],
            images[5],
            images[6],
            images[8]
        ];

// Load all images asynchronously
        Promise.all(imageURLs.map(loadImage)).then(function(results) {
            results.forEach(function(result) {
                var img = result.img;
                var index = result.index;
                var x = (index % 3) * 360;
                var y = Math.floor(index / 3) * 360;
                ctx.drawImage(img, x, y, 360, 360);
            });


                //
                ctx.font = "bold 20px Arial";
            ctx.fillText("TUNED", 1000, 1070);
            // ctx.lineWidth = 3;
                ctx.strokeRect(0, 0, myCanvas.width, myCanvas.height);


            var frame = myCanvas.toDataURL("image/png", 0.8);
            document.getElementById("generated_image").src = frame;
        }).catch(function(error) {
            console.error(error);
        });




    }


document.getElementById("login_button").onclick=async ()=> {
    if(pressed ==  0){
    await get_login();
        document.getElementById("range-select").style.display = "block";
        document.getElementById("generated_image").style.display = "block";

        pressed = 1;
}

    if(pressed==1){

        let profile = await fetchProfile(Token);
        populateUI(profile);
        // profile = await fetchProfile(Token);
        // populateUI(profile);
    }
}

