module.exports = {
  "title": "天龙巴布的博客",
  "description": "不积跬步无以至千里",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          // {
          //   "text": "NPM",
          //   "link": "https://www.npmjs.com/~reco_luan",
          //   "icon": "reco-npm"
          // },
          {
            "text": "GitHub",
            "link": "https://github.com/pugbabu",
            "icon": "reco-github"
          },
          // {
          //   "text": "简书",
          //   "link": "https://www.jianshu.com/u/cd674a19515e",
          //   "icon": "reco-jianshu"
          // },
          // {
          //   "text": "CSDN",
          //   "link": "https://blog.csdn.net/recoluan",
          //   "icon": "reco-csdn"
          // },
          // {
          //   "text": "博客圆",
          //   "link": "https://www.cnblogs.com/luanhewei/",
          //   "icon": "reco-bokeyuan"
          // },
          // {
          //   "text": "WeChat",
          //   "link": "https://mp.weixin.qq.com/s/mXFqeUTegdvPliXknAAG_A",
          //   "icon": "reco-wechat"
          // }
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "Vue.js",
        "desc": "渐进式JavaScript框架",
        "email": "243931551@qq.com",
        "link": "https://cn.vuejs.org/"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "Last Updated",
    "author": "pugbabu",
    "authorAvatar": "/avatar.png",
    "record": "天龙巴布",
    "startYear": "2017"
  },
  "markdown": {
    "lineNumbers": true
  },
  "base": "/vuepress-blog/"
}