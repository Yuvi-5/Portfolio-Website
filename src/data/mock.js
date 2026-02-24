export const personalInfo = {
  name: "Yuvraj Singh Palh",
  title: "AI Researcher · Cybersecurity Specialist · Software Developer",
  motto: "Correct. Complete. On-Time.",
  location: "Brampton, ON",
  email: "yuvraj363singh@gmail.com",
  phone: "+1 416-569-7128",
  linkedin: "https://linkedin.com/in/yuvraj-palh",
  github: "https://github.com/Yuvi-5",
  summary: "AI Researcher, Cybersecurity Specialist, and Software Developer with demonstrated expertise in bridging IT systems with physical Operational Technology (OT) to drive measurable manufacturing efficiency. Published IEEE author in Edge-Cloud computing and Deep Reinforcement Learning for delay-sensitive industrial IoT environments.",
  heroDescription: "From publishing IEEE research in edge-cloud computing to co-founding a fintech startup and deploying AI on sub-$100 Raspberry Pi hardware — I build secure, intelligent systems that solve real-world problems. Every line of code exists to deliver one promise:",
};

export const education = {
  institution: "Algoma University",
  degree: "Bachelor of Computer Science (Hons.)",
  minor: "Minor in Business",
  specialization: "AI & Data Science Specialization",
  location: "Brampton, ON",
  dates: "May 2022 – Dec. 2025",
  gpa: "4.0 / 4.0 (90.55%)",
  coursework: ["Machine Learning", "Cybersecurity", "Cloud Computing", "Data Structures & Algorithms"]
};

