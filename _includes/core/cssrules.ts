type transformValue = () => string;

const mapper = (
  obj:Record<string,transformValue>,
  transform: (key: string, value:transformValue)=>[string,transformValue ]
) => {
  return Object.fromEntries(
    Object.entries(obj)
    .map(([key, value]) => {
      return [...transform(key, value)]
    })
  );
}


// RULE DEFINITIONS
const spacing = {
  '--sp': (val: number) => `${val * 0.25}rem`,
}

const dimmensions = {
  '--xxs': () => `240`,
  '--xs': () => `360`,
  '--sm': () => `480`,
  '--md': () => `768`,
  '--lg': () => `1024`,
  '--xl': () => `1280`,
  '--xxl': () => `1440`,
  '--xxxl': () => `1920`,
}

const breakpointsFrom = mapper(
  dimmensions,
  (key, value) => ([
    `--bp-from${key}`,
    () => `(min-width: ${value()}px)`
  ])
);

const breakpointsTo = mapper(
  dimmensions,
  (key, value) => ([
    `--bp-to${key}`,
    () => `(max-width: ${parseInt(value())-1}px)`
  ])
);

const breakpointsOnly = mapper(
  dimmensions,
  (key, value) => ([
    `--bp-only${key}`,
    () => `(min-width: ${value()}px) and (max-width: ${parseInt(value())-1}px)`
  ])
);


const cssRules = {
  ...breakpointsFrom,
  ...breakpointsTo,
  ...breakpointsOnly,
  ...dimmensions,
  ...spacing,
}

console.log(cssRules)

export default cssRules;