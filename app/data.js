export const profile = {
  name: "Maria",
  role: "Full Stack Developer",
  stack: "MERN Stack · Programming Hero B-14",
  value:
    "I build responsive, real-data web apps with Next.js and React, and I ship every project live.",
  location: "Cumilla, Bangladesh",
  email: "maria423000@gmail.com",
  linkedin: "www.linkedin.com/in/maria-epu",
  github: "https://github.com/maria-dev4",
  resume: "/resume.pdf",
  photo: "/maria.jpg",
};

export const about = [
  "I am a web development student from Cumilla, Bangladesh, training in the MERN stack through the 7-month full stack course at Programming Hero (B-14 batch).",
  "Before the course began I spent three months building a base in HTML, CSS and Git, and I made my first website on my own, a skincare brand site called Lumière. Since then I have moved from static pages to Next.js apps with authentication, protected routes and live API data.",
  "I care about shipping. Every project here comes from a real design or a real API, is deployed, and is something I can explain line by line.",
];

export const facts = [
  { label: "Based in", value: "Cumilla, Bangladesh" },
  { label: "Training", value: "Full stack course, B-14 batch" },
  {
    label: "Focus",
    value: "Next.js, React, auth, Typescript, JavaScript (ES6+), deployment",
  },
];

export const skills = [
  {
    group: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js",
    ],
  },
  {
    group: "Backend and Auth",
    items: ["BetterAuth", "REST API integration"],
    learning: ["Node.js", "Express", "MongoDB"],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub", "Vercel", "Netlify", "Figma", "VS Code"],
  },
];

export const projects = [
  {
    title: "Bazar Dor",
    why: "A market price tracker for everyday grocery items, so shoppers can browse and compare prices by category.",
    image: "/projects/bazar-dor.png",
    tech: [
      "Next.js 16",
      "React",
      "Tailwind CSS",
      "BetterAuth",
      "react-hot-toast",
    ],
    features: [
      "Email and password, Google and GitHub sign-in",
      "Protected product detail pages",
      "Category pages with sorting and skeleton loaders",
      "Custom 404 page and profile update",
    ],
    live: "https://bazar-dor-maria-8854.vercel.app",
    code: "https://github.com/maria-dev4/bazar-dor",
  },
  {
    title: "FitLog",
    why: "A gym workout library app built from a Figma design, to practise turning a design into a working Next.js app.",
    image: "/projects/fitlog.png",
    tech: ["Next.js", "App Router", "Tailwind CSS", "Figma"],
    features: [
      "Workout library layout matched to the Figma design",
      "Built on the Next.js App Router",
    ],
    live: "https://fit-log-omega-weld.vercel.app/",
    code: "https://github.com/maria-dev4/fit-log",
  },
];

