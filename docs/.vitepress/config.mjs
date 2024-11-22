import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Typescript 实战",
  description: "Typescript 实战",
  base: "/ts-vitepress/",
  themeConfig: {
    // logo: '',
    nav: [
      { text: "首页", link: "/" },
      { text: "基础", link: "/basic/" },
      {
        text: "进阶",
        items: [
          { text: "Item A", link: "/advance1/item-1" },
          { text: "Item B", link: "/advance1/item-2" },
          { text: "Item C", link: "/advance1/item-3" },
        ],
      },
      { text: "进阶2", link: "/advance2/" },
      { text: "进阶3", link: "/advance3/" },
      { text: "进阶4", link: "/advance4/" },
    ],

    sidebar: [
      {
        text: "基础",
        items: [
          { text: "实现Pick", link: "/basic" },
          { text: "实现readonly", link: "/basic/实现readonly" },
          { text: "元组转换为对象", link: "/basic/元组转换为对象" },
          // { text: '类', link: '/basic/class' },
          // { text: '泛型', link: '/basic/generic' },
          // { text: '模块', link: '/basic/module' },
          // { text: '装饰器', link: '/basic/decorator' },
        ],
      },
    ],
  },
});