export const experiences = [
  {
    id: 1,
    role: "AI Researcher & Developer",
    company: "Raventrack",
    type: "Mitacs Accelerate Project",
    location: "Brampton, ON",
    dates: "Dec. 2025 – Present",
    current: true,
    description: "Construction & Heavy Industry AI",
    highlights: [
      "Engineered a context-aware AI reconciliation system automating matching of financial invoices against physical material deliveries using Document AI, OCR, and IoT sensor telemetry.",
      "Architected multi-source data ingestion pipelines linking vendor invoice parsing with GPS and sensor data for real-time margin visibility and predictive anomaly flagging.",
      "Reduced reconciliation cycle time by automating previously manual workflows, enabling operations teams to verify inbound logistics accurately."
    ],
    tech: ["Python", "Document AI", "OCR", "IoT", "GPS Integration", "Data Pipelines"]
  },
  {
    id: 2,
    role: "Technical Co-Founder & Backend Architect",
    company: "Ordino",
    type: "Fintech Startup",
    location: "Brampton, ON",
    dates: "2026 – Present",
    current: true,
    description: "Secure Serverless Financial Platform",
    highlights: [
      "Designed and deployed secure, serverless cloud architecture on AWS (Fargate, Lambda) processing high-volume OCR receipt scans with zero single-point-of-failure tolerance.",
      "Implemented enterprise-grade cybersecurity: S3 Presigned URLs, end-to-end encryption, and full compliance with Canadian PIPEDA data residency standards (ca-central-1 hosting).",
      "Integrated AWS Textract for precision OCR, building a production pipeline that extracts, validates, and structures financial data ensuring output is consistently correct and complete."
    ],
    tech: ["AWS Fargate", "Lambda", "S3", "Textract", "Python", "PIPEDA"]
  },
  {
    id: 3,
    role: "Research Assistant",
    company: "Algoma University",
    type: "Edge-Cloud & Industrial IoT",
    location: "Brampton, ON",
    dates: "May 2023 – Present",
    current: true,
    description: "Cloud Computing & Deep Reinforcement Learning Research",
    highlights: [
      "Pioneered research in cloud technology, focusing on multi-objective resource allocation, culminating in a publication in the 13th IEEE International Workshop (MVDA 2025) — Improving QoS for VM Allocation in Multi-Cloud Environment.",
      "Leading ongoing research on a groundbreaking IEEE Journal paper on AI-Based Task Offloading for the Edge-Cloud Paradigm, proposing a hybrid approach combining rule-based modules with a DDQN reinforcement learning agent.",
      "Demonstrated superior task offloading strategies where our hybrid model significantly improves system performance — better deadline compliance, reduced latency, and enhanced edge resource utilization.",
      "Collaborated with interdisciplinary teams, conducting comprehensive data analysis and simulations while preparing impactful research proposals and publications."
    ],
    tech: ["Python", "DDQN", "EdgeCloudSim", "Deep RL", "IoT", "Cloud Computing"]
  },
  {
    id: 4,
    role: "Teaching Assistant",
    company: "Algoma University",
    type: "Cybersecurity & Core CS",
    location: "Brampton, ON",
    dates: "May 2024 – Dec. 2025",
    current: false,
    description: "Graduate & Undergraduate Instruction across 5 courses",
    highlights: [
      "Introduction to Cybersecurity (Master's Course) — Delivered graduate-level instruction on network defense, threat modeling, and secure system design. (Winter 2025)",
      "Computer Applications & Computer Graphics — Instructed core CS fundamentals across two semesters. (Spring 2024 & Fall 2025)",
      "Advanced & Basic Data Structures & Algorithms — Facilitated coursework and hands-on lab sessions. (Fall 2024 & Fall 2025)"
    ],
    tech: ["Cybersecurity", "DSA", "Computer Graphics", "Computer Applications"]
  },
  {
    id: 5,
    role: "Workshop Lead",
    company: "Algoma University",
    type: "Raspberry Pi \"Circuit Revival\" Series",
    location: "Brampton, ON",
    dates: "Winter 2026",
    current: false,
    description: "Edge Computing & Local LLM Deployment Workshops",
    highlights: [
      "Designed and delivered standalone hands-on workshops progressing students from basic GPIO digital I/O and analog sensor reading (grove.py) to deploying complex distributed IoT sensor grids across multiple Raspberry Pi edge nodes.",
      "Demonstrated running private, offline LLMs on resource-constrained edge hardware using Ollama, 4-bit quantization, and RAG — proving AI deployment is viable on sub-$100 devices without any cloud dependency."
    ],
    tech: ["Raspberry Pi", "Ollama", "RAG", "IoT", "Edge AI", "Python"]
  },
  {
    id: 6,
    role: "Project Assistant (Co-op)",
    company: "Algoma University",
    type: "Student Success & Wellbeing",
    location: "Brampton, ON",
    dates: "May 2025 – Aug. 2025",
    current: false,
    description: "Student Services Operations & Technical Development",
    highlights: [
      "Provided exceptional customer service as a Navigator, managing 50+ student inquiries daily and overseeing Student Success Central and Student Services independently.",
      "Contributed backend technical work for Student Success initiatives, supporting planning and execution of 5+ ongoing projects and preparing strategies for upcoming academic programs.",
      "Led outreach and community-building efforts, hosting 10+ workshops and events promoting inclusivity and personal development.",
      "Performed technical tasks — designing, planning, and coding for key student success initiatives, improving program efficiency for 300+ students per semester."
    ],
    tech: ["Project Management", "Backend Dev", "Student Services", "Outreach"]
  },
  {
    id: 7,
    role: "Student Assistant",
    company: "Algoma University",
    type: "International Student Success & Wellbeing",
    location: "Brampton, ON",
    dates: "Feb. 2024 – Apr. 2025",
    current: false,
    description: "Community Building & Technical Operations for 400+ International Students",
    highlights: [
      "Managed a virtual community of 400+ international students across 3 campuses, handling all technical operations and facilitating communication for seamless support.",
      "Delivered 12+ impactful presentations and hosted 20+ Coffee & Connect sessions, fostering engagement and promoting wellness resources.",
      "Coordinated 25+ tabling events and led wellness initiatives, promoting on-campus support services and integrating technology to enhance student well-being."
    ],
    tech: ["Community Management", "Communications", "Event Coordination", "Tech Ops"]
  },
  {
    id: 8,
    role: "Student Ambassador",
    company: "Algoma University",
    type: "Recruitment & Outreach",
    location: "Brampton, ON",
    dates: "Jan. 2023 – Dec. 2024",
    current: false,
    description: "University Liaison between Students and Faculty",
    highlights: [
      "Served as a liaison between students and faculty, ensuring student needs and concerns were addressed promptly.",
      "Assisted with recruitment and orientation of new students, providing campus tours and information sessions.",
      "Represented Algoma University at various campus events and outreach activities in a professional capacity."
    ],
    tech: ["Public Speaking", "Recruitment", "Event Planning", "Student Relations"]
  },
  {
    id: 9,
    role: "DSD Receiver & Accounting Associate",
    company: "Walmart Supercentre",
    type: "Retail Operations · Georgetown, ON",
    location: "Georgetown, ON",
    dates: "Sept. 2022 – May 2025",
    current: false,
    description: "Supply Chain, Inventory Management & Financial Records — 2.5+ Years",
    highlights: [
      "DSD Receiver (June 2023 – May 2025): Managed the full Direct Store Delivery process — inbound freight, vendor supply chains, and digital inventory reconciliation against physical goods.",
      "Accounting Office Associate (Dec. 2022 – May 2023): Maintained and updated financial records, ensuring accuracy of daily transactions with strict cash handling accountability.",
      "Overnight Merchandiser (Sept. 2022 – Dec. 2022): Stocked, organized, and managed merchandise across multiple departments during overnight shifts.",
      "Resolved logistical discrepancies in real time, collaborating with vendors and internal teams to protect operational margins and minimize shrinkage."
    ],
    tech: ["Logistics", "Inventory Systems", "Accounting", "Supply Chain", "Vendor Relations"]
  }
];

export const projects = [
  {
    id: 1,
    title: "HyDRO-DDQN",
    subtitle: "IEEE Published Research",
    category: "research",
    description: "Hybrid orchestrator using Double Deep Q-Network agent to optimize real-time task offloading across edge and cloud resources in delay-sensitive IoT environments.",
    longDescription: "Achieved superior deadline compliance and reduced network latency over conventional methods. Currently expanding into DAG task models, cooperative multi-edge environments, and energy/CO2 reduction using Transformers, PPO, and RNNs.",
    tech: ["Python", "DDQN", "MDP", "EdgeCloudSim", "Deep RL"],
    highlights: ["Published in 13th IEEE International Workshop (MVDA 2025)", "Multi-objective VM allocation for cloud environments", "Improved QoS for resource-constrained systems"],
    github: "https://github.com/Yuvi-5/HyDRO-DDQN_EdgeCloudSim",
    status: "Published"
  },
  {
    id: 2,
    title: "Raventrack AI Reconciliation",
    subtitle: "Mitacs Accelerate",
    category: "ai",
    description: "Context-aware AI system automating the matching of financial invoices against physical material deliveries using Document AI, OCR, and IoT sensor telemetry.",
    longDescription: "Multi-source data ingestion pipelines linking vendor invoice parsing with GPS and sensor data, providing real-time margin visibility and predictive anomaly flagging.",
    tech: ["Python", "Document AI", "OCR", "IoT", "GPS", "Async Pipelines"],
    highlights: ["Eliminated manual reconciliation bottlenecks", "Real-time margin visibility", "Predictive anomaly flagging for procurement"],
    github: null,
    status: "Active"
  },
  {
    id: 3,
    title: "Ordino Fintech Platform",
    subtitle: "Co-Founded Startup",
    category: "fullstack",
    description: "Secure serverless cloud architecture on AWS processing high-volume OCR receipt scans with enterprise-grade cybersecurity and PIPEDA compliance.",
    longDescription: "Production pipeline that extracts, validates, and structures financial data with zero single-point-of-failure tolerance.",
    tech: ["AWS Fargate", "Lambda", "S3", "Textract", "Python", "Docker"],
    highlights: ["Zero single-point-of-failure architecture", "PIPEDA compliant (ca-central-1)", "Enterprise-grade encryption & IAM"],
    github: null,
    status: "Active"
  },
  {
    id: 4,
    title: "Edge AI Workshop Series",
    subtitle: "Circuit Revival",
    category: "iot",
    description: "Hands-on workshop series from GPIO I/O to deploying distributed IoT sensor grids and running private offline LLMs on sub-$100 edge hardware.",
    longDescription: "Proved AI deployment is viable on resource-constrained devices using Ollama, 4-bit quantization, and RAG without any cloud dependency.",
    tech: ["Raspberry Pi", "Ollama", "RAG", "grove.py", "Edge Computing"],
    highlights: ["LLM inference on sub-$100 hardware", "Zero cloud dependency", "Multi-node distributed sensor grids"],
    github: "https://github.com/Yuvi-5/Rasp-Pi-Workshop-3",
    status: "Completed"
  }
];

export const skills = {
  "AI & Machine Learning": [
    { name: "Deep Reinforcement Learning", level: 95 },
    { name: "Predictive Analytics", level: 90 },
    { name: "Computer Vision & OCR", level: 88 },
    { name: "Generative AI & RAG", level: 92 },
    { name: "Edge AI Deployment", level: 85 },
    { name: "Document AI", level: 88 }
  ],
  "Development & Cloud": [
    { name: "Python", level: 96 },
    { name: "C/C++", level: 85 },
    { name: "AWS (Fargate, Lambda, S3)", level: 90 },
    { name: "REST APIs & Middleware", level: 92 },
    { name: "SQL & Data Pipelines", level: 88 },
    { name: "Java", level: 80 }
  ],
  "Cybersecurity & IoT": [
    { name: "Zero Trust Architecture", level: 90 },
    { name: "IT/OT Network Segmentation", level: 88 },
    { name: "Encryption & IAM", level: 92 },
    { name: "PIPEDA Compliance", level: 85 },
    { name: "IoT Sensor Grids", level: 90 },
    { name: "Secure CI/CD & SAST", level: 85 }
  ]
};

export const leadership = [
  {
    id: 1,
    role: "President",
    organization: "Algoma University Computer Science Society (ALCOMS)",
    dates: "May 2024 – Present",
    description: "Lead a dynamic team of 45 executives and 200+ members across two campuses, serving nearly 3,000 CS students.",
    highlights: [
      "Spearheaded 20+ events and 5+ initiatives, including flagship mentorship sessions with startup founders, CEOs, and tech professionals.",
      "Organized hackathons, coding competitions, and guest lectures, driving hands-on learning and networking opportunities.",
      "Managed society operations — event planning, budgeting, and member outreach — leading to increased participation."
    ]
  },
  {
    id: 2,
    role: "Orientation Leader & Student Representative",
    organization: "Algoma University",
    dates: "Dec. 2022 – Jan. 2025",
    description: "Managed and coordinated orientation activities, mentored new students.",
    highlights: [
      "Fostered collaboration between Student Affairs, Academic departments, and other university units.",
      "Mentored and guided new students to help them transition successfully into university life."
    ]
  }
];

export const publications = [
  {
    title: "HyDRO-DDQN: Hybrid Deep Reinforcement Learning Orchestrator",
    venue: "13th IEEE International Workshop (MVDA 2025)",
    description: "Multi-objective VM allocation for cloud environments, demonstrating improved QoS for resource-constrained systems.",
    status: "Published"
  }
];

export const stats = [
  { label: "GPA", value: "4.0/4.0", description: "Perfect Academic Record" },
  { label: "Published Author", value: "IEEE", description: "Edge-Cloud & DRL Research" },
  { label: "Community Impact", value: "3,000+", description: "Students Served as President" },
  { label: "Events & Workshops", value: "20+", description: "Hackathons, Talks & Sessions" }
];
