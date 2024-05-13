import ghpages from "gh-pages";

ghpages.publish(
  "dist",
  {
    branch: "master",
    repo: "https://github.com/longphanquangminh/test-ghpages-react-vite.git",
  },
  function (err) {
    console.log(err);
  },
);
