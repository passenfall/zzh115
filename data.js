const BlogData = {
  defaultData: {
    profile: {
      name: 'Passen ZZH',
      nameEn: 'Passen ZZH',
      avatar: '',
      tagline: '开发者 | 写作者 | 探索者',
      taglineEn: 'Developer | Writer | Explorer',
      bio: '你好！我是一名对 Web 技术和 AI 充满热情的开发者，在这里记录学习与思考。',
      bioEn: "Hello! I'm a developer passionate about Web technology and AI, documenting my learning journey here.",
      buttons: [
        { text: '查看项目', textEn: 'View Projects', link: '#projects', type: 'primary' },
        { text: '联系我', textEn: 'Contact Me', link: '#contact', type: 'secondary' }
      ]
    },
    hero: {
      badge: '欢迎来到我的空间',
      badgeEn: 'Welcome to my space',
      floatText1: 'Clean Code',
      floatSub1: '优雅的代码',
      floatText1En: 'Clean Code',
      floatSub1En: 'Elegant code',
      floatText2: 'Open Source',
      floatSub2: '开源精神',
      floatText2En: 'Open Source',
      floatSub2En: 'Open spirit'
    },
    navigation: [
      { label: '首页', labelEn: 'Home', href: '#hero' },
      { label: '博客', labelEn: 'Blog', href: '#blog' },
      { label: '项目', labelEn: 'Projects', href: '#projects' },
      { label: '关于', labelEn: 'About', href: '#about' }
    ],
    socialLinks: [
      { name: 'GitHub', icon: 'github', url: 'https://github.com' },
      { name: 'Twitter', icon: 'twitter', url: 'https://twitter.com' }
    ],
    sections: {
      blogLabel: '精选博文',
      blogLabelEn: 'Featured Posts',
      blogTitle: '最新文章',
      blogTitleEn: 'Latest Articles',
      blogDesc: '探索技术、分享思考、记录成长',
      blogDescEn: 'Explore tech, share thoughts, record growth',
      projLabel: '作品集',
      projLabelEn: 'Portfolio',
      projTitle: '我的项目',
      projTitleEn: 'My Projects',
      projDesc: '实践出真知，代码见真章',
      projDescEn: 'Practice makes perfect, code speaks truth',
      aboutLabel: '关于我',
      aboutLabelEn: 'About Me',
      aboutTitle: '更多关于 Passen ZZH',
      aboutTitleEn: 'More About Passen ZZH',
      aboutDesc: '热爱技术，追求卓越。在这里分享技术见解、项目经验和个人思考。',
      aboutDescEn: 'Passionate about technology. Here I share technical insights, project experiences, and personal thoughts.',
      footerLabel: '联系与信息',
      footerLabelEn: 'Contact & Info',
      footerTitle: '联系方式',
      footerTitleEn: 'Contact Info',
      footerNavTitle: '导航',
      footerNavTitleEn: 'Navigation',
      footerSocialTitle: '社交',
      footerSocialTitleEn: 'Social'
    },
    articles: [
      {
        id: 1,
        title: '用 Vibe Coding 快速搭建个人博客',
        titleEn: 'Building a Personal Blog with Vibe Coding',
        category: '前端',
        categoryEn: 'Frontend',
        summary: '探索如何使用现代化的开发工具和设计理念，快速构建一个具有高级感的个人博客网站。本文将分享从设计到实现的全过程。',
        summaryEn: 'Explore how to use modern development tools and design concepts to quickly build a premium personal blog website. This article shares the entire process from design to implementation.',
        content: '',
        coverImage: '',
        date: '2025-01-15',
        readTime: '5 分钟',
        readTimeEn: '5 min read',
        featured: true
      },
      {
        id: 2,
        title: 'Gemini 设计系统的色彩心理学',
        titleEn: 'Color Psychology in Gemini Design System',
        category: '设计',
        categoryEn: 'Design',
        summary: '深入分析 Google Gemini 的设计语言，了解色彩选择背后的心理学原理，以及如何在项目中应用这些原则。',
        summaryEn: "Deep dive into Google Gemini's design language, understanding the psychology behind color choices and how to apply these principles in projects.",
        content: '',
        coverImage: '',
        date: '2025-01-10',
        readTime: '8 分钟',
        readTimeEn: '8 min read',
        featured: true
      },
      {
        id: 3,
        title: '2025 年前端工具链趋势',
        titleEn: 'Frontend Toolchain Trends in 2025',
        category: '技术',
        categoryEn: 'Tech',
        summary: '展望 2025 年前端开发的最新趋势，包括新框架、构建工具、AI 辅助开发等方面的变化与发展方向。',
        summaryEn: 'Looking ahead to the latest trends in frontend development for 2025, including new frameworks, build tools, AI-assisted development, and more.',
        content: '',
        coverImage: '',
        date: '2025-01-05',
        readTime: '6 分钟',
        readTimeEn: '6 min read',
        featured: false
      }
    ],
    projects: [
      {
        id: 1,
        name: '个人博客系统',
        nameEn: 'Personal Blog System',
        description: '基于现代前端技术栈构建的个人博客平台，支持暗色模式、响应式设计和多语言切换。',
        descriptionEn: 'A personal blog platform built with modern frontend tech stack, supporting dark mode, responsive design, and multilingual switching.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        url: '#',
        image: ''
      },
      {
        id: 2,
        name: 'AI 工具集',
        nameEn: 'AI Toolkit',
        description: '集成多种 AI 能力的开发者工具集合，提升开发效率。',
        descriptionEn: 'A collection of developer tools integrated with various AI capabilities to boost productivity.',
        tags: ['Python', 'API', 'AI'],
        url: '#',
        image: ''
      }
    ],
    about: {
      text: '热爱技术，追求卓越。我相信好的代码如同好的文章，应当简洁、清晰且富有表现力。<br>在这里，我分享技术见解、项目经验和个人思考。欢迎交流与探讨。',
      textEn: 'Passionate about technology, pursuing excellence. I believe good code is like good writing—concise, clear, and expressive.<br>Here I share technical insights, project experiences, and personal thoughts. Welcome to connect.'
    },
    footer: {
      brandDesc: '记录技术探索之路，分享开发心得体会。',
      brandDescEn: 'Documenting the journey of tech exploration, sharing development insights.'
    },
    siteConfig: {
      siteName: 'Passen ZZH 的博客',
      siteNameEn: "Passen ZZH's Blog",
      copyright: '© 2025 Passen ZZH. All rights reserved.',
      copyrightEn: '© 2025 Passen ZZH. All rights reserved.'
    }
  },

  init() {
    if (!localStorage.getItem('blogData')) {
      localStorage.setItem('blogData', JSON.stringify(this.defaultData));
    }
  },

  getData() {
    this.init();
    return JSON.parse(localStorage.getItem('blogData'));
  },

  saveData(data) {
    localStorage.setItem('blogData', JSON.stringify(data));
  },

  updateProfile(profile) {
    const data = this.getData();
    data.profile = { ...data.profile, ...profile };
    this.saveData(data);
  },

  updateHero(hero) {
    const data = this.getData();
    data.hero = { ...data.hero, ...hero };
    this.saveData(data);
  },

  updateSections(sections) {
    const data = this.getData();
    data.sections = { ...data.sections, ...sections };
    this.saveData(data);
  },

  addArticle(article) {
    const data = this.getData();
    article.id = Date.now();
    article.date = new Date().toISOString().split('T')[0];
    data.articles.unshift(article);
    this.saveData(data);
    return article.id;
  },

  updateArticle(id, article) {
    const data = this.getData();
    const index = data.articles.findIndex(a => a.id === id);
    if (index !== -1) {
      data.articles[index] = { ...data.articles[index], ...article };
      this.saveData(data);
      return true;
    }
    return false;
  },

  deleteArticle(id) {
    const data = this.getData();
    data.articles = data.articles.filter(a => a.id !== id);
    this.saveData(data);
  },

  addProject(project) {
    const data = this.getData();
    project.id = Date.now();
    data.projects.unshift(project);
    this.saveData(data);
    return project.id;
  },

  updateProject(id, project) {
    const data = this.getData();
    const index = data.projects.findIndex(p => p.id === id);
    if (index !== -1) {
      data.projects[index] = { ...data.projects[index], ...project };
      this.saveData(data);
      return true;
    }
    return false;
  },

  deleteProject(id) {
    const data = this.getData();
    data.projects = data.projects.filter(p => p.id !== id);
    this.saveData(data);
  },

  updateAbout(about) {
    const data = this.getData();
    data.about = { ...data.about, ...about };
    this.saveData(data);
  },

  updateFooter(footer) {
    const data = this.getData();
    data.footer = { ...data.footer, ...footer };
    this.saveData(data);
  },

  updateNavigation(navigation) {
    const data = this.getData();
    data.navigation = navigation;
    this.saveData(data);
  },

  updateSocialLinks(socialLinks) {
    const data = this.getData();
    data.socialLinks = socialLinks;
    this.saveData(data);
  },

  updateSiteConfig(config) {
    const data = this.getData();
    data.siteConfig = { ...data.siteConfig, ...config };
    this.saveData(data);
  },

  resetToDefault() {
    localStorage.setItem('blogData', JSON.stringify(this.defaultData));
  }
};

BlogData.init();