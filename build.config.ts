import { exec } from "child_process";
import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: ["src/index.ts"],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
    esbuild: {
      minify: true,
    },
  },
  hooks: {
    "build:done": async () => {
      exec("cp ./src/index.css ./dist/index.css");
    },
  },
});
