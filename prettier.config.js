//  @ts-check

/** @type {import('prettier').Config} */
const config = {
  plugins: ["prettier-plugin-astro"],
  semi: true,
  tabWidth: 2,
  printWidth: 120,
  singleQuote: false,
  trailingComma: "es5",
  bracketSameLine: true,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};

export default config;
