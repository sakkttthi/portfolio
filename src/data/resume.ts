export const resume = {
  name: 'Sakthivel Nathan',
  title: 'SDET — Automation Test Engineer (4+ Years Experience)',
  contact: {
    phone: '+91 8015080001',
    phoneHref: 'tel:+918015080001',
    email: 'sakthivelc.nathan@gmail.com',
    emailHref: 'mailto:sakthivelc.nathan@gmail.com',
    linkedinLabel: 'linkedin.com/in/sakthivel-nathan-4608a2248',
    linkedinHref: 'https://linkedin.com/in/sakthivel-nathan-4608a2248',
    githubLabel: 'github.com/sakkttthi',
    githubHref: 'https://github.com/sakkttthi',
  },
  resumePdf: 'Sakthivel_Nathan_Automation_Tester.pdf',
  summary:
    'SDET with 4+ years of experience building scalable UI automation frameworks using Playwright and TypeScript. Designed automation solutions for Business Process Automation platforms, reducing flaky tests through custom locator strategies and JSON-driven workflow generation. Experienced in AI testing using DeepEval, CI/CD integration, and improving automation reliability for rapidly evolving applications.',
  skillGroups: [
    {
      category: 'Programming Languages',
      items: ['TypeScript', 'JavaScript', 'SQL'],
    },
    {
      category: 'Automation Frameworks',
      items: [
        'Playwright',
        'Page Object Model (POM)',
        'BDD',
        'Data Driven Framework',
      ],
    },
    {
      category: 'API Testing',
      items: ['REST API Testing', 'Postman'],
    },
    {
      category: 'LLM Evaluation',
      items: ['DeepEval'],
    },
    {
      category: 'CI/CD',
      items: ['GitLab'],
    },
    {
      category: 'Testing Methodologies & Tools',
      items: [
        'Functional Testing',
        'Regression Testing',
        'Smoke Testing',
        'Sanity Testing',
        'Cross Browser Testing',
        'JIRA',
        'Azure DevOps',
      ],
    },
  ],
  experience: [
    {
      company: 'VIT Infotech',
      role: 'Senior Software Engineer (SDET)',
      location: 'Bengaluru, India',
      period: 'Mar 2025 – Present',
      bullets: [
        'Built a scalable Playwright and TypeScript framework supporting 600+ UI test cases for a node-based Business Process Automation platform.',
        'Developed a modular Page Object Model architecture with Playwright session states to validate role-based permissions across 5+ application screens.',
        'Implemented a fallback locator strategy to handle dynamic UI changes, reducing test maintenance effort by 80% and improving test stability.',
        'Developed a JSON-driven dynamic workflow generator to minimize duplicate test logic and reduce creation time for complex workflows by 70%.',
        'Integrated DeepEval-based LLM evaluation in automation pipelines to validate 25+ AI agent scenarios using rag metrics.',
        'Implemented multi-layer validation covering workflow execution status, node outputs, JSON payloads, dynamic data changes, and SQL database records.',
        'Optimized Playwright execution time from 6 hours to 2 hours by configuring parallel multi-worker execution in GitLab CI.',
      ],
    },
    {
      company: 'Sword Group',
      role: 'Software Tester',
      location: 'Chennai, India',
      period: 'Oct 2022 – Mar 2025',
      bullets: [
        'Increased automated regression coverage by 40% in multiple modules using Playwright and TypeScript.',
        'Created and maintained 150+ testcases also providing timely reports to business analysts and engineering teams.',
        'Validated backend REST APIs using Postman and Playwright Request API to verify HTTP response.',
        'Tracked and managed the defect lifecycle in 20+ Agile sprints using JIRA while collaborating with cross-functional teams.',
        'Performance testing of cross-browser functional, smoke, and regression using Playwright in Chrome, Firefox, and Safari environments.',
      ],
    },
  ],
  education: [
    {
      school: 'Karpagam Academy of Higher Education',
      degree: 'Master of Engineering (ME)',
      details: '8.5 CGPA',
      location: 'Coimbatore, India',
      graduated: 'Graduated: 2022',
    },
    {
      school: 'Karpagam College of Engineering',
      degree: 'Bachelor of Engineering (BE)',
      details: '8.0 CGPA',
      location: 'Coimbatore, India',
      graduated: 'Graduated: 2020',
    },
  ],
} as const
