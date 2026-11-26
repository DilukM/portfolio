export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  publishedTime: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPostMeta[] = [
  {
    slug: "flutter-architecture-best-practices",
    title: "Flutter Architecture Best Practices",
    excerpt:
      "A comprehensive guide to structuring your Flutter applications for scalability and maintainability. Learn how to organize your code, manage state effectively, and create reusable components.",
    image: "/Flutter Architecture Best Practices.jpg",
    date: "Jan 21, 2025",
    publishedTime: "2025-01-21T00:00:00.000Z",
    readTime: "12 min read",
    tags: ["Flutter", "Architecture", "Best Practices"],
  },
  {
    slug: "building-performant-flutter-apps",
    title: "Building Performant Flutter Apps",
    excerpt:
      "Tips and tricks for optimizing Flutter applications for better performance.",
    image: "/Flutter Architecture Best Practices.jpg",
    date: "Mar 15, 2025",
    publishedTime: "2025-03-15T00:00:00.000Z",
    readTime: "5 min read",
    tags: ["Flutter", "Performance"],
  },
  {
    slug: "state-management-flutter",
    title: "State Management in Flutter",
    excerpt:
      "Comparing different state management solutions in Flutter and when to use each.",
    image: "/Flutter Architecture Best Practices.jpg",
    date: "April 02, 2025",
    publishedTime: "2025-04-02T00:00:00.000Z",
    readTime: "8 min read",
    tags: ["Flutter", "State Management"],
  },
  {
    slug: "custom-animations-flutter",
    title: "Creating Custom Animations in Flutter",
    excerpt:
      "A deep dive into Flutter's animation system and how to create custom animations.",
    image: "/Flutter Architecture Best Practices.jpg",
    date: "Feb 10, 2025",
    publishedTime: "2025-02-10T00:00:00.000Z",
    readTime: "6 min read",
    tags: ["Flutter", "Animations"],
  },
];
