export interface Project {
  slug: string;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: Array<{
    name: string;
    icon?: string;
  }>;
  videoSrc: string;
  videoThumbnail: string;
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
  links: Array<{
    type: "github" | "live" | "download" | "other";
    url: string;
    label: string;
  }>;
  date: string;
  duration?: string;
  client?: string;
  role?: string;
}

export const projects: Project[] = [
  {
    slug: "shopease",
    title: "ShopEase",
    category: "E-commerce",
    image: "/thumbnails/thumb.jpg",
    description:
      "A feature-rich e-commerce app with cart, payments, and order tracking.",
    technologies: [
      { name: "Flutter", icon: "/tech-icons/tech-flutter.png" },
      { name: "Firebase", icon: "/tech-icons/firebase.png" },
      { name: "Stripe", icon: "/tech-icons/stripe.png" },
    ],
    videoSrc: "https://youtu.be/-RjEULM8a4w",
    videoThumbnail: "/thumbnails/shop-ease-thumb.jpg",
    images: [
      { src: "/projects/shop-ease-1.jpg", alt: "ShopEase Home Screen" },
      { src: "/projects/shop-ease-2.jpg", alt: "Product Details" },
      { src: "/projects/shop-ease-3.jpg", alt: "Shopping Cart" },
    ],
    links: [
      {
        type: "github",
        url: "https://github.com/yourusername/shop-ease",
        label: "GitHub",
      },
      {
        type: "live",
        url: "https://play.google.com/store/apps/details?id=com.shop-ease",
        label: "Live Demo",
      },
    ],
    date: "2024",
    duration: "3 months",
    client: "ShopEase Inc.",
    role: "Lead Developer",
  },
  {
    slug: "socialconnect",
    title: "SocialConnect",
    category: "Social",
    image: "/thumbnails/thumb2.png",
    description:
      "Social networking app with real-time messaging and content sharing.",
    technologies: [
      { name: "Flutter", icon: "/tech-icons/tech-flutter.png" },
      { name: "Firebase", icon: "/tech-icons/firebase.png" },
      { name: "Node", icon: "/tech-icons/tech-node.png" },
    ],
    videoSrc: "https://youtu.be/-RjEULM8a4w",
    videoThumbnail: "/thumbnails/social-connect-thumb.jpg",
    images: [
      { src: "/projects/social-connect-1.jpg", alt: "SocialConnect Feed" },
      { src: "/projects/social-connect-2.jpg", alt: "Chat Interface" },
      { src: "/projects/social-connect-3.jpg", alt: "Profile Page" },
    ],
    links: [
      {
        type: "github",
        url: "https://github.com/yourusername/social-connect",
        label: "GitHub",
      },
      {
        type: "live",
        url: "https://play.google.com/store/apps/details?id=com.social-connect",
        label: "Live Demo",
      },
    ],
    date: "2023",
    duration: "4 months",
    client: "SocialConnect Ltd.",
    role: "Senior Developer",
  },
  {
    slug: "taskmaster",
    title: "TaskMaster",
    category: "Utility",
    image: "/thumbnails/thumb3.jpg",
    description:
      "A powerful productivity app that helps users manage tasks, set reminders, and track progress with beautiful analytics and team collaboration features.",
    technologies: [
      { name: "Flutter", icon: "/tech-icons/tech-flutter.png" },
      { name: "Hive", icon: "/tech-icons/hive.png" },
      { name: "Provider", icon: "/tech-icons/provider.png" },
      { name: "SQLite", icon: "/tech-icons/sqlite.png" },
    ],
    videoSrc: "https://youtu.be/-RjEULM8a4w",
    videoThumbnail: "/thumbnails/taskmaster-thumb.jpg",
    images: [
      { src: "/projects/taskmaster-1.jpg", alt: "TaskMaster Dashboard" },
      { src: "/projects/taskmaster-2.jpg", alt: "Task Creation Interface" },
      { src: "/projects/taskmaster-3.jpg", alt: "Analytics Dashboard" },
      { src: "/projects/taskmaster-4.jpg", alt: "Team Collaboration View" },
    ],
    links: [
      {
        type: "github",
        url: "https://github.com/yourusername/taskmaster",
        label: "GitHub",
      },
      {
        type: "live",
        url: "https://play.google.com/store/apps/details?id=com.taskmaster",
        label: "Live Demo",
      },
    ],
    date: "2023",
    duration: "5 months",
    client: "TaskMaster Solutions",
    role: "Full Stack Developer",
  },
  {
    slug: "puzzlequest",
    title: "PuzzleQuest",
    category: "Games",
    image: "/thumbnails/thumb4.jpg",
    description:
      "An engaging puzzle game featuring multiple game modes, achievements, and a unique progression system that keeps players coming back for more.",
    technologies: [
      { name: "Flutter", icon: "/tech-icons/tech-flutter.png" },
      { name: "Node", icon: "/tech-icons/tech-node.png" },
      { name: "Mongo DB", icon: "/tech-icons/tech-mongodb.png" },
      { name: "Firebase", icon: "/tech-icons/firebase.png" },
    ],
    videoSrc: "https://youtu.be/-RjEULM8a4w",
    videoThumbnail: "/thumbnails/puzzlequest-thumb.jpg",
    images: [
      { src: "/projects/puzzlequest-1.jpg", alt: "PuzzleQuest Main Menu" },
      { src: "/projects/puzzlequest-2.jpg", alt: "Gameplay Screen" },
      { src: "/projects/puzzlequest-3.jpg", alt: "Achievements" },
      { src: "/projects/puzzlequest-4.jpg", alt: "Leaderboard" },
    ],
    links: [
      {
        type: "github",
        url: "https://github.com/yourusername/puzzlequest",
        label: "GitHub",
      },
      {
        type: "live",
        url: "https://play.google.com/store/apps/details?id=com.puzzlequest",
        label: "Live Demo",
      },
    ],
    date: "2023",
    duration: "6 months",
    client: "GameStudio Inc.",
    role: "Game Developer",
  },
  {
    slug: "fittrack",
    title: "FitTrack",
    category: "Utility",
    image: "/thumbnails/thumb5.png",
    description:
      "A comprehensive fitness tracking app that helps users monitor workouts, track progress, and achieve their fitness goals with personalized workout plans.",
    technologies: [
      { name: "Flutter", icon: "/tech-icons/tech-flutter.png" },
      { name: "SQLite", icon: "/tech-icons/sqlite.png" },
      { name: "Provider", icon: "/tech-icons/provider.png" },
      { name: "Hive", icon: "/tech-icons/hive.png" },
    ],
    videoSrc: "https://youtu.be/-RjEULM8a4w",
    videoThumbnail: "/thumbnails/fittrack-thumb.jpg",
    images: [
      { src: "/projects/fittrack-1.jpg", alt: "FitTrack Dashboard" },
      { src: "/projects/fittrack-2.jpg", alt: "Workout Tracking" },
      { src: "/projects/fittrack-3.jpg", alt: "Progress Analytics" },
      { src: "/projects/fittrack-4.jpg", alt: "Workout Plans" },
    ],
    links: [
      {
        type: "github",
        url: "https://github.com/yourusername/fittrack",
        label: "GitHub",
      },
      {
        type: "live",
        url: "https://play.google.com/store/apps/details?id=com.fittrack",
        label: "Live Demo",
      },
    ],
    date: "2024",
    duration: "4 months",
    client: "FitTrack Health",
    role: "Mobile Developer",
  },
];
