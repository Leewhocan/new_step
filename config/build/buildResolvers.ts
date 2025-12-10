import { ResolveOptions } from "webpack";

export const buildResolvers = (): ResolveOptions => {
  return {
    extensions: [".tsx", ".ts", ".js"], // указаывает дляя каких файлов при импорте не нужно расширение
  };
};
