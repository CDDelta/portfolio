const Cache = require("@11ty/eleventy-cache-assets");

const devApiKey = require('../../secrets.json').devApiKey || process.env.DEV_API_KEY;

module.exports = async function () {
  console.log("Fetching recent DEV articles...");

  try {
    let articles = await Cache("https://dev.to/api/articles/me/published", {
      duration: "1d",
      type: "json",
      fetchOptions: {
        headers: {
          'api-key': devApiKey,
        },
      }
    });

    return {
      articles,
    }
  } catch (e) {
    console.log(`Failed getting DEV articles: ${e}`);

    return {
      articles: [],
    };
  }
};