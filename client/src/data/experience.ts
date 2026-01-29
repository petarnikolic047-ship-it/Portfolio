import type { ExperienceData } from "@/types/experience";
import { positioning } from "./hero";

export const experienceData: ExperienceData = {
  section: {
    eyebrow: "Experience",
    title: "Work + Education",
    description: positioning,
    tabs: [
      { id: "work", label: "Work" },
      { id: "education", label: "Education" },
    ],
  },
  tabs: {
    work: [
      {
        id: "inforce",
        role: "Software Engineer / Configuration Engineer",
        company: "Inforce",
        period: "Oct 2025 - Present",
        type: "Full-time",
        theme: {
          eyebrow: "Inforce",
          headline: "Your Fiercest Ally in Insurance Technology",
          subline: "Insurance technology expertise - P&C and life",
        },
        bullets: [
          "Own Oracle PL/SQL packages supporting policy lifecycle workflows (renewals, endorsements, rating/rule flows) with production correctness as the priority",
          "Implement and maintain business rules with validation, exception handling, and transactional safeguards to protect data integrity",
          "Diagnose production issues by tracing object-model transactions and rule outputs; reduce time-to-isolate edge cases",
          "Validate data outputs against live policy behavior to keep reporting aligned with production logic",
          "Ship changes through controlled release processes with senior engineers to keep high-volume systems stable",
        ],
        story: [
          "I work in an enterprise insurance platform environment where correctness and data integrity matter more than surface-level features. My day-to-day centers around Oracle PL/SQL packages that drive policy lifecycle workflows -- renewals, endorsements, rating logic, and rule-based policy changes that must remain consistent under production volume.",
          "A core part of the role is implementing and maintaining business rules with predictable validation and exception handling. I focus on transactional safety (commit/rollback discipline), protecting data integrity, and ensuring outputs align with real policy behavior so downstream reporting and operational logic stay consistent.",
          "When production issues occur, I trace behavior through the object model, rule outputs, and database state to isolate root cause quickly and reduce time-to-fix. Changes are shipped through controlled release processes with review and coordination from senior engineers to keep high-volume systems stable.",
        ],
        stack: ["Oracle PL/SQL", "OneShield", "Business Rules", "Data Workflows"],
      },
      {
        id: "freelance",
        role: "Freelance Web Developer",
        company: "Freelance",
        period: "Jan 2022 - Oct 2025",
        type: "Freelance",
        bullets: [
          "Deliver React + TypeScript front-ends for dashboards, internal tools, and marketing sites using reusable component systems for clean handoff",
          "Integrate internal/third-party APIs; maintain predictable data contracts across the stack",
          "Build lightweight backend services when needed (Node/Express) to support integrations and automation",
          "Own delivery end-to-end from scoping to deployment with focus on performance, UX polish, and reliability",
          "Work directly with clients to clarify requirements, iterate quickly, and reduce ambiguity",
        ],
        story: [
          "I delivered client-facing web work end-to-end: scoping requirements, building the UI, integrating APIs, and shipping a clean deployment. Most projects used React + TypeScript with an emphasis on reusable components so the codebase stayed maintainable and easy to extend.",
          "I integrated internal and third-party APIs and prioritized predictable data contracts across the stack -- clear request/response shapes, consistent error handling, and practical validation. When needed, I built lightweight Node/Express services to support integrations, automation, or bridging between third-party tools and the front-end.",
          "Beyond implementation, I worked directly with stakeholders (including US/UK clients) to clarify requirements, iterate quickly, and reduce ambiguity. When in scope, I also supported website optimization, on-page SEO, and Google Business Profile improvements to strengthen visibility and inbound lead flow.",
        ],
        stack: ["React", "TypeScript", "Node.js", "APIs"],
      },
    ],
    education: [
      {
        id: "raf-bsc",
        title: "B.Sc. Software Engineering",
        institution: "RAF",
        period: "Oct 2023 - Jun 2027",
        bullets: [
          "B.Sc. program focused on software engineering, algorithms, databases, and real-world application development",
          "Practical work across backend systems, SQL/data design, and modern front-end development (React/TypeScript)",
          "Team projects emphasizing clean architecture, maintainability, and documentation",
          "Ongoing study with emphasis on production-grade engineering practices",
        ],
        story: [
          "My bachelor's program focuses on building a solid engineering foundation across algorithms, databases, systems, and practical application development. The emphasis is on understanding fundamentals and applying them through structured coursework and project-based delivery.",
          "I've worked across backend systems and SQL/data design while also building modern front-end applications using React and TypeScript. Team projects push maintainable architecture, documentation, and clean handoff -- skills that translate directly to real engineering environments.",
          "Alongside coursework, I aim to apply production-grade habits early: clear problem framing, disciplined debugging, and writing code that remains understandable and extensible after the initial implementation.",
        ],
        highlights: [
          "Operating Systems",
          "Database Systems",
          "Algorithms & Data Structures",
          "Computer Networks",
        ],
      },
      {
        id: "gifted-hs",
        title: "High School Diploma (IT)",
        institution: "Gymnasium Bora Stankovic Vranje",
        period: "Sep 2019 - Jun 2023",
        bullets: [
          "Computer science foundation with structured problem solving and algorithmic thinking",
          "Participation in programming competitions, coding workshops, and science/tech seminars",
          "Early hands-on work in C, C#, Java, SQL, and web development fundamentals",
          "Built a strong base for continued academic study and professional software engineering",
        ],
        story: [
          "This program was my formal entry point into computer science and programming. It built a strong base in structured problem solving, algorithmic thinking, and disciplined practice -- especially through competition-style tasks and iterative coding work.",
          "I participated in programming competitions, coding workshops, and science/tech seminars, which reinforced fundamentals and exposed me to a range of problem types. The environment emphasized learning by building and by solving, not just theory.",
          "I developed early hands-on experience with C, C#, Java, SQL, and web development fundamentals, which established the technical baseline that I later expanded through university study and professional work.",
        ],
        highlights: [
          "Competitive programming background",
          "Advanced informatics curriculum",
          "Programming foundations in C/C++",
        ],
      },
      {
        id: "academic-projects",
        title: "Selected Academic Projects",
        institution: "Systems & Data Engineering",
        period: "Oct 2023 - Present",
        bullets: [
          "Database/query engine work (SimpleDB-style): join planning and query/operator extensions",
          "Spatial indexing project: R-Tree / Hilbert curve indexing and analysis workflows",
          "Operating systems work: xv6 kernel feature work (memory/process-level features)",
          "Desktop + backend architecture: JavaFX client + Spring Boot backend design",
          "Compiler fundamentals: ANTLR-based parsing / language tooling exercises",
        ],
        story: [
          "These projects are where I built practical depth beyond coursework -- especially in systems and data engineering. The goal was to understand how core software components work under the hood, not just how to use them.",
          "On the database/query side, I worked on a SimpleDB-style engine, extending operators and exploring join planning decisions to connect theory with execution behavior. In spatial indexing, I explored structures like R-Trees and Hilbert curve indexing to understand performance tradeoffs in real datasets.",
          "On the systems side, I worked with xv6 to implement kernel-level features and understand OS primitives. I also built structured application architecture work using JavaFX + Spring Boot, and explored compiler fundamentals through ANTLR-based parsing and language tooling exercises.",
        ],
        highlights: [
          "Query engine extensions (SimpleDB-style)",
          "Spatial indexing (Hilbert / R-tree)",
          "xv6 kernel feature work",
          "JavaFX + Spring Boot system design",
          "ANTLR-based language parsing",
        ],
      },
      {
        id: "cae-c1",
        title: "Certificate in Advanced English (C1)",
        institution: "Cambridge English Assessment",
        period: "Jun 2022",
        bullets: [
          "Cambridge English: Advanced (CAE) - C1 level",
          "Professional written and spoken English (business + technical communication)",
          "Regular collaboration with US/UK stakeholders and clients in meetings and day-to-day delivery",
        ],
        story: [
          "Cambridge English: Advanced (CAE) certifies C1-level proficiency, supporting professional written and spoken communication in technical and business settings.",
          "I use English daily for engineering work: documenting requirements and changes, discussing implementation details, and communicating clearly across technical and non-technical stakeholders.",
          "I'm comfortable collaborating with US/UK stakeholders and clients in meetings and day-to-day delivery, including clarifying requirements, aligning on scope, and communicating progress with precision.",
        ],
        highlights: ["C1 proficiency", "Academic and technical English"],
      },
    ],
  },
};
