import snoowrap from "snoowrap";

const reddit_Fetch = new snoowrap({
  userAgent: "Lingayya",
  clientId: process.env.VUE_APP_CLIENT_ID,
  clientSecret: process.env.VUE_APP_CLIENT_SECRET,
  refreshToken: process.env.VUE_APP_REFRESH_TOKEN,
});

export default {
  reddit_Fetch,
};
