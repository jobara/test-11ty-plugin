import fluidPlugin from "eleventy-plugin-fluid";
import { EleventyI18nPlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
    eleventyConfig.addPlugin(fluidPlugin);

    eleventyConfig.addPlugin(EleventyI18nPlugin, {
        defaultLanguage: "en"
    });

    return {
        htmlTemplateEngine: "njk"
    };
};
