// const decode = entity => {
//   const textarea = document.createElement("textarea");
//   textarea.innerHTML = entity;
//   return textarea.value;
// };
// const pickElement = (data, tag) => {
//   return data.querySelector(tag).innerHTML;
// };

// const pickElements = (data, tag) => {
//   return data.querySelectorAll(tag);
// };

// const pickByKeys = (dom, keys) =>
//   keys.reduce((acc, key) => {
//     acc[key] = pickElement(dom, key);
//     return acc;
//   }, {});

// const parseRSS = data => {
//   console.log(data);
//   const keys = ["title", "author", "link", "description"];
//   const feed = pickByKeys(data, keys);
//   feed.description = decode(feed.description);
//   const _items = data.querySelectorAll("item");
//   const items = [..._items].map(e => {
//     const keys = ["title", "author", "pubDate", "link", "description"];
//     const item = pickByKeys(e, keys);
//     item.description = decode(item.description);
//     const category = pickElements(e, "category");
//     const categories = [...category].map(c => {
//       return c.innerHTML;
//     });
//     item.feed = feed;
//     item.categories = categories;
//     item.type = "rss";
//     return item;
//   });
//   return items;
// };

// export default function getFeeds() {
//   let feeds = [];
//   feeds.push({ id: 1, url: "https://en3purj35bw5ewy.m.pipedream.net" });
//   // tumblr dashboard
//   feeds.push({id: 2, url: "https://enb00j2ayeiyi2y.m.pipedream.net" });
//   return fetchFeeds(feeds);
// }
export const fetchFeeds = feeds => {
  return feeds.map(feed => fetchFeed(feed.url));
};
export const fetchFeed = feed => {
  return fetch(feed).then(response => response.json());
};
