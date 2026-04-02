// ===== Fill this with your info =====
const SITE = {
  basics: {
    name: "Ranjitha Rani",
    firstName: "Ranjitha Rani",
    headline: "I’m Ranjitha Rani",
    summary:
      "I am a Master's student in Computer Science at the University of Oregon. I have hands-on experience in distributed systems, cloud computing, and database systems, using technologies like Docker, Kubernetes, and Python. My academic work includes research on microservice architectures and shared-memory systems, and I am always eager to take on new technical challenges. ",
    aboutLong:
      "Sometimes I obsess over clean UI and performance. I enjoy hackathons, teaching juniors, and reading code. My goal this year: ship 3 solid projects and contribute to OSS.",
    image: "picture.jpeg", // Profile image
    social: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/ranjitha-rani-b8677b236/" },
      { label: "GitHub", url: "https://github.com/ranjitha-rani" },
      { label: "Email", url: "mailto:ranjitharani2001@gmail.com" },
    ],
    hireUrl: "#connect",
    cvUrl: "#", // replace with /resume.pdf when you add it
  },

  education: [
    {
      school: "University of Oregon",
      period: "September 2024 – Present",
      degree: "Master of Science in Computer Science",
      thesis: "SAM CFT - Crash Fault Tolerance for Shared Append-only Memory using RDMA (in progress)",
      detail: "Courses: Algorithms and Complexity, Database Processing, Data Mining, Data Science, Large Scale Systems, Probabilistic Methods in AI",
    },
    {
      school: "PES University",
      period: "December 2020 – June 2024",
      degree: "Bachelor of Technology in Computer Science",
      detail: "Courses: Data Structures, Algorithms, Operating Systems, DBMS, Software Engineering, Cloud Computing, Data Analytics, Big Data, Web Development, Networks",
    },
  ],

  skills: [
    { 
      group: "Programming Languages", 
      icon: "💻",
      items: ["Python", "Go", "C++", "HTML/CSS"] 
    },
    { 
      group: "Machine Learning & AI", 
      icon: "🤖",
      items: ["PyTorch Geometric", "Graph Neural Networks", "Scikit-learn", "PCA", "K-Means"] 
    },
    { 
      group: "Distributed Systems", 
      icon: "⚡",
      items: ["Docker", "Kubernetes", "Microservices", "Raft/PBFT", "3PC"] 
    },
    { 
      group: "Database Management", 
      icon: "🗄️",
      items: ["MySQL", "MongoDB", "Relational DB", "ER Modeling"] 
    },
    { 
      group: "DevOps & Tools", 
      icon: "🔧",
      items: ["Git", "Prometheus", "PowerBI", "Cloud Architecture"] 
    },
    { 
      group: "Network & Security", 
      icon: "🌐",
      items: ["Network Analysis", "Intrusion Detection", "Geospatial Analytics", "Sharding"] 
    }
  ],

  experience: [
    {
      category: "Research",
      icon: "🔬",
      roles: [
        {
          title: "Research Intern",
          organization: "CCDB-CDSAML, PES University",
          skills: ["Python", "Docker", "Compiler", "Kubernetes"]
        },
        {
          title: "Research",
          organization: "Distopia Labs, University of Oregon", 
          skills: ["Distributed Systems", "Fault Tolerance", "Python", "C++"]
        }
      ]
    },
    {
      category: "Academic",
      icon: "🎓",
      roles: [
        {
          title: "Teaching Assistant - Cloud Computing",
          organization: "PES University",
          skills: ["AWS", "Docker", "Jenkins", "Kubernetes"]
        },
        {
          title: "Teaching Assistant - Data Science",
          organization: "University of Oregon",
          skills: ["Classification", "Regression", "Supervised Learning", "Unsupervised Learning", "Feature Engineering", "Data Visualization", "Statistical Analysis", "Machine Learning Pipelines"]
        },
        {
          title: "Teaching Assistant - Operating Systems",
          organization: "University of Oregon",
          skills: ["Processes", "Threads", "Scheduling", "Synchronization", "Memory Management", "File Systems"]
        }
      ]
    }
  ],

  publications: [
    {
      title: "Synthetic to Real-world: Insights on Microservice-based Application",
      conference: "IEEE ICITEICS 2024",
      url: "https://www.researchgate.net/publication/383323031_Synthetic_to_Real-World_Insights_on_Microservices-Based_Application_Benchmarks",
      type: "Conference Paper",
      year: "2024"
    }
  ],

  projects: [
    {
      title: "Subsea Cable Route Redundancy using GNNs",
      description: "Engineered a predictive resilience framework for global submarine cable networks using Graph Neural Networks (GraphSAGE), modeling landing stations and undersea cables as graph topologies.",
      bullets: [
        "Extracted spatial and topological features (degree centrality and Haversine distance) to classify and quantify route redundancy, enabling intelligent failover strategies during disruptions",
        "Enhanced fault tolerance analysis for critical telecom infrastructure by simulating cable failure scenarios and evaluating alternative routing paths in real-time"
      ],
      tags: ["Python", "PyTorch Geometric", "GraphSAGE", "Geospatial Analytics"],
      image: "",
      github: "",
      demo: ""
    },
    {
      title: "Mini-Spanner",
      description: "Designed a distributed database prototype inspired by Google Spanner, integrating Three-Phase Commit (3PC) over Practical Byzantine Fault Tolerance (PBFT) to ensure strong consistency and fault tolerance.",
      bullets: [
        "Implemented sharded replication for scalable data distribution, and Proof of Execution (PoE) for lightweight integrity validation across replicas",
        "Benchmarked fault recovery and commit latencies under synthetic failure loads to validate system resilience"
      ],
      tags: ["Go", "Raft/PBFT", "3PC", "Sharding"],
      image: "",
      github: "",
      demo: ""
    },
    {
      title: "Network Traffic Analysis for Intrusion Detection",
      description: "Developed an unsupervised anomaly detection pipeline to identify potential intrusions in network traffic using dimensionality reduction (PCA) and clustering algorithms (K-Means, One-Class SVM).",
      bullets: [
        "Processed and cleaned large-scale packet-level data to extract behavioral patterns, distinguishing between benign and malicious flows",
        "Achieved high anomaly detection precision on benchmark intrusion datasets, demonstrating effectiveness for zero-day attack detection"
      ],
      tags: ["Python", "Scikit-learn", "PCA", "K-Means", "One-Class SVM"],
      image: "",
      github: "",
      demo: ""
    },
    {
      title: "µScale – Scalable Microservices Benchmarking Suite",
      description: "Developed µScale, a cloud-native benchmarking framework for evaluating microservice performance on AWS, implementing load testing and monitoring capabilities.",
      bullets: [
        "Deployed containerized microservices on AWS EKS with auto-scaling node groups, integrated with CloudWatch for monitoring and ELB for load balancing",
        "Implemented S3 for test data storage and Lambda functions for automated benchmark scheduling and result analysis",
        "Built monitoring dashboards with CloudWatch metrics integration and developed CI/CD pipelines for continuous performance validation"
      ],
      tags: ["AWS EKS", "Python", "Docker", "CloudWatch", "S3", "Lambda"],
      image: "",
      github: "",
      demo: ""
    },
    {
      title: "Insurance Management System",
      description: "Designed and deployed a cloud-native insurance policy management system on AWS, implementing scalable microservices architecture with automated CI/CD pipelines.",
      bullets: [
        "Architected the system using AWS RDS for MySQL database, EC2 for application hosting, and S3 for document storage with automated backups",
        "Implemented AWS Lambda functions for policy renewal automation, CloudWatch for monitoring, and IAM for secure user access management",
        "Deployed using AWS Elastic Beanstalk with auto-scaling groups and integrated with Route 53 for domain management and SSL certificates"
      ],
      tags: ["AWS", "MySQL", "Lambda", "S3", "EC2", "CloudWatch"],
      image: "",
      github: "",
      demo: ""
    },
    {
      title: "SQLens - SQL Query Analyzer & Visualizer",
      description: "Interactive tool for analyzing and visualizing SQL query execution plans, statistics, and schema relationships. Surfaces query bottlenecks, index optimization opportunities, and renders execution trees with latency annotations. Supports PostgreSQL and MySQL introspection.",
      bullets: [],
      tags: ["Python", "PostgreSQL", "MySQL", "SQL", "Query Planning"],
      image: "",
      github: "",
      demo: ""
    }
  ],
};
// ===== Stop editing =====

// Languages Python, C/C++, HTML/CSS
// Databases MySQL, MariaDB
// Frameworks Docker, Kubernetes, Flutter
// Tools Git, Power BI
// Concepts Data Structures, Algorithms, Microservices, Cloud Architecture

// theme + nav toggle
(function initTheme(){
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || (!saved && matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.add("dark");
  }
})();
document.getElementById("themeToggle").addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme",
    document.documentElement.classList.contains("dark") ? "dark" : "light");
});

const nav = document.querySelector(".nav");
document.getElementById("navToggle").addEventListener("click", () => {
  nav.classList.toggle("open");
});

// helpers
function setHTML(id, html){ const el=document.getElementById(id); if(el) el.innerHTML=html; }
function setText(id, text){ const el=document.getElementById(id); if(el) el.textContent=text; }
function link(url, text, cls=""){ const a=document.createElement("a"); a.href=url; a.textContent=text; a.target="_blank"; a.rel="noopener"; if(cls) a.className=cls; return a; }

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {

// render hero
(function renderHero(){
  const b = SITE.basics;
  setText("firstName", b.firstName || b.name.split(" ")[0]);
  setText("headline", b.headline);
  setHTML("summary", b.summary);
  setHTML("aboutLong", b.aboutLong);
  setText("footerName", b.name);
  setText("year", new Date().getFullYear());
  if (b.image) document.getElementById("avatar").src = b.image;

  // Contact links removed - now handled in Let's Connect section

  // document.getElementById("hireMe").href = b.hireUrl || "#connect";
  // document.getElementById("downloadCV").href = b.cvUrl || "#";
})();

// render education timeline
(function renderEducation(){
  const wrap = document.getElementById("eduTimeline");
  (SITE.education || []).forEach(e => {
    const card = document.createElement("div");
    card.className = "edu-card";
    const thesisHTML = e.thesis
      ? `<div class="edu-thesis"><strong>Thesis:</strong> ${e.thesis}</div>`
      : "";
    card.innerHTML = `
      <h3>${e.school}</h3>
      <div class="edu-meta">${e.period} • ${e.degree}</div>
      ${thesisHTML}
      <p>${e.detail || ""}</p>
    `;
    wrap.appendChild(card);
  });
})();

// render skills
(function renderSkills(){
  const grid = document.getElementById("skillsGrid");
  (SITE.skills || []).forEach(s => {
    const card = document.createElement("div");
    card.className = "skill";
    
    const skillTags = s.items.map(item => `<span class="skill-tag">${item}</span>`).join('');
    
    card.innerHTML = `
      <span class="skill-icon">${s.icon}</span>
      <h3>${s.group}</h3>
      <div class="skill-items">${skillTags}</div>
    `;
    grid.appendChild(card);
  });
})();

// render experience
(function renderExperience(){
  const list = document.getElementById("expList");
  (SITE.experience || []).forEach(exp => {
    const categoryDiv = document.createElement("div");
    categoryDiv.className = "exp-category";
    
    let rolesHTML = "";
    exp.roles.forEach(role => {
      const roleSkills = role.skills.map(skill => `<span class="exp-skill-tag">${skill}</span>`).join('');
      
      rolesHTML += `
        <div class="exp-role">
          <div class="exp-role-header">
            <h4 class="exp-role-title">${role.title}</h4>
            <span class="exp-organization">${role.organization}</span>
          </div>
          <div class="exp-skills">${roleSkills}</div>
        </div>
      `;
    });
    
    categoryDiv.innerHTML = `
      <div class="exp-category-header">
        <span class="exp-category-icon">${exp.icon}</span>
        <h3 class="exp-category-title">${exp.category}</h3>
      </div>
      <div class="exp-roles">${rolesHTML}</div>
    `;
    
    list.appendChild(categoryDiv);
  });
})();

// render publications
(function renderPublications(){
  const list = document.getElementById("pubList");
  (SITE.publications || []).forEach(pub => {
    const pubCard = document.createElement("div");
    pubCard.className = "pub-card";
    
    pubCard.innerHTML = `
      <div class="pub-header">
        <div class="pub-title-section">
          <h3 class="pub-title">
            <a href="${pub.url}" target="_blank" rel="noopener">${pub.title}</a>
          </h3>
          <div class="pub-meta">
            <span class="pub-conference">${pub.conference}</span>
            <span class="pub-year">${pub.year}</span>
          </div>
        </div>
        <div class="pub-type-badge">${pub.type}</div>
      </div>
      <div class="pub-actions">
        <a href="${pub.url}" target="_blank" rel="noopener" class="btn outline small">View Paper</a>
      </div>
    `;
    
    list.appendChild(pubCard);
  });
})();

// render projects
(function renderProjects(){
  const grid = document.getElementById("projGrid");
  (SITE.projects || []).forEach(p => {
    const card = document.createElement("div");
    card.className = "project-card";
    
    let actionsHTML = "";
    if (p.github) actionsHTML += `<a class="btn outline small" href="${p.github}" target="_blank">GitHub</a>`;
    if (p.demo) actionsHTML += `<a class="btn primary small" href="${p.demo}" target="_blank">Demo</a>`;
    
    const tagsHTML = p.tags.map(tag => `<span class="tag">${tag}</span>`).join("");
    
    // Create bullet points from bullets array
    const bulletPoints = p.bullets ? p.bullets.map(bullet => `<li>${bullet}</li>`).join('') : '';
    
    card.innerHTML = `
      <h3>${p.title}</h3>
      <div class="project-details">
        ${p.image ? `<img src="${p.image}" alt="${p.title}" />` : ""}
        <p>${p.description}</p>
        ${bulletPoints ? `<ul class="project-bullets">${bulletPoints}</ul>` : ""}
        <div class="tags">${tagsHTML}</div>
        ${actionsHTML ? `<div class="project-actions">${actionsHTML}</div>` : ""}
      </div>
    `;
    
    // Add click event listener for dropdown functionality
    card.addEventListener('click', () => {
      // Close all other expanded cards
      const allCards = grid.querySelectorAll('.project-card');
      allCards.forEach(otherCard => {
        if (otherCard !== card && otherCard.classList.contains('expanded')) {
          otherCard.classList.remove('expanded');
        }
      });
      
      // Toggle current card
      card.classList.toggle('expanded');
    });
    
    grid.appendChild(card);
  });
})();

}); // End of DOMContentLoaded

// Scroll animations
(function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Add animate-in class to sections and observe them
  document.querySelectorAll('.section').forEach(section => {
    section.classList.add('animate-in');
    observer.observe(section);
  });
})();
