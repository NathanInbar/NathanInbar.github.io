import { readable, writable } from "svelte/store";

export let dark_mode = new writable(false);

// Name, Img Source (Thumbnail), Link, Description
export let projects = new writable([
  [
    "Twooter",
    "https://i.imgur.com/YfyMgpG.jpg",
    "https://www.youtube.com/watch?v=VyaNip2X38Q&t=12s",
    "A proof-of-proficiency Twitter clone in React.js",
  ],
  [
    "Conscious Camper",
    "https://i.ytimg.com/vi/5gUVDYUiFUY/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB2NSjFO9LEOGYx-YKsvrInNL0LJA",
    "https://www.youtube.com/watch?v=5gUVDYUiFUY&t=32s",
    "A winning hackathon project utilizing Google Maps API",
  ],
  [
    "Crypto Clicker",
    "https://raw.githubusercontent.com/TrottersTots/crypto-clicker/dev/readme_assets/CryptoClicker_slide.jpg",
    "https://www.youtube.com/watch?v=6eza_Ij9gHg&t=20s",
    "A fun game made for TuffyHacks 2022, also a winning project",
  ],
]);

//Thumnail Link, Imgur Link
export let photos = new readable([
  ["https://i.imgur.com/1mPJSQY.jpeg", "https://imgur.com/gallery/7s3GSuz"],
  ["https://i.imgur.com/7QeHP4X.jpeg", "https://imgur.com/gallery/kLanVqu"],
  ["https://i.imgur.com/UriAd6L.jpeg", "https://imgur.com/gallery/OW3hbYZ"],
  ["https://i.imgur.com/WBFv5L4.jpeg", "https://imgur.com/gallery/gpRxyDq"],
  ["https://i.imgur.com/O9hh0TL.jpeg", "https://imgur.com/gallery/DArZD9k"],
  ["https://i.imgur.com/yXyzIJa.jpeg", "https://imgur.com/gallery/kchCKnw"],
]);
