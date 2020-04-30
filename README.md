# What-game 🎮

What game is an API that given an id of a video of YouTube or id of a streamer from Twitch.tv can give back details about the YouTube video or the streamer online status.
It also gives the details about the game if gaming-related.

## How it works :eyeglasses:

What-game has two endpoints

```
/youtube
/twitch
```

feeding json as the body for the request to one endpoint with a
`key` of id

and as

`value` the id of a youtube video or twitch streamer id,

```
{
  "id":"{id of choice}"
}
```

What-game will search youtube or twitch API for some details needed and then scrape the webpage related to the `id` provided.

the output will look like these examples;

###### given

```
{
"id": "110690086"
}
```

###### twitch API

```
{
  "details": {
      "status": "online",
      "game": "VALORANT"
  },
  "name": "Myth"
}
```

###### given

```
{
"id":"guST_zQarU8"
}
```

###### youtube API

```
{
    "title": "CDNThe3rd vs DrDisrespect - The Ultimate Boomer Showdown! | Valorant Beta",
    "description": "NEVER FORGET!\n\n**TURN ON UPLOAD NOTIFICATIONS TO NEVER MISS A VIDEO!**\nCONSIDER SUBSCRIBING TO SHOW YOUR SUPPORT: http://bit.ly/CeezYTSub\n\nFollow Ceez on Twitch & watch the stream LIVE: https://Twitch.tv/CDNThe3rd\n You can SUBSCRIBE on Twitch for FREE with Amazon Prime!\n→ Link Your Account Here: http://twitch.amazon.com/prime\n→ This image may be helpful: http://i.imgur.com/NvVFM1B\n\nThe OFFICIAL CDNThe3rd Soundboard App (for Android)\n• https://goo.gl/XjDiKH\n\nJoin the Viewage Discord\n• https://discord.gg/cdnthe3rd\n\nFOLLOW CEEZ ON ALL PLATFORMS\n• https://twitter.com/CDNThe3rd\n• https://instagram.com/CDNThe3rd\n• https://Twitch.tv/CDNThe3rd\n\nVIEWAGE EDITING TEAM\n- https://twitter.com/KILLER_KELII\n- https://twitter.com/JammyLaffers\n- https://twitter.com/ZLawhead\n\nVIEWAGE THUMBNAIL ARTISTS\n- https://twitter.com/Ofblackheart\n- https://twitter.com/JesVillaArt\n- https://twitter.com/artistyf",
    "channelTitle": "CDNThe3rd",
    "categoryId": "20",
    "game": {
        "gameTitle": "Valorant",
        "gameLink": "https://www.youtube.com/channel/UCiMRGE8Sc6oxIGuu_JxFoHg"
    }
}
```

## How to run 🏇

to run the application on your machine you need:

1- Node js version 13.x or less `node js v 14.x is not yet supported`

2- YouTube API key. To get this, follow these instructions
https://developers.google.com/youtube/v3/getting-started

3- Twitch Client-ID. To get this, follow these instructions
https://dev.twitch.tv/docs/v5

once you have all the necessary, you can download or clone this repository to your machine and continue.

4- Inside your project folder, create a file called `.env` and copy the following lines.

```
PORT = {your port of choice the default is 3000}
API_KEY= {your youtube api key}
CLIENT_ID = {your twitch client id}
```

5- From your terminal, make sure to be located inside the project folder, run this command:

`npm i`

npm is prefered due to some issues with `yarn`.

6- Once the command finished its' execution, copy and run the following:

`node index`

7- done.

8- If you get some errors, don't hesitate to leave me a message and will help you out.

## What I learned 💡

During this project, I learned:

- YouTube and Twitch APIs and how they built their websites.
- Multiple ways to do http requests from Node js.
- Handle multiple asychronous functions

## What to improve 📖

- Create a UI for an easier way to visualize data.
- Find alternative to my solution due to the long response delay.
- Refactor the code.
- Write tests
- Normalize the response data in a better way.
- Modify the functions so that it can accept an array of IDs and output an array of objects for each ID.
- Better selectors for the scraper function
- Merge the 2 endpoints and manage the id type internally
- Create cli-tool
- When querying for twitch, puppeteer can be avoided 

## My Directory 🌳

<!-- DIRSTRUCTURE_START_MARKER -->
<pre>
what-game/
├─ README.md ......... 
├─ index.js .......... 
├─ package-lock.json . 
├─ package.json ...... 
├─ yarn.lock ......... 
├─ controllers/ ...... 
│  └─ controllers.js . 
├─ models/ ........... 
│  └─ models.js ...... 
├─ routers/ .......... 
│  └─ router.js ...... 
└─ utils/ .......... 
   └─ scraper.js .....  
</pre>
<!-- DIRSTRUCTURE_END_MARKER -->
