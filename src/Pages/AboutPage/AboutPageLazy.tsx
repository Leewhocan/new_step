import { lazy } from "react";

export const AboutPageLazy = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        import("./AboutPage").then((module) => {
          //@ts-ignore
          resolve({ default: module.AboutPage });
        });
      }, 1500);
    }),
);
