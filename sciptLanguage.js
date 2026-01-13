const projectLanguage = {
  en: {
    AXERAS: {
      title: "Divine Descent",
      desc: "This is project 1",
      tools: "Unity, C#, FMOD",
      image: "divine.jpg",
    },
    VirtualEscape: {
      title: "Corpse Puzzle Platformer",
      desc: "A narrative-driven puzzle game inspired by Divine Comedy, using death as a core mechanic.",
      tools: "Unity, C#, Aseprite",
      image: "platformer.jpg",
    },
  },

  zh: {
    AXERAS: {
      title: "Divine Descent",
      desc: "开玩笑吗",
      tools: "Unity, C#, FMOD",
      image: "divine.jpg",
    },
    VirtualEscape: {
      title: "Corpse Puzzle Platformer",
      desc: "A narrative-driven puzzle game inspired by Divine Comedy, using death as a core mechanic.",
      tools: "Unity, C#, Aseprite",
      image: "platformer.jpg",
    },
  },

  jp: {
    AXERAS: {
      title: "Divine Descent",
      desc: "冗談っす",
      tools: "Unity, C#, FMOD",
      image: "divine.jpg",
    },
    VirtualEscape: {
      title: "Corpse Puzzle Platformer",
      desc: "A narrative-driven puzzle game inspired by Divine Comedy, using death as a core mechanic.",
      tools: "Unity, C#, Aseprite",
      image: "platformer.jpg",
    },
  },
};

const translations = {
  en: {
    info :"My Info",
    hero_title: "Hello, This is <span>Lee Wei Xuan</span>",
    hero_desc:
      "I am a game developer, and you’ve come to the right place if you’re looking for a strong and reliable one.",
    view_work: "View My Work",
    about_title: "About Me",
    about_desc: 
    "I'm Lee Wei Xuan, and this is my <b>personal website</b> hosted on GitHub. It’s <a href=\"https://github.com/AlwaysBeHappy0420/AlwaysBeHappy_LeeWeiXuan\" target=\"_blank\">open source</a>, so feel free to use the template.<br>"
    +"Holding <a href=\"https://study.utar.edu.my/game-development.php\" target=\"_blank\">Bachelor of Science(Honours) Game Development</a><b>(CPGA 3.2 out of 4)</b> from Universiti Tunku Abdul Rahman in Selangor, Malaysia.<br><br>"
    +"<h3>Working Experiences:</h3><br>"
    +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
    +"- <i>Worked in industry as an intern from June2025 to Oct2025</i>"
    + "<br><br>"
    
    +"<h3>These describe me well:</h3> "
    +"<b><h3>Skillsets:</h3></b><br>"
    +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
    +"・I love <b>Unity</b>, experienced in 2D/3D C# Coding, including <b>Shader Programming, Profiling, Debugging, Optimization, Networking</b>.<br>"
    +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
    +"・I love <b>Unreal</b> as well, not that much compared to Unity, but have experiences with <b>Blueprint</b> & <b>C/C++</b>.<br>"
    +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
    +"・I <b>make websites</b>. Not very detailed, but enough to show what I want to show. Using languages like: <b>JavaScript, HTML, CSS, php, MySQL...</b><br>"
    +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
    +"・I love & hate <b>Dev Logging</b>. Don't get me wrong. I'm good at concluding things. It just takes me a lot of time.<br>"
    +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
    +"・<b>Communicating</b> is a skill. TBH, I'm not good at this because of most of the time I would prefer solve it by myself first, and in the end I can solve it by myself.<br>"
    +"<br>"

    +"&nbsp;&nbsp;&nbsp;&nbsp;"
    +"<b><h3>Mindsets:</h3></b><br>"
    +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
    +"・I do <b>enjoy the process of developing a game</b>, since it always gives me a sense \"Someone is actually using/playing what I have done\", and I enjoy it so much.<br>"
    +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
    +"・A hot take from me: &nbsp;&nbsp;<b><i>If one is describable, one is scriptable.</i></b><br>"
    +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
    +"・I am <b>curious in new things</b> which leads me to know more about the world.<br>"
    +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
    +"・I would <b>like to know \"why\" behind every question</b> and task which leads me to have high understanding of the item.<br>"
    +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
    +"・I can <b>work well under pressure</b>, and I'm <b>concious of time.</b><br>"
    ,
    projects_title: "Projects",
    project1_title: "AXERAS",
    project1_desc: "Project participated during internship",
    project2_title: "Virtual Escape",
    project2_desc: "Final Year Project for UTAR 2025",
    contact_title: "Contact",
  },

  zh: {
    info:"个人资料",
    hero_title: "这里是 <span>李维旋</span> 的个人网站",
    hero_desc:
      "我是一名游戏开发者，如果你正在寻找一位有充足实力、值得信赖的游戏开发人员，这里是正确的选择。",
    view_work: "查看我的作品",
    about_title: "关于我",
    about_desc:
      "我是一名热爱创造独特且有趣体验的开发者，专注于 Unity、游戏设计与网页开发。",
    projects_title: "项目",
    project1_title: "AXERAS",
    project1_desc: "实习时期参与的项目",
    project2_title: "Virtual Escape",
    project2_desc: "毕业前所制作的游戏",
    contact_title: "联系我",
  },

  jp: {
    info:"個人情報",
    hero_title: "<span>リ イセン</span> の個人サイトです",
    hero_desc:
      "優秀で信頼できるゲーム開発者をお探しでしたら、ここはまさにうってつけの場所です。",
    view_work: "作品を見る",
    about_title: "自己紹介",
    about_desc:
      "私はユニークで魅力的な体験を作ることが好きな開発者です。Unity、ゲームデザイン、Web開発を専門としています。",
    projects_title: "プロジェクト",
    project1_title: "アクスラス（AXERAS）",
    project1_desc: "インターンシップ期間中に開発に参加したプロジェクト",
    project2_title: "Virtual Escape（ヴァーチャル・エスケープ）",
    project2_desc: "大学卒業前に制作したゲーム",
    contact_title: "連絡先",
  },
};
