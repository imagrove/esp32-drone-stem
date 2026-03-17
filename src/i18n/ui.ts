export const defaultLang = 'en';

export const ui = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.tutorials': 'Tutorials',
    'nav.hardware': 'Hardware',
    'nav.downloads': 'Downloads',
    'nav.lang': '中文',
    
    // Home page
    'home.title': 'ESP32 Open Source Drone STEM Education Platform',
    'home.subtitle': 'An open-source drone solution based on Espressif ESP32-S2/S3. Supports Wi-Fi phone control with a complete STEM curriculum from assembly to AI.',
    'home.cta.start': 'Start Learning',
    'home.cta.hardware': 'Explore Hardware',
    'home.cta.downloads': 'Downloads',
    
    // Features
    'feature.curriculum.title': '3-Level Curriculum',
    'feature.curriculum.desc': 'Beginner (Ready to Fly), Intermediate (Code & Tune), Advanced (AI & Algorithms)',
    'feature.framework.title': 'ESP-IDF + Arduino',
    'feature.framework.desc': 'Based on Crazyflie open-source firmware, ESP-IDF v5.0 framework',
    'feature.wifi.title': 'Wi-Fi Control',
    'feature.wifi.desc': 'Built-in Wi-Fi hotspot, control via iOS/Android app',
    'feature.hardware.title': 'Open Hardware',
    'feature.hardware.desc': 'Complete schematics, PCB design, and 3D printable frame files',
    
    // Course levels section
    'courses.title': 'Graduated Learning Path',
    'courses.subtitle': 'From "Learning by Playing" to "Creating by Learning", progressively unlock drone skills',
    'courses.beginner.title': 'Beginner: Flight Explorer',
    'courses.beginner.desc': 'Ready to fly, experience the joy',
    'courses.intermediate.title': 'Intermediate: Flight Engineer',
    'courses.intermediate.desc': 'Modify code, understand flight control',
    'courses.advanced.title': 'Advanced: Flight Scientist',
    'courses.advanced.desc': 'Algorithm design, system integration',
    'courses.level': 'Level',
    'courses.coding': 'Coding',
    'courses.duration': 'Duration',
    'courses.projects': 'Projects',
    'courses.cta': 'View Tutorials',
    
    // Tutorial page
    'tutorials.title': 'Tutorials',
    'tutorials.sidebar.title': 'Course Levels',
    'tutorials.beginner.title': 'Beginner Tutorials',
    'tutorials.level': 'Level',
    'tutorials.duration': 'Duration',
    
    // Footer
    'footer.contact': 'Contact Us',
    'footer.whatsapp': 'WhatsApp',
    'footer.wechat': 'WeChat',
    'footer.youtube': 'YouTube Channel',
    'footer.copyright': '© 2026 ESP32 Drone. All rights reserved.',
  },
  zh: {
    // Navigation
    'nav.home': '首页',
    'nav.tutorials': '教程',
    'nav.hardware': '硬件',
    'nav.downloads': '下载',
    'nav.lang': 'EN',
    
    // Home page
    'home.title': 'ESP32 开源无人机 STEM 教育平台',
    'home.subtitle': '基于乐鑫 ESP32-S2/S3 的开源无人机解决方案，支持 Wi-Fi 手机控制，涵盖从组装到 AI 的完整 STEM 课程体系。',
    'home.cta.start': '开始学习',
    'home.cta.hardware': '了解硬件',
    'home.cta.downloads': '下载资源',
    
    // Features
    'feature.curriculum.title': '三级课程体系',
    'feature.curriculum.desc': '初级（开箱即玩）、中级（代码修改与调参）、高级（算法设计与 AI）',
    'feature.framework.title': 'ESP-IDF + Arduino',
    'feature.framework.desc': '基于 Crazyflie 开源飞控代码，使用 ESP-IDF v5.0 开发框架',
    'feature.wifi.title': 'Wi-Fi 手机控制',
    'feature.wifi.desc': '内置 Wi-Fi 热点，通过 iOS/Android APP 即可控制飞行',
    'feature.hardware.title': '开源硬件设计',
    'feature.hardware.desc': '完整的电路原理图、PCB 设计和 3D 打印机架文件开源',
    
    // Course levels section
    'courses.title': '分级课程体系',
    'courses.subtitle': '从「玩中学」到「学中创」，渐进式解锁无人机的每一项技能',
    'courses.beginner.title': '初级：飞行小能手',
    'courses.beginner.desc': '开箱即玩，体验飞行乐趣',
    'courses.intermediate.title': '中级：飞行工程师',
    'courses.intermediate.desc': '修改代码，理解飞控原理',
    'courses.advanced.title': '高级：飞行科学家',
    'courses.advanced.desc': '算法设计，系统集成',
    'courses.level': '难度',
    'courses.coding': '编程基础',
    'courses.duration': '学习周期',
    'courses.projects': '项目数量',
    'courses.cta': '查看教程',
    
    // Tutorial page
    'tutorials.title': '教程',
    'tutorials.sidebar.title': '课程级别',
    'tutorials.beginner.title': '初级教程',
    'tutorials.level': '难度',
    'tutorials.duration': '时长',
    
    // Footer
    'footer.contact': '联系我们',
    'footer.whatsapp': 'WhatsApp',
    'footer.wechat': '微信',
    'footer.youtube': 'YouTube 频道',
    'footer.copyright': '© 2026 ESP32 Drone. 保留所有权利。',
  },
} as const;

export type Lang = keyof typeof ui;
export type TranslationKey = keyof typeof ui[typeof defaultLang];
