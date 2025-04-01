"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Bookmark,
  Heart,
  MessageCircle,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

interface PerformanceArticleViewProps {
  slug: string;
}

export function PerformanceArticleView({ slug }: PerformanceArticleViewProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState<any>(null);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  // Simulate loading article data
  useEffect(() => {
    // In a real app, you would fetch the article data based on the slug
    const timer = setTimeout(() => {
      // Mock article data for the performance article
      setArticle({
        title: "Building Performant Flutter Apps",
        excerpt:
          "Tips and tricks for optimizing Flutter applications for better performance.",
        content: `
          <p>Performance is critical for mobile applications. In Flutter, achieving smooth 60fps animations and quick response times requires attention to detail and following best practices. This article explores key techniques to optimize your Flutter app's performance.</p>
          
          <h2>Understanding Flutter's Rendering Pipeline</h2>
          <p>Before diving into optimization techniques, it's important to understand how Flutter renders your UI:</p>
          
          <ol>
            <li><strong>Build</strong> - Widget constructors execute and build method is called</li>
            <li><strong>Layout</strong> - Flutter calculates the size and position of elements</li>
            <li><strong>Paint</strong> - The UI is rasterized to pixels</li>
            <li><strong>Composite</strong> - Layers are composited together and displayed</li>
          </ol>
          
          <p>Optimization strategies target different parts of this pipeline.</p>
          
          <h2>1. Minimize Rebuilds with const Constructors</h2>
          <p>Using <code>const</code> constructors for widgets that don't change can significantly improve performance:</p>
          
          <pre>
// Instead of this
return Container(
  color: Colors.blue,
  child: Text('Hello'),
);

// Do this
return const Container(
  color: Colors.blue,
  child: Text('Hello'),
);
          </pre>
          
          <p>The <code>const</code> keyword tells Flutter that this widget is immutable and can be reused across builds.</p>
          
          <h2>2. Use StatefulWidget Wisely</h2>
          <p><code>StatefulWidget</code> is more expensive than <code>StatelessWidget</code>. Only use StatefulWidget when you need to maintain state:</p>
          
          <ul>
            <li>Break complex widgets into smaller ones</li>
            <li>Extract stateful parts into separate widgets</li>
            <li>Use const for parts that don't change</li>
          </ul>
          
          <h2>3. Optimize Lists with ListView.builder</h2>
          <p>When dealing with long lists, use <code>ListView.builder</code> instead of creating all items at once:</p>
          
          <pre>
// Inefficient for long lists
return ListView(
  children: items.map((item) => ItemWidget(item)).toList(),
);

// Much more efficient
return ListView.builder(
  itemCount: items.length,
  itemBuilder: (context, index) => ItemWidget(items[index]),
);
          </pre>
          
          <p>This approach only builds items as they become visible, dramatically reducing memory usage and build time.</p>
          
          <h2>4. Image Optimization Techniques</h2>
          
          <h3>Precaching Images</h3>
          <p>Precache images to avoid janky scrolling when images load:</p>
          
          <pre>
@override
void initState() {
  super.initState();
  precacheImage(NetworkImage('https://example.com/image.jpg'), context);
}
          </pre>
          
          <h3>Resize Images Server-Side</h3>
          <p>Don't load full-sized images if you're displaying thumbnails. Use server-side resizing or a service like Cloudinary.</p>
          
          <h3>Use Appropriate Image Formats</h3>
          <p>WebP offers better compression than PNG or JPEG while maintaining quality. Consider converting your assets.</p>
          
          <h2>5. Avoid Expensive Operations in Build Methods</h2>
          <p>Never perform expensive operations in build methods:</p>
          
          <pre>
// Bad practice
@override
Widget build(BuildContext context) {
  final processedData = expensiveCalculation(); // Don't do this!
  return Text(processedData);
}

// Better approach
@override
void initState() {
  super.initState();
  _processedData = expensiveCalculation();
}

@override
Widget build(BuildContext context) {
  return Text(_processedData);
}
          </pre>
          
          <h2>6. Use RepaintBoundary for Complex Animations</h2>
          <p>Wrap complex animated widgets with RepaintBoundary to isolate their repainting:</p>
          
          <pre>
RepaintBoundary(
  child: AnimatedWidget(),
)
          </pre>
          
          <p>This creates a new layer that can be updated independently of the rest of the UI.</p>
          
          <h2>7. Memory Management Best Practices</h2>
          
          <ul>
            <li><strong>Dispose Controllers</strong> - Always dispose of any controllers in the dispose method</li>
            <li><strong>Cancel Subscriptions</strong> - Clean up stream subscriptions to prevent memory leaks</li>
            <li><strong>Use SizedBox or Container with fixed sizes</strong> - This helps Flutter optimize layout calculations</li>
          </ul>
          
          <h2>8. Profile Your App Regularly</h2>
          <p>Use Flutter's built-in performance tools:</p>
          
          <ul>
            <li><strong>DevTools</strong> - Analyze widget rebuilds, GPU rendering, and CPU usage</li>
            <li><strong>Performance Overlay</strong> - Check UI and raster thread performance</li>
            <li><strong>Timeline Events</strong> - Identify bottlenecks in your code</li>
          </ul>
          
          <pre>
// Enable performance overlay in debug mode
void main() {
  runApp(
    MaterialApp(
      showPerformanceOverlay: true,
      home: MyApp(),
    ),
  );
}
          </pre>
          
          <h2>9. Optimize State Management</h2>
          <p>Choose appropriate state management solutions:</p>
          
          <ul>
            <li>Use Provider or Riverpod for efficient rebuilds</li>
            <li>Consider using <code>Consumer</code> widgets to rebuild only necessary parts</li>
            <li>Use <code>select</code> to listen to specific parts of your state</li>
          </ul>
          
          <h2>10. Implement Pagination</h2>
          <p>For large datasets, implement pagination to load data as needed:</p>
          
          <pre>
ListView.builder(
  controller: _scrollController, // Use this to detect when to load more
  itemCount: items.length + (hasMoreItems ? 1 : 0),
  itemBuilder: (context, index) {
    if (index >= items.length) {
      return LoadingIndicator();
    }
    return ItemWidget(items[index]);
  },
)
          </pre>
          
          <h2>Conclusion</h2>
          <p>Building performant Flutter apps requires a combination of understanding the framework's rendering pipeline, following best practices, and regular profiling. By implementing these techniques, you can ensure your Flutter app provides a smooth and responsive experience to users.</p>
          
          <p>Remember that premature optimization can lead to overly complex code. Always measure first to identify real bottlenecks before optimizing.</p>
        `,
        author: {
          name: "Diluk Udayakantha",
          image: "/portrait.jpg",
          role: "Freelance Flutter Developer",
        },
        date: "May 15, 2023",
        readTime: "5 min read",
        image: "/Flutter Architecture Best Practices.jpg",
        tags: ["Flutter", "Performance"],
        relatedArticles: [
          {
            title: "State Management in Flutter",
            excerpt:
              "Comparing different state management solutions in Flutter and when to use each.",
            image: "/Flutter Architecture Best Practices.jpg",
            slug: "state-management-flutter",
          },
          {
            title: "Flutter Architecture Best Practices",
            excerpt:
              "A comprehensive guide to structuring your Flutter applications for scalability and maintainability.",
            image: "/Flutter Architecture Best Practices.jpg",
            slug: "flutter-architecture-best-practices",
          },
        ],
      });
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [slug]);

  const handleBack = () => {
    router.back();
  };

  const handleShare = () => {
    // In a real app, implement sharing functionality
    alert("Sharing article: " + slug);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full border-4 border-t-purple-600 border-r-transparent border-b-pink-500 border-l-transparent animate-spin mb-4"></div>
          <p className="text-muted-foreground">Loading article...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20">
      {/* Floating back button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-16 left-3 z-40"
      >
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-background/70 backdrop-blur-lg border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.3)]"
          onClick={handleBack}
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="sr-only">Back</span>
        </Button>
      </motion.div>

      {/* Article header */}
      <div className="relative">
        <div className="h-48 md:h-64 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90 z-10"></div>
          <Image
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="relative -mt-24 z-20 px-3 sm:px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="border border-purple-500/20 bg-background/80 backdrop-blur-lg overflow-hidden shadow-[0_0_25px_rgba(168,85,247,0.2)]">
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {article.tags.map((tag: string, index: number) => (
                    <Badge
                      key={index}
                      className="bg-gradient-to-r from-purple-600 to-pink-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                  {article.title}
                </h1>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0 mb-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden mr-3">
                      <Image
                        src={article.author.image || "/placeholder.svg"}
                        alt={article.author.name}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium">
                        {article.author.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {article.author.role}
                      </p>
                    </div>
                  </div>
                  <div className="sm:ml-auto flex items-center text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5 mr-1" />
                    {article.date}
                    <span className="mx-2">•</span>
                    <Clock className="h-3.5 w-3.5 mr-1" />
                    {article.readTime}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 justify-between">
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className={`rounded-full border-purple-500/30 ${
                        liked ? "bg-pink-500/10 text-pink-500" : ""
                      }`}
                      onClick={() => setLiked(!liked)}
                    >
                      <Heart
                        className={`h-4 w-4 mr-1 ${
                          liked ? "fill-pink-500" : ""
                        }`}
                      />
                      Like
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full border-purple-500/30"
                    >
                      <MessageCircle className="h-4 w-4 mr-1" />
                      Comment
                    </Button>
                  </div>
                  <div className="flex gap-2 mt-2 sm:mt-0">
                    <Button
                      variant="outline"
                      size="sm"
                      className={`rounded-full border-purple-500/30 ${
                        bookmarked ? "bg-purple-500/10 text-purple-500" : ""
                      }`}
                      onClick={() => setBookmarked(!bookmarked)}
                    >
                      <Bookmark
                        className={`h-4 w-4 mr-1 ${
                          bookmarked ? "fill-purple-500" : ""
                        }`}
                      />
                      Save
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full border-purple-500/30"
                      onClick={handleShare}
                    >
                      <Share2 className="h-4 w-4 mr-1" />
                      Share
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Article content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="px-3 sm:px-4 py-6"
      >
        <Card className="border border-purple-500/20 bg-background/80 backdrop-blur-lg overflow-hidden shadow-[0_0_25px_rgba(168,85,247,0.2)]">
          <CardContent className="p-4 sm:p-6">
            <div className="prose prose-invert max-w-none prose-headings:text-purple-300 prose-a:text-pink-400 prose-strong:text-white prose-code:text-pink-300 prose-pre:bg-slate-800 prose-pre:border prose-pre:border-purple-500/20 prose-pre:rounded-lg">
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Related articles */}
      <div className="px-3 sm:px-4 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-6"
        >
          <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text inline-block mb-4">
            Related Articles
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {article.relatedArticles.map((relatedArticle: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full overflow-hidden border border-purple-500/20 bg-background/80 backdrop-blur-lg shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                <div className="relative h-32 sm:h-40 overflow-hidden">
                  <Image
                    src={relatedArticle.image || "/placeholder.svg"}
                    alt={relatedArticle.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-4 sm:p-5">
                  <h3 className="text-base sm:text-lg font-semibold mb-2">
                    {relatedArticle.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                    {relatedArticle.excerpt}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="group p-0 h-auto text-purple-400 hover:text-purple-300"
                    onClick={() => router.push(`/blog/${relatedArticle.slug}`)}
                  >
                    Read Article
                    <ChevronRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating action buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="fixed bottom-20 right-3 z-40 flex flex-col gap-2"
      >
        <Button
          variant="outline"
          size="icon"
          className={`rounded-full bg-background/70 backdrop-blur-lg border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.3)] h-10 w-10 ${
            liked ? "bg-pink-500/20" : ""
          }`}
          onClick={() => setLiked(!liked)}
        >
          <Heart
            className={`h-4 w-4 ${liked ? "fill-pink-500 text-pink-500" : ""}`}
          />
          <span className="sr-only">Like</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className={`rounded-full bg-background/70 backdrop-blur-lg border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.3)] h-10 w-10 ${
            bookmarked ? "bg-purple-500/20" : ""
          }`}
          onClick={() => setBookmarked(!bookmarked)}
        >
          <Bookmark
            className={`h-4 w-4 ${
              bookmarked ? "fill-purple-500 text-purple-500" : ""
            }`}
          />
          <span className="sr-only">Bookmark</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-background/70 backdrop-blur-lg border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.3)] h-10 w-10"
          onClick={handleShare}
        >
          <Share2 className="h-4 w-4" />
          <span className="sr-only">Share</span>
        </Button>
      </motion.div>
    </div>
  );
}