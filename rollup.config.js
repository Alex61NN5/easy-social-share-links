import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";

export default [
  {
    input: "src/index.ts",
    output: {
      name: "SocialShareLinks",
      file: pkg.main,
      format: "umd",
    },
    plugins: [
      typescript(),
      babel({
        presets: ["@babel/preset-typescript"],
        exclude: ["/**/node_modules/**"],
      }),
      resolve(),
      commonjs(),
      terser(),
    ],
  },
  {
    input: "src/index.ts",
    output: {
      name: "SocialShareLinks",
      file: "dist/easy-social-share-links.js",
      format: "umd",
    },
    plugins: [
      typescript(),
      babel({
        presets: ["@babel/preset-typescript"],
        exclude: ["/**/node_modules/**"],
      }),
      resolve(),
      commonjs(),
    ],
  },
  {
    input: "src/index.ts",
    output: {
      file: pkg.module,
      format: "es",
      sourceMap: true,
    },
    plugins: [
      typescript(),
      babel({
        presets: ["@babel/preset-typescript"],
        exclude: ["/**/node_modules/**"],
      }),
    ],
  },
];
