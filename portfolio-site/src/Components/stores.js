import { readable, writable } from "svelte/store";

export let dark_mode = new writable(false);

// Name, Img Source (Thumbnail), Link, Description
export let projects = new writable([
  [
    "Twooter",
    "https://i.imgur.com/YfyMgpG.jpg",
    "https://www.youtube.com/watch?v=VyaNip2X38Q",
    "A proof-of-proficiency Twitter clone in React.js",
  ],
  [
    "Conscious Camper",
    "https://i.ytimg.com/vi/5gUVDYUiFUY/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB2NSjFO9LEOGYx-YKsvrInNL0LJA",
    "https://www.youtube.com/watch?v=5gUVDYUiFUY",
    "A winning hackathon project utilizing Google Maps API",
  ],
  [
    "Crypto Clicker",
    "https://raw.githubusercontent.com/TrottersTots/crypto-clicker/dev/readme_assets/CryptoClicker_slide.jpg",
    "https://www.youtube.com/watch?v=6eza_Ij9gHg",
    "A fun game made for TuffyHacks 2022, also a winning project",
  ],
  [
    "TOIP",
    "https://raw.githubusercontent.com/NathanInbar/TOIPapp/master/toip_ss.png",
    "https://play.google.com/store/apps/details?id=com.weedawgiee.toip&hl=en_CA&gl=US",
    "A fully fledged mobile game available on Google Play Store",
  ],
  [
    "Matrix Rotation Visualizer",
    "https://raw.githubusercontent.com/NathanInbar/Matrix-Rotation-Visualizer/main/media/thumb.png",
    "https://www.youtube.com/watch?v=8twf27dy_40",
    "A visualization tool for matrix rotation (fun side project!)"
  ],
]);


//Image, description
export let art = new readable([
  ["https://i.imgur.com/GzL8z9W.jpeg", "Pu4Zde3" , "'Pelican', Ink on Paper, 2022", "portrait"],
  ["https://i.imgur.com/rXOgxv8.jpeg", "cT3veBq" , "'Puppy', Ink on Paper, 2022", "landscape"],
])

//Thumnail Link, Imgur Link
export let photos = new readable([
  ["https://i.imgur.com/1mPJSQY.jpeg", "https://imgur.com/gallery/7s3GSuz"],
  ["https://i.imgur.com/7QeHP4X.jpeg", "https://imgur.com/gallery/kLanVqu"],
  ["https://i.imgur.com/UriAd6L.jpeg", "https://imgur.com/gallery/OW3hbYZ"],
  ["https://i.imgur.com/WBFv5L4.jpeg", "https://imgur.com/gallery/gpRxyDq"],
  ["https://i.imgur.com/O9hh0TL.jpeg", "https://imgur.com/gallery/DArZD9k"],
  ["https://i.imgur.com/yXyzIJa.jpeg", "https://imgur.com/gallery/kchCKnw"],
  ["https://i.imgur.com/XpEyxMq.jpeg", "https://imgur.com/gallery/F2VHcGH"],
  ["https://i.imgur.com/NTDC35c.jpeg", "https://imgur.com/gallery/DQ4NXGj"],
]);
