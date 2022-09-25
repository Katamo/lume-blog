import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import postcss from "lume/plugins/postcss.ts";
import terser from "lume/plugins/terser.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import basePath from "lume/plugins/base_path.ts";
import slugifyUrls from "lume/plugins/slugify_urls.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";
import postcssConvertUnits from "convert-units/dist/mod.ts?s=default";

import cssRules from './_includes/core/cssrules.ts';

const site = lume({
  location: new URL("https://katamo.github.io/public-blog/"),
});

site
  .ignore("README.md")
  .copy("img")
  .use(
    postcss({
      plugins: [
        postcssConvertUnits({
          rules: {
            ...cssRules,
          }
        })
      ],
      keepDefaultPlugins: true,
    })
  )
  .use(terser())
  .use(date())
  .use(codeHighlight())
  .use(basePath())
  .use(slugifyUrls({ alphanumeric: false }))
  .use(resolveUrls())
  // .addEventListener(
  //   "beforeBuild",
  //   () => gpm(["oom-components/searcher"], "js/vendor"),
  // );

export default site;
