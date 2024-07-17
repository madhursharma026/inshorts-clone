export const categories = [
  {
    code: "",
    pic: "https://img.icons8.com/fluent/96/000000/news.png",
    name: "My Feed",
  },
  {
    code: "",
    pic: "https://img.icons8.com/fluent/96/000000/hard-working.png",
    name: "All News",
  },
  {
    code: "",
    pic: "https://png.pngtree.com/png-vector/20230222/ourmid/pngtree-shiny-yellow-star-icon-clipart-png-image_6613580.png",
    name: "Top Stories",
  },
  {
    pic: "https://cdn2.iconfinder.com/data/icons/vivid/48/flame-512.png",
    name: "Trending",
  },
  {
    pic: "https://freeiconshop.com/wp-content/uploads/edd/bookmark-flat.png",
    name: "Bookmarks",
  },
  {
    pic: "https://cdn-icons-png.flaticon.com/512/9135/9135970.png",
    name: "Unread",
  },
];

export const sources = [
  {
    notification:
      "While current vaccines are effective at preventing severe disease, the next phase of vaccine development will need to focus on triggering long-lived antibody response.",
    pic: "https://cdn.thewire.in/wp-content/uploads/2022/04/21164421/2022-04-13T080134Z_1_LYNXNPEI3C09C_RTROPTP_4_HEALTH-CORONAVIRUS-TAIWAN-scaled.jpg",
  },
  {
    notification:
      "While current vaccines are effective at preventing severe disease, the next phase of vaccine development will need to focus on triggering long-lived antibody response.",
    pic: "https://cdn.thewire.in/wp-content/uploads/2022/04/21164421/2022-04-13T080134Z_1_LYNXNPEI3C09C_RTROPTP_4_HEALTH-CORONAVIRUS-TAIWAN-scaled.jpg",
  },
  {
    notification:
      "While current vaccines are effective at preventing severe disease, the next phase of vaccine development will need to focus on triggering long-lived antibody response.",
    pic: "https://cdn.thewire.in/wp-content/uploads/2022/04/21164421/2022-04-13T080134Z_1_LYNXNPEI3C09C_RTROPTP_4_HEALTH-CORONAVIRUS-TAIWAN-scaled.jpg",
  },
  {
    notification:
      "While current vaccines are effective at preventing severe disease, the next phase of vaccine development will need to focus on triggering long-lived antibody response.",
    pic: "https://cdn.thewire.in/wp-content/uploads/2022/04/21164421/2022-04-13T080134Z_1_LYNXNPEI3C09C_RTROPTP_4_HEALTH-CORONAVIRUS-TAIWAN-scaled.jpg",
  },
  {
    notification:
      "While current vaccines are effective at preventing severe disease, the next phase of vaccine development will need to focus on triggering long-lived antibody response.",
    pic: "https://cdn.thewire.in/wp-content/uploads/2022/04/21164421/2022-04-13T080134Z_1_LYNXNPEI3C09C_RTROPTP_4_HEALTH-CORONAVIRUS-TAIWAN-scaled.jpg",
  },
  {
    notification:
      "While current vaccines are effective at preventing severe disease, the next phase of vaccine development will need to focus on triggering long-lived antibody response.",
    pic: "https://cdn.thewire.in/wp-content/uploads/2022/04/21164421/2022-04-13T080134Z_1_LYNXNPEI3C09C_RTROPTP_4_HEALTH-CORONAVIRUS-TAIWAN-scaled.jpg",
  },
  {
    notification:
      "While current vaccines are effective at preventing severe disease, the next phase of vaccine development will need to focus on triggering long-lived antibody response.",
    pic: "https://cdn.thewire.in/wp-content/uploads/2022/04/21164421/2022-04-13T080134Z_1_LYNXNPEI3C09C_RTROPTP_4_HEALTH-CORONAVIRUS-TAIWAN-scaled.jpg",
  },
  {
    notification:
      "While current vaccines are effective at preventing severe disease, the next phase of vaccine development will need to focus on triggering long-lived antibody response.",
    pic: "https://cdn.thewire.in/wp-content/uploads/2022/04/21164421/2022-04-13T080134Z_1_LYNXNPEI3C09C_RTROPTP_4_HEALTH-CORONAVIRUS-TAIWAN-scaled.jpg",
  },
];

export const BASE_URL = "https://saurav.tech/NewsAPI/";

export const getNewsAPI = (category, country = "in") => {
  return `${BASE_URL}/top-headlines/category/${category}/${country}.json`;
};

export const getSourceAPI = (source) => {
  return `${BASE_URL}/everything/${source}.json`;
};
