import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import postcss from "lume/plugins/postcss.ts";
import terser from "lume/plugins/terser.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import basePath from "lume/plugins/base_path.ts";
import slugifyUrls from "lume/plugins/slugify_urls.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";
import gpm from "https://deno.land/x/gpm@v0.4.1/mod.ts";
import postcssConvertUnits from "./js/vendor/postcss-convert-units/index.js"
// import postcssFontFormatKeywords from 'https://github.com/Katamo/postcss-convert-units/blob/main/mod.js'


const site = lume({
  location: new URL("https://example.com/"),
});

site
  .ignore("README.md")
  .copy("img")
  .use(
    postcss(
      {
        plugins: [
          postcssConvertUnits({
            units: [
              {
                from: 'sp',
                convert: val => `${val * 0.25}rem`
              }
            ],
          })
        ],
      }
    )
  )
  .use(terser())
  .use(date())
  .use(codeHighlight())
  .use(basePath())
  .use(slugifyUrls({ alphanumeric: false }))
  .use(resolveUrls())
  .addEventListener(
    "beforeBuild",
    () => gpm(["oom-components/searcher"], "js/vendor"),
  );

export default site;
