var posts=["2023/12/13/2023.12.13/","2024/05/10/GMK-M6/","2023/12/03/2023年生日/","2023/12/31/[年终总结]2023/","2024/03/08/About AI/","2023/12/10/Google账号归属地/","2023/10/25/hello-world/","2023/10/30/如何迅速备战体育合格测试/","2023/10/25/搭建Hexo博客教程（Windows）/","2023/12/15/[新机计划]2023/","2023/12/10/如何防止Twitter账号被封/","2024/02/24/梦灯花/","2024/02/17/文章迁移公告/","2024/03/30/梦灯花2/","2024/05/17/海沙风云-周边/","2024/03/13/肺痨治疗记录（肺结核）/","2023/12/09/给你的锐捷X60Pro路由器装一个ADGuardHome/","2023/06/01/anzhiyu主题标签/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };