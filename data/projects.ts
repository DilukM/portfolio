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
    slug: "skincare-assistant",
    title: "Clerr - AI Based Virtual Skin Care Assistant",
    category: "Mobile Apps",
    image: "/thumbnails/skincare-thumb.png",
    description:
      "A virtual skincare assistant that analyzes users' skin conditions daily and provides personalized improvement suggestions. The app uses machine learning to assess skin health based on selfie uploads, tracks progress over time, and offers AI-driven recommendations for skincare products, dietary choices, and skincare tips tailored to individual needs.",
    technologies: [
      { name: "Flutter", icon: "/tech-icons/tech-flutter.png" },
      { name: "Dart", icon: "/tech-icons/provider.png" },
      { name: "Hive", icon: "/tech-icons/hive.png" },
      { name: "Provider", icon: "/tech-icons/provider.png" },
      { name: "Firebase", icon: "/tech-icons/firebase.png" },
      { name: "Cloudinary", icon: "/tech-icons/cloudinary.png" },
      { name: "Machine Learning", icon: "/tech-icons/ML.png" },
    ],
    videoSrc: "https://youtu.be/-RjEULM8a4w",
    videoThumbnail: "/thumbnails/skincare-assistant-thumb.jpg",
    images: [
      { src: "/projects/skincare-1.jpg", alt: "Skin Analysis Dashboard" },
      { src: "/projects/skincare-2.jpg", alt: "Selfie Upload Interface" },
      { src: "/projects/skincare-3.jpg", alt: "Personalized Recommendations" },
      { src: "/projects/skincare-4.jpg", alt: "Progress Tracking History" },
      { src: "/projects/skincare-5.jpg", alt: "Skin Analysis Dashboard" },
      { src: "/projects/skincare-6.jpg", alt: "Selfie Upload Interface" },
      { src: "/projects/skincare-7.jpg", alt: "Personalized Recommendations" },
      { src: "/projects/skincare-8.jpg", alt: "Progress Tracking History" },
      { src: "/projects/skincare-9.jpg", alt: "Skin Analysis Dashboard" },
      { src: "/projects/skincare-10.jpg", alt: "Selfie Upload Interface" },
      { src: "/projects/skincare-11.jpg", alt: "Personalized Recommendations" },
    ],
    links: [
      // {
      //   type: "github",
      //   url: "https://github.com/DilukM/skincare.git",
      //   label: "GitHub",
      // },
      // {
      //   type: "live",
      //   url: "https://play.google.com/store/apps/details?id=com.skincare-assistant",
      //   label: "Live Demo",
      // },
    ],
    date: "2024",
    duration: "6 months",
    client: "Aizotech",
    role: "Developer",
  },
  {
    slug: "gymnai",
    title: "Gymnai – AI Based Fitness Trainer",
    category: "Mobile Apps",
    image: "/thumbnails/gymnai-thumb.jpg",
    description:
      "An AI-driven fitness trainer mobile application designed to detect and correct users' exercise posture in real-time. Gymnai uses computer vision to analyze movement, provides voice guidance during exercises, and generates detailed session reports to help users improve their form and maximize workout effectiveness.",
    technologies: [
      { name: "Flutter", icon: "/tech-icons/tech-flutter.png" },
      { name: "Dart", icon: "/tech-icons/provider.png" },
      { name: "Provider", icon: "/tech-icons/provider.png" },
      { name: "Google MLKit", icon: "/tech-icons/mlkit.png" },
    ],
    videoSrc: "https://youtu.be/-RjEULM8a4w",
    videoThumbnail: "/thumbnails/gymnai-thumb.jpg",
    images: [
      { src: "/projects/gymnai-1.jpg", alt: "Gymnai Exercise Detection" },
      { src: "/projects/gymnai-2.jpg", alt: "Posture Correction Interface" },
      { src: "/projects/gymnai-3.jpg", alt: "Voice Guidance System" },
    ],
    links: [
      // {
      //   type: "github",
      //   url: "https://github.com/DilukM/gymnai.git",
      //   label: "GitHub",
      // },
      // {
      //   type: "live",
      //   url: "https://play.google.com/store/apps/details?id=com.gymnai",
      //   label: "Live Demo",
      // },
    ],
    date: "2024",
    duration: "5 months",
    client: "Aizotech",
    role: "Developer",
  },
  {
    slug: "citilytics",
    title: "Citilytics - Image Classification Mobile Application",
    category: "Mobile Apps",
    image: "/thumbnails/citilytics-thumb.jpg",
    description:
      "A real-time object detection and image classification mobile application designed to identify vehicles with advertisements. Citilytics uses TensorFlow Lite for efficient object detection, stores images locally, and integrates with Google Drive for seamless uploads. The app offers advanced customization with adjustable confidence thresholds and support for user-provided TensorFlow Lite models.",
    technologies: [
      { name: "Flutter", icon: "/tech-icons/tech-flutter.png" },
      { name: "Dart", icon: "/tech-icons/provider.png" },
      { name: "Firebase", icon: "/tech-icons/firebase.png" },
      { name: "TensorFlow Lite", icon: "/tech-icons/tensorflow.png" },
    ],
    videoSrc: "https://youtu.be/-RjEULM8a4w",
    videoThumbnail: "/thumbnails/citilytics-thumb.jpg",
    images: [
      { src: "/projects/citilytics-1.jpg", alt: "Real-time Object Detection" },
      {
        src: "/projects/citilytics-2.jpg",
        alt: "Vehicle Classification Interface",
      },
      { src: "/projects/citilytics-3.jpg", alt: "Google Drive Integration" },
      {
        src: "/projects/citilytics-4.jpg",
        alt: "Model Configuration Settings",
      },
    ],
    links: [
      // {
      //   type: "github",
      //   url: "https://github.com/DilukM/CItilytics.git",
      //   label: "GitHub",
      // },
      // {
      //   type: "live",
      //   url: "https://play.google.com/store/apps/details?id=com.citilytics",
      //   label: "Live Demo",
      // },
    ],
    date: "2024",
    duration: "4 months",
    client: "Aizotech",
    role: "Developer",
  },
  {
    slug: "aizotf",
    title: "AizoTF – TFLite Model Checking App",
    category: "Mobile Apps",
    image: "/thumbnails/citilytics-thumb.jpg",
    description:
      "A specialized mobile application designed to test TensorFlow Lite machine learning models for image classification and object detection. AizoTF features a user-friendly interface for uploading and validating TFLite model files and label files, is optimized for SSD MobileNet models with real-time inference, and designed with extendability to support additional model architectures.",
    technologies: [
      { name: "Flutter", icon: "/tech-icons/tech-flutter.png" },
      { name: "Dart", icon: "/tech-icons/provider.png" },
      { name: "TensorFlow Lite", icon: "/tech-icons/tensorflow.png" },
    ],
    videoSrc: "/videos/Aizotf.mp4",
    videoThumbnail: "/thumbnails/aizotf-thumb.jpg",
    images: [
      { src: "/projects/aizotf-1.jpg", alt: "Model Upload Interface" },
      { src: "/projects/aizotf-2.jpg", alt: "Model Testing Dashboard" },
      { src: "/projects/aizotf-3.jpg", alt: "Real-time Inference Results" },
      { src: "/projects/aizotf-4.jpg", alt: "Model Performance Analytics" },
      { src: "/projects/aizotf-5.jpg", alt: "Model Performance Analytics" },
      { src: "/projects/aizotf-6.jpg", alt: "Model Performance Analytics" },
      { src: "/projects/aizotf-7.jpg", alt: "Model Performance Analytics" },
    ],
    links: [
      {
        type: "github",
        url: "https://github.com/DilukM/aizotf.git",
        label: "GitHub",
      },
      // {
      //   type: "live",
      //   url: "https://play.google.com/store/apps/details?id=com.aizotf",
      //   label: "Live Demo",
      // },
    ],
    date: "2024",
    duration: "3 months",
    client: "AizoTech",
    role: "Developer",
  },
  {
    slug: "pixup",
    title: "Pixup - Movie Recommendation App",
    category: "Mobile Apps",
    image: "/thumbnails/pixup-thumb.png",
    description:
      "A feature-rich movie recommendation application built using the IMDB API. Pixup allows users to discover trending movies, add favorites to their personal collection, view movie rankings, read reviews, and get personalized recommendations based on their viewing preferences.",
    technologies: [
      { name: "Flutter", icon: "/tech-icons/tech-flutter.png" },
      { name: "Dart", icon: "/tech-icons/provider.png" },
      { name: "Provider", icon: "/tech-icons/provider.png" },
      { name: "IMDB API", icon: "/tech-icons/imdb.png" },
      { name: "Hive", icon: "/tech-icons/hive.png" },
    ],
    videoSrc: "https://youtu.be/-RjEULM8a4w",
    videoThumbnail: "/thumbnails/pixup-thumb.png",
    images: [
      { src: "/projects/pixup-1.jpg", alt: "Trending Movies Feed" },
      { src: "/projects/pixup-2.jpg", alt: "Movie Details Page" },
      { src: "/projects/pixup-3.jpg", alt: "Favorites Collection" },
      { src: "/projects/pixup-4.jpg", alt: "Movie Rankings" },
    ],
    links: [
      {
        type: "github",
        url: "https://github.com/DilukM/pixup.git",
        label: "GitHub",
      },
      // {
      //   type: "live",
      //   url: "https://play.google.com/store/apps/details?id=com.pixup",
      //   label: "Live Demo",
      // },
    ],
    date: "2024",
    duration: "1 week",
    client: "Personal Project",
    role: "Developer",
  },
  {
    slug: "close-cart",
    title: "Close Cart - Local Discount Discovery Platform",
    category: "Web Apps",
    image: "/thumbnails/close-cart-thumb.jpg",
    description:
      "Close Cart is a comprehensive platform connecting shoppers with nearby discounts and promotional offers. The system features a web portal for merchants to publish advertisements and a mobile app for consumers to discover local deals. Powered by a machine learning recommendation engine that uses K-means clustering to suggest personalized offers based on user preferences and shopping behavior.",
    technologies: [
      { name: "React.js", icon: "/tech-icons/react.png" },
      { name: "Node.js", icon: "/tech-icons/tech-node.png" },
      { name: "Express.js", icon: "/tech-icons/express.png" },
      { name: "MongoDB", icon: "/tech-icons/tech-mongodb.png" },
      { name: "Python", icon: "/tech-icons/python.png" },
      { name: "FastAPI", icon: "/tech-icons/fastapi.png" },
      { name: "K-means Clustering", icon: "/tech-icons/algorithm.png" },
      { name: "Flutter", icon: "/tech-icons/tech-flutter.png" },
    ],
    videoSrc: "/videos/close-cart.mp4",
    videoThumbnail: "/thumbnails/close-cart-thumb.jpg",
    images: [
      { src: "/projects/close-cart-1.jpg", alt: "Merchant Dashboard" },
      { src: "/projects/close-cart-2.jpg", alt: "Offer Publishing Interface" },
      { src: "/projects/close-cart-3.jpg", alt: "Mobile App User Interface" },
      {
        src: "/projects/close-cart-4.jpg",
        alt: "Personalized Recommendations",
      },
      { src: "/projects/close-cart-5.jpg", alt: "ML Recommendation Dashboard" },
      { src: "/projects/close-cart-6.jpg", alt: "User Analytics" },
    ],
    links: [
      {
        type: "live",
        url: "https://www.closecartlk.com/",
        label: "Consumer website",
      },
      {
        type: "live",
        url: "https://www.merchant.closecartlk.com/",
        label: "Business owner Dashboard",
      },
    ],
    date: "2024",
    duration: "8 months",
    client: "Academic Project",
    role: "Full Stack & ML Developer",
  },
  {
    slug: "portfolio-website",
    title: "Personal Portfolio Website",
    category: "Web Apps",
    image: "/thumbnails/portfolio-thumb.jpg",
    description:
      "A modern, responsive portfolio website showcasing my projects and professional skills. Built with Next.js and Tailwind CSS, featuring smooth animations with Framer Motion, dark/light mode, and an intuitive project showcase system. The website implements a clean, accessible UI with component-based architecture for maintainability.",
    technologies: [
      { name: "Next.js", icon: "/tech-icons/next.png" },
      { name: "React.js", icon: "/tech-icons/react.png" },
      { name: "TypeScript", icon: "/tech-icons/typescript.png" },
      { name: "Tailwind CSS", icon: "/tech-icons/tailwind.png" },
      { name: "Framer Motion", icon: "/tech-icons/framer.png" },
      { name: "Shadcn UI", icon: "/tech-icons/shadcn.png" },
    ],
    videoSrc: "/videos/portfolio.mp4",
    videoThumbnail: "/thumbnails/portfolio-thumb.jpg",
    images: [
      { src: "/projects/portfolio-1.jpg", alt: "Portfolio Homepage" },
      { src: "/projects/portfolio-2.jpg", alt: "Projects Showcase" },
      { src: "/projects/portfolio-3.jpg", alt: "About Section" },
      { src: "/projects/portfolio-4.jpg", alt: "Services Overview" },
      { src: "/projects/portfolio-5.jpg", alt: "Contact Form" },
    ],
    links: [
      {
        type: "github",
        url: "https://github.com/DilukM/portfolio-website",
        label: "GitHub",
      },
      {
        type: "live",
        url: "https://www.dilukudayakantha.com",
        label: "Live Site",
      },
    ],
    date: "2025",
    duration: "2 weeks",
    client: "Personal Project",
    role: "Full Stack Developer",
  },
];
