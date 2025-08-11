export interface Project {
  slug: string;
  title: string;
  // Change single category to categories array
  categories: string[];
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
    categories: ["Mobile Apps", "Machine Learning"],
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
    categories: ["Mobile Apps", "Machine Learning"],
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
  /*{
    slug: "crypto-airline",
    title: "Cryptocurrency Airline Ticket Booking Website",
    categories: ["UI Designs"],
    image: "/thumbnails/crypto-airline-thumb.jpg",
    description:
      "A modern UI/UX design concept for an airline ticket booking platform with cryptocurrency payment integration. The design features a clean, intuitive interface that simplifies the booking process while incorporating blockchain technology for secure and efficient transactions. The project showcases responsive layouts, interactive elements, and a cohesive design system that prioritizes user experience.",
    technologies: [
      { name: "Figma", icon: "/tech-icons/figma.png" },
      { name: "Adobe XD", icon: "/tech-icons/adobe-xd.png" },
      { name: "Adobe Photoshop", icon: "/tech-icons/photoshop.png" },
      { name: "Prototype Testing", icon: "/tech-icons/prototype.png" },
    ],
    videoSrc: "/videos/crypto-airline.mp4",
    videoThumbnail: "/thumbnails/crypto-airline-thumb.jpg",
    images: [
      { src: "/projects/crypto-airline-1.jpg", alt: "Homepage Design" },
      { src: "/projects/crypto-airline-2.jpg", alt: "Flight Search Interface" },
      { src: "/projects/crypto-airline-3.jpg", alt: "Booking Process" },
      { src: "/projects/crypto-airline-4.jpg", alt: "Cryptocurrency Payment" },
      { src: "/projects/crypto-airline-5.jpg", alt: "Mobile Responsive View" },
    ],
    links: [
      {
        type: "live",
        url: "https://www.behance.net/gallery/221272759/Cryptocurrency-Airline-Ticket-Booking-Website?tracking_source=curated_galleries_ui-ux",
        label: "Behance Project",
      },
    ],
    date: "2023",
    duration: "3 weeks",
    client: "Personal Project",
    role: "UI/UX Designer",
  },*/
  {
    slug: "citilytics",
    title: "Citilytics - Image Classification Mobile Application",
    categories: ["Mobile Apps", "Machine Learning"],
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
      { src: "/projects/citilytics-1.jpeg", alt: "Real-time Object Detection" },
      {
        src: "/projects/citilytics-2.jpeg",
        alt: "Vehicle Classification Interface",
      },
      { src: "/projects/citilytics-3.jpeg", alt: "Google Drive Integration" },
      {
        src: "/projects/citilytics-4.jpeg",
        alt: "Model Configuration Settings",
      },
      {
        src: "/projects/citilytics-5.jpeg",
        alt: "Model Configuration Settings",
      },
      {
        src: "/projects/citilytics-6.jpeg",
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
    categories: ["Mobile Apps", "Machine Learning"],
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
    categories: ["Mobile Apps"],
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
      { src: "/projects/pixup-1.jpeg", alt: "Trending Movies Feed" },
      { src: "/projects/pixup-2.jpeg", alt: "Movie Details Page" },
      { src: "/projects/pixup-3.jpeg", alt: "Favorites Collection" },
      { src: "/projects/pixup-4.png", alt: "Movie Rankings" },
      { src: "/projects/pixup-5.jpeg", alt: "Favorites Collection" },
      { src: "/projects/pixup-6.jpeg", alt: "Favorites Collection" },
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
    categories: ["Web Apps", "Mobile Apps", "Machine Learning"],
    image: "/thumbnails/closecart.jpg",
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
      { src: "/projects/closecart-1.png", alt: "Merchant Dashboard" },
      { src: "/projects/closecart-2.png", alt: "Offer Publishing Interface" },
      { src: "/projects/closecart-3.png", alt: "Mobile App User Interface" },
      {
        src: "/projects/closecart-4.png",
        alt: "Personalized Recommendations",
      },
      { src: "/projects/closecart-5.png", alt: "Dashboard" },
      { src: "/projects/closecart-6.png", alt: "User Analytics" },
      { src: "/projects/closecart-7.png", alt: "User Analytics" },
      { src: "/projects/closecart-8.png", alt: "User Analytics" },
      { src: "/projects/closecart-9.png", alt: "User Analytics" },
      { src: "/projects/closecart-10.png", alt: "User Analytics" },
    ],
    links: [
      {
        type: "live",
        url: "https://closecartlk.com/",
        label: "Consumer website",
      },
      {
        type: "live",
        url: "https://merchant.closecartlk.com/",
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
    categories: ["Web Apps"],
    image: "/thumbnails/portfolio-1.png",
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
      { src: "/projects/portfolio-1.png", alt: "Portfolio Homepage" },
      { src: "/projects/portfolio-2.png", alt: "Experience Showcase" },
      { src: "/projects/portfolio-3.png", alt: "Services Section" },
      { src: "/projects/portfolio-4.png", alt: "Process of working" },
      { src: "/projects/portfolio-5.png", alt: "Project Showcase" },
      { src: "/projects/portfolio-6.png", alt: "Project Insights" },
      { src: "/projects/portfolio-7.png", alt: "Blog Section" },
    ],
    links: [
      {
        type: "github",
        url: "https://github.com/DilukM/portfolio.git",
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
  {
    slug: "foodshare-platform",
    title: "FoodShare - Food Waste Reduction Platform",
    categories: ["Web Apps", "Social Impact"],
    image: "/thumbnails/foodshare.png",
    description:
      "FoodShare is a comprehensive web platform designed to reduce food waste by connecting food donors with recipients. The system features user authentication with role-based access (donors and recipients), donation management, request handling, and custom email notifications. Built with Laravel and deployed on Vercel with PostgreSQL database integration.",
    technologies: [
      { name: "Laravel", icon: "/tech-icons/laravel.png" },
      { name: "PHP", icon: "/tech-icons/php.png" },
      { name: "PostgreSQL", icon: "/tech-icons/postgresql.png" },
      { name: "Tailwind CSS", icon: "/tech-icons/tailwind.png" },
      { name: "Alpine.js", icon: "/tech-icons/alpinejs.svg" },
      { name: "Blade Templates", icon: "/tech-icons/blade.png" },
      { name: "Docker", icon: "/tech-icons/docker.png" },
    ],
    videoSrc: "/videos/foodshare.mp4",
    videoThumbnail: "/thumbnails/foodshare-thumb.jpg",
    images: [
      { src: "/projects/foodshare-1.png", alt: "Homepage & Platform Overview" },
      { src: "/projects/foodshare-2.png", alt: "Donation Listing Interface" },
      { src: "/projects/foodshare-3.png", alt: "Create Donation Form" },
      { src: "/projects/foodshare-4.png", alt: "Donation Details View" },
      { src: "/projects/foodshare-5.png", alt: "User Dashboard" },
      { src: "/projects/foodshare-6.png", alt: "Request Management" },
      { src: "/projects/foodshare-7.png", alt: "User Authentication" },
      { src: "/projects/foodshare-8.png", alt: "Email Notifications" },
      { src: "/projects/foodshare-9.png", alt: "Profile Management" },
      { src: "/projects/foodshare-10.png", alt: "Responsive Design" },
      { src: "/projects/foodshare-11.png", alt: "Responsive Design" },
    ],
    links: [
      {
        type: "live",
        url: "https://foodshare-mu.vercel.app/",
        label: "Live Platform",
      },
      {
        type: "github",
        url: "https://github.com/DilukM/food-waste-platform.git",
        label: "GitHub Repository",
      },
    ],
    date: "2025",
    duration: "1 week",
    client: "Personal Project",
    role: "Full Stack Developer",
  },
];
