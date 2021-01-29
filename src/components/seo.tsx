import React from "react";
import path from "path";

export const SEO = ({ siteUrl }: { siteUrl: string }) => {
  const seo = {
    title: "Chris Vouga | Software Developer",
    description:
      "Hello, my name is Chis Vouga. I enjoy building things that live on the web.",
    image: path.join(siteUrl, "personal-log.png"),
    keywords: [
      "chris",
      "christopher",
      "vouga",
      "chrisvouga",
      "christophervouga",
      "developer",
      "web",
    ],
    author: "Chris Vouga",
  };

  return (
    <React.Fragment>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="icon" type="image/png" href="/personal-logo.png" />

      <title>{seo.title}</title>

      <meta name="image" content={seo.image} />

      <meta name="description" content={seo.description} />

      <meta name="keywords" content={seo.keywords.join(", ")} />

      <meta name="author" content={seo.author} />

      <meta name="og:title" property="og:title" content={seo.title} />

      <meta
        name="og:description"
        property="og:description"
        content={seo.description}
      />

      <meta property="og:url" content={siteUrl} />

      <meta property="og:type" content="website" />

      <meta property="og:image" content={seo.image} />
    </React.Fragment>
  );
};
