var posts=["2023/12/13/2023.12.13/","2023/12/03/2023年生日/","2023/12/10/Google账号归属地/","2023/10/28/[MC]LostCivilization_Wilds/","2023/12/31/[年终总结]2023/","2023/10/25/hello-world/","2023/10/30/如何迅速备战体育合格测试/","2023/12/02/寻找代肝教程/","2023/10/25/搭建Hexo博客教程（Windows）/","2023/10/25/月饼评测与推荐/","2023/12/15/[新机计划]2023/","2023/10/26/牙齿护理指南/","2023/12/09/给你的锐捷X60Pro路由器装一个ADGuardHome/","2023/12/20/针灸大成学习笔记3/","2023/12/20/针灸大成学习笔记2/","2023/12/06/针灸大成学习笔记/","2023/06/01/anzhiyu主题标签/","2023/12/10/如何防止Twitter账号被封/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };