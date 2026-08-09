/* ===========================
   CENTRAL PORTFOLIO CONTENT
   Edit this file to update text, links, projects, etc.
   =========================== */

export const typewriterPhrases = [
  "responsive web apps.",
  "real-time web apps.",
  "clean UIs.",
  "full-stack applications.",
];

export const socials = [
  { name: "GitHub", href: "https://github.com/mr-ruthwik", icon: "github" },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/sai-ruthwik-madarapu",
    icon: "linkedin",
  },
  {
    name: "HackerRank",
    href: "https://www.hackerrank.com/profile/mr_ruthwik",
    icon: "hackerrank",
  },
];

export const resume = {
  url: "https://drive.google.com/uc?export=download&id=1zkllzNwV1QMcLffamWTCt_OIQ6mSHmhZ",
  filename: "Sai_Ruthwik_Madarapu_Resume.pdf",
};

export const aboutStats = [
  { number: "6", label: "Projects Built" },
  { number: "5", label: "Certificates" },
  { number: "40", label: "Total Skills" },
];

export const aboutInfo = [
  {
    icon: "briefcase",
    label: "Status",
    value: "Available for work",
    highlight: true,
  },
  { icon: "map-pin", label: "Location", value: "Vijayawada, Andhra Pradesh" },
  { icon: "mail", label: "Email", value: "sairuthwik2002@gmail.com" },
  { icon: "smartphone", label: "Phone", value: "+91 9390757804" },
];

export const education = [
  {
    icon: "graduation-cap",
    degree: "Bachelor of Technology (Information Technology)",
    institute: "Andhra Loyola Institute of Engineering and Technology - JNTUK",
    year: "2020 – 2024",
    tags: ["CGPA: 7.0", "Vijayawada"],
  },
  {
    icon: "book-open",
    degree: "Board of Intermediate Education (MPC)",
    institute: "Sri Chaitanya Jr College",
    year: "2018 – 2020",
    tags: ["CGPA: 6.8", "Vijayawada"],
  },
  {
    icon: "school",
    degree: "Board of Secondary Education (SSC)",
    institute: "Sri Chaitanya Techno School",
    year: "2018",
    tags: ["CGPA: 9.0", "Challapalli"],
  },
];

export const skills = [
  {
    icon: "code-2",
    title: "Programming Languages",
    tags: ["Java", "Python", "C", "JavaScript"],
  },
  {
    icon: "layout-template",
    title: "Frontend Technologies",
    tags: ["HTML", "CSS", "Bootstrap", "React.js", "Responsive Web Design"],
  },
  {
    icon: "wrench",
    title: "Tools & Platforms",
    tags: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Google Colab", "EmailJS"],
  },
  {
    icon: "rocket",
    title: "Deployment Platforms",
    tags: ["Netlify", "Vercel", "Render", "Railway"],
  },
  {
    icon: "database",
    title: "Database & Backend Services",
    tags: ["MySQL", "Firebase", "Google Sheets (Apps Script)"],
  },
  {
    icon: "brain",
    title: "Core Concepts",
    tags: ["OOPS", "API Integration", "DOM Manipulation", "CRUD Operations", "Local Storage"],
  },
  {
    icon: "server",
    title: "Backend & DevOps",
    tags: ["Node.js", "Express.js", "Docker", "FFmpeg"],
  },
  {
    icon: "monitor",
    title: "Operating Systems",
    tags: ["Windows", "Ubuntu", "Linux"],
  },
  {
    icon: "sparkles",
    title: "Other Skills",
    tags: [
      "MS Office",
      "Google Workspace",
      "Canva",
      "Internet Research",
      "Video Editing",
      "Typing Speed",
    ],
  },
];

export const projects = [
  {
    index: "01",
    key: "bookmark",
    icon: "bookmark",
    title: "Bookmark Saver",
    desc: "A responsive bookmark management web application to save, organise, and access your favourite links with a clean, intuitive interface.",
    tags: ["HTML", "CSS", "JavaScript", "Python", "Flask"],
    github: "https://github.com/mr-ruthwik/bookmark_saver.git",
    view: "https://ruthwik-bookmark-saver.vercel.app/",
    hasGuide: true,
  },
  {
    index: "02",
    key: "housie",
    icon: "gamepad-2",
    title: "Housie Game",
    desc: "An interactive Tambola/Housie game with real-time random number generation and automatic ticket & number tracking for a seamless gaming experience.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/mr-ruthwik/housie.git",
    view: "https://my-housie.vercel.app/",
    hasGuide: true,
  },
  {
    index: "03",
    key: "weather",
    icon: "cloud-sun",
    title: "Weather Forecast",
    desc: "A real-time weather application powered by the OpenWeatherMap API, showing live temperature, humidity, and weather conditions for any city.",
    tags: ["JavaScript", "OpenWeatherMap API", "HTML", "CSS"],
    github: "https://github.com/mr-ruthwik/weather.git",
    view: "https://ruthwik-weather-app.vercel.app/",
    hasGuide: true,
  },
  {
    index: "04",
    key: "todo",
    icon: "list-checks",
    title: "Todo List",
    desc: "A clean and responsive task management application to add, edit, complete, and delete tasks with local storage persistence for a seamless productivity experience.",
    tags: ["HTML", "CSS", "JavaScript", "Local Storage"],
    github: "https://github.com/mr-ruthwik/to_do_list.git",
    view: "https://ruthwik-todolist.vercel.app/",
    hasGuide: true,
  },
  {
    index: "05",
    key: "finsight",
    icon: "trending-up",
    title: "Fin Sight Application",
    academicNote: "Academic Project",
    desc: "An expense and income management web application with financial tracking features for managing daily transactions, budgeting, and visualising spending patterns.",
    tags: ["HTML", "CSS", "JavaScript", "Firebase", "Google Sheets"],
    view: "https://drive.google.com/file/d/1hOeqP1fyXs5YzDH_2oxzpAhhOD3NMxTX/view",
    featured: true,
    hasGuide: false,
  },
  {
    index: "06",
    key: "ytdownloader",
    icon: "video",
    title: "YouTube Downloader",
    desc: "Download YouTube content as audio or video with this Node.js web app, featuring live download progress and a simple queue system to manage multiple downloads.",
    tags: ["Node.js", "Express.js", "yt-dlp", "FFmpeg", "Docker"],
    github: "https://github.com/mr-ruthwik/youtube_downloader.git",
    hasGuide: true,
  },
];

/* Steps shown inside the "Execution Guide" modal for each project.
   Any step object with a `download` field renders as a fake-progress
   download button instead of plain text. */
export const executionGuides = {
  bookmark: {
    title: "Bookmark Saver execution guide",
    steps: [
      {
        download: "https://codeload.github.com/mr-ruthwik/bookmark_saver/zip/refs/heads/main",
        label: "Download my project — ",
      },
      { text: "Extract the downloaded ZIP folder" },
      { text: "Install dependencies: pip install Flask==3.0.3 gunicorn==22.0.0" },
      { text: "Run the app: python app.py" },
      { text: "Open http://127.0.0.1:5000 in your browser" },
    ],
  },
  housie: {
    title: "Housie Game execution guide",
    steps: [
      {
        download: "https://codeload.github.com/mr-ruthwik/housie/zip/refs/heads/main",
        label: "Download my project — ",
      },
      { text: "Extract the downloaded ZIP folder" },
      { text: "Open index.html in your browser" },
      { text: "Enter your name and ticket count (1-4)" },
      { text: "Create a room to host, or join an existing room using its code" },
      { text: "Host clicks Generate Number; players tap matching numbers and claim patterns" },
    ],
  },
  weather: {
    title: "Weather Forecast execution guide",
    steps: [
      {
        download: "https://codeload.github.com/mr-ruthwik/weather/zip/refs/heads/main",
        label: "Download my project — ",
      },
      { text: "Extract the downloaded ZIP folder" },
      { text: "Get a free API key from openweathermap.org" },
      { text: "Open weather.js and replace the apiKey variable with your own key" },
      { text: "Open index.html in your browser" },
    ],
  },
  todo: {
    title: "Todo List execution guide",
    steps: [
      {
        download: "https://codeload.github.com/mr-ruthwik/to_do_list/zip/refs/heads/main",
        label: "Download my project — ",
      },
      { text: "Extract the downloaded ZIP folder" },
      { text: "Open index.html in your browser" },
      { text: "Add a task via the input box or press Enter" },
      { text: "Tasks are auto-saved to Local Storage and persist on refresh" },
    ],
  },
  ytdownloader: {
    title: "YouTube Downloader execution guide",
    steps: [
      {
        download: "https://codeload.github.com/mr-ruthwik/youtube_downloader/zip/refs/heads/main",
        label: "Download my project — ",
      },
      { text: "Run npm install to install Express and dependencies" },
      { text: "(Optional) create a .env file with PORT=3000" },
      { text: "Start the server: node server.js" },
      { text: "Open http://localhost:3000 in your browser" },
      { text: "Paste a YouTube URL and click Download MP4 or Download MP3" },
    ],
  },
};

export const certificates = [
  {
    icon: "terminal",
    name: "Python Full Stack",
    url: "https://drive.google.com/file/d/1P0WIXS0PlWyGavXQT9_7qZ6ywEqJEZyj/view?usp=drive_link",
  },
  {
    icon: "coffee",
    name: "Java Full Stack",
    url: "https://drive.google.com/file/d/1or1657gQAjGY5HUUoGq2DqpHiuqyY3il/view?usp=drive_link",
  },
  {
    icon: "server",
    name: "MySQL",
    url: "https://www.hackerrank.com/certificates/9c143a20e450",
  },
  {
    icon: "cloud",
    name: "Cloud Computing",
    url: "https://drive.google.com/file/d/1VAVXyvp_3BezC9IPlOtIMX20ieirdoKy/view?usp=drive_link",
  },
  {
    icon: "bar-chart-2",
    name: "Data Science",
    url: "https://drive.google.com/file/d/157uVeIsi8o05I9BQP0aqDUtmrmCddrFk/view?usp=drive_link",
  },
];

export const contactLinks = [
  {
    icon: "mail",
    label: "Email",
    value: "sairuthwik2002@gmail.com",
    href: "mailto:sairuthwik2002@gmail.com",
  },
  {
    icon: "phone",
    label: "Phone",
    value: "+91 9390757804",
    href: "tel:+919390757804",
  },
  {
    icon: "linkedin",
    label: "LinkedIn",
    value: "sai-ruthwik-madarapu",
    href: "https://linkedin.com/in/sai-ruthwik-madarapu",
  },
  {
    icon: "github",
    label: "GitHub",
    value: "mr-ruthwik",
    href: "https://github.com/mr-ruthwik",
  },
];

export const whatsappLink = "https://wa.me/919390757804";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];