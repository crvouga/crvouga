import content from "../../content/content.json";
import { githubAPI } from "../services/github";
import { urlToImagePath, writeScreenshot } from "../services/screenshot";

const generateScreenshot = async ({
  ownerName,
  repositoryName,
}: {
  ownerName: string;
  repositoryName: string;
}) => {
  const response = await githubAPI.repos.get({
    owner: ownerName,
    repo: repositoryName,
  });

  const liveSiteURL = response.data.homepage || "";

  await writeScreenshot({
    url: liveSiteURL,
    timeout: 10000,
    path: urlToImagePath(liveSiteURL),
  });
};

const generateProjectScreenshots = async () => {
  await Promise.all(content.projects.map(generateScreenshot));
};

generateProjectScreenshots();