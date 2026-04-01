import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

export const buildResolvers = (options: BuildOptions): ResolveOptions => {
  return {
    extensions: [".tsx", ".ts", ".js"], // указаывает дляя каких файлов при импорте не нужно расширение
    preferAbsolute: true,
    modules: [options.paths.src, "node_modules"],
    alias: {},
    mainFiles: ["index"],
  };
};
