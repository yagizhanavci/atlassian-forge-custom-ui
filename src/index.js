import Resolver from "@forge/resolver";
import fetch from "node-fetch";

const resolver = new Resolver();

const fetchChangelog = async (issueId) => {
  try {
    const responseJson = await fetch(
      `https://yagizhanavci.atlassian.net/rest/api/3/issue/${issueId}/changelog`,
      {
        method: "GET",
        headers: {
          Authorization: `Basic ${Buffer.from(
            "ygzhn14@gmail.com:s2yKSsOSVChAWmiKHP9BF781",
          ).toString("base64")}`,
          Accept: "application/json",
        },
      },
    );
    const response = await responseJson.json();
    return response.values;
  } catch (err) {
    console.log("fetchChangelog error", err);
  }
};

resolver.define("get-all", async ({ context }) => {
  try {
    return await fetchChangelog(context.extension.issue.id);
  } catch (err) {
    console.log("get-all error", err);
    return [];
  }
});

export const handler = resolver.getDefinitions();
