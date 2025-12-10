import path from "path";
import HTMLWebpackplugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export const buildPlugins = ({
  paths,
}: BuildOptions): webpack.WebpackPluginInstance[] => {
  return [
    new HTMLWebpackplugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
  ];
};
