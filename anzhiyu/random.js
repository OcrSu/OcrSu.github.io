var posts=["2023/12/13/2023.12.13/","2023/12/03/2023年生日/","2024/05/10/GMK-M6/","2023/12/10/Google账号归属地/","2023/10/25/搭建Hexo博客教程（Windows）/","2023/10/25/hello-world/","2024/02/17/文章迁移公告/","2024/02/24/梦灯花/","2024/10/17/泠鸢壁纸/","2023/12/10/如何防止Twitter账号被封/","2024/10/19/国-陈祥榕/","2024/10/18/肺痨治疗经验/","2024/05/17/海沙风云-周边/","2023/06/01/anzhiyu主题标签/","2023/12/09/给你的锐捷X60Pro路由器装一个ADGuardHome/","2024/03/13/肺痨治疗记录（肺结核）/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };