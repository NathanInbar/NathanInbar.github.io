import { readable, writable } from "svelte/store";

export let dark_mode = new writable(false);

export let projects = new writable([]);

export let photos = new readable([
  ["https://i.imgur.com/1mPJSQY.jpeg", "https://imgur.com/gallery/7s3GSuz"],
  ["https://i.imgur.com/7QeHP4X.jpeg", "https://imgur.com/gallery/kLanVqu"],
  ["https://i.imgur.com/UriAd6L.jpeg", "https://imgur.com/gallery/OW3hbYZ"],
  ["https://i.imgur.com/WBFv5L4.jpeg", "https://imgur.com/gallery/gpRxyDq"],
  ["https://i.imgur.com/O9hh0TL.jpeg", "https://imgur.com/gallery/DArZD9k"],
  ["https://i.imgur.com/yXyzIJa.jpeg", "https://imgur.com/gallery/kchCKnw"],
]);
