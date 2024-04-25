import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Lirhpocket",
  description: "Utils Library Basic Typescript",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Utils", link: "/arrs" },
    ],

    sidebar: [
      {
        text: "Utils",
        items: [
          { text: "数组相关", link: "/arrs" },
          { text: "剪贴板", link: "/clipboard" },
          { text: "颜色相关", link: "/color" },
          { text: "日期相关", link: "/date" },
          { text: "对象相关", link: "/object" },
          { text: "路径相关", link: "/path" },
          { text: "字符串相关", link: "/string" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/undercurre/lirhpocket.git" },
    ],
  },
});
