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

interface CustomAnimationsArticleViewProps {
  slug: string;
}

export function CustomAnimationsArticleView({ slug }: CustomAnimationsArticleViewProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState<any>(null);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  // Simulate loading article data
  useEffect(() => {
    // In a real app, you would fetch the article data based on the slug
    const timer = setTimeout(() => {
      // Mock article data for the custom animations article
      setArticle({
        title: "Creating Custom Animations in Flutter",
        excerpt:
          "A deep dive into Flutter's animation system and how to create custom animations.",
        content: `
          <p>Animations are a crucial part of modern mobile applications, enhancing user experience and providing visual feedback. Flutter provides a powerful and flexible animation system that allows developers to create beautiful, custom animations. This article will take you through Flutter's animation framework and show you how to build impressive custom animations.</p>
          
          <h2>Understanding Flutter's Animation System</h2>
          
          <p>Flutter's animation system is based on the Animation class, which represents a value that changes over time. Before diving into code examples, let's understand the key components:</p>
          
          <ul>
            <li><strong>Animation</strong>: A core class that understands interpolation and state (completed, dismissed)</li>
            <li><strong>AnimationController</strong>: Controls the animation (play, pause, reverse, etc.)</li>
            <li><strong>Tween</strong>: Maps the animation progress to a range of values</li>
            <li><strong>AnimatedBuilder/AnimatedWidget</strong>: Widgets that rebuild when animations change</li>
          </ul>
          
          <h2>1. Basic Animation Using AnimationController</h2>
          
          <p>Let's start with a simple animation that scales a container:</p>
          
          <pre>
class ScaleAnimationDemo extends StatefulWidget {
  @override
  _ScaleAnimationDemoState createState() => _ScaleAnimationDemoState();
}

class _ScaleAnimationDemoState extends State<ScaleAnimationDemo> 
    with SingleTickerProviderStateMixin {
  
  late AnimationController _controller;
  late Animation<double> _animation;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      duration: Duration(seconds: 2),
      vsync: this,
    );
    
    _animation = Tween<double>(begin: 0, end: 200).animate(_controller)
      ..addListener(() {
        setState(() {});  // Trigger rebuild when animation changes
      });
      
    _controller.forward();  // Start the animation
  }

  @override
  void dispose() {
    _controller.dispose();  // Important to dispose controllers
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Container(
        width: _animation.value,
        height: _animation.value,
        color: Colors.blue,
      ),
    );
  }
}
          </pre>
          
          <p>In this example, we're creating an animation that changes a value from 0 to 200 over 2 seconds, and we're using that value to set the dimensions of our container.</p>
          
          <h2>2. Using AnimatedBuilder for Cleaner Code</h2>
          
          <p>The previous example works but using setState for animation isn't optimal. AnimatedBuilder provides a more efficient way:</p>
          
          <pre>
class ImprovedScaleAnimation extends StatefulWidget {
  @override
  _ImprovedScaleAnimationState createState() => _ImprovedScaleAnimationState();
}

class _ImprovedScaleAnimationState extends State<ImprovedScaleAnimation>
    with SingleTickerProviderStateMixin {
  
  late AnimationController _controller;
  late Animation<double> _animation;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      duration: Duration(seconds: 2),
      vsync: this,
    );
    
    _animation = Tween<double>(begin: 0, end: 200).animate(_controller);
    _controller.forward();
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: _animation,
      builder: (context, child) {
        return Center(
          child: Container(
            width: _animation.value,
            height: _animation.value,
            color: Colors.green,
            child: child,
          ),
        );
      },
      child: Center(
        child: Text('Animated!', style: TextStyle(color: Colors.white)),
      ),
    );
  }
}
          </pre>
          
          <p>AnimatedBuilder rebuilds only the parts affected by the animation, not the entire widget tree. The child parameter is particularly useful because it's built only once and reused.</p>
          
          <h2>3. Creating Complex Animations with Curves</h2>
          
          <p>Animations don't have to be linear. Flutter provides various curves to control the rate of change:</p>
          
          <pre>
// Creating a curved animation
_animation = Tween<double>(begin: 0, end: 200).animate(
  CurvedAnimation(
    parent: _controller,
    curve: Curves.elasticOut,
  ),
);
          </pre>
          
          <p>Some commonly used curves include:</p>
          <ul>
            <li><strong>Curves.linear</strong>: Constant rate of change</li>
            <li><strong>Curves.easeIn</strong>: Starts slowly, speeds up</li>
            <li><strong>Curves.easeOut</strong>: Starts quickly, slows down</li>
            <li><strong>Curves.bounceOut</strong>: Adds a bouncing effect at the end</li>
            <li><strong>Curves.elasticIn</strong>: Creates an elastic effect at the start</li>
          </ul>
          
          <h2>4. Staggered Animations</h2>
          
          <p>Staggered animations involve multiple animations that start at different times but are controlled by a single controller:</p>
          
          <pre>
class StaggeredAnimationDemo extends StatefulWidget {
  @override
  _StaggeredAnimationDemoState createState() => _StaggeredAnimationDemoState();
}

class _StaggeredAnimationDemoState extends State<StaggeredAnimationDemo>
    with SingleTickerProviderStateMixin {
  
  late AnimationController _controller;
  late Animation<double> _opacity;
  late Animation<double> _width;
  late Animation<double> _height;
  late Animation<EdgeInsets> _padding;
  late Animation<BorderRadius> _borderRadius;
  late Animation<Color?> _color;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      duration: Duration(seconds: 4),
      vsync: this,
    );
    
    // Defining intervals for each animation in the sequence
    _opacity = Tween<double>(begin: 0.0, end: 1.0)
        .animate(CurvedAnimation(
          parent: _controller,
          curve: Interval(0.0, 0.25, curve: Curves.ease),
        ));
        
    _width = Tween<double>(begin: 50.0, end: 200.0)
        .animate(CurvedAnimation(
          parent: _controller,
          curve: Interval(0.25, 0.5, curve: Curves.ease),
        ));
        
    _height = Tween<double>(begin: 50.0, end: 200.0)
        .animate(CurvedAnimation(
          parent: _controller,
          curve: Interval(0.5, 0.75, curve: Curves.ease),
        ));
        
    _padding = EdgeInsetsTween(
      begin: EdgeInsets.only(bottom: 16.0),
      end: EdgeInsets.only(bottom: 75.0),
    ).animate(CurvedAnimation(
      parent: _controller,
      curve: Interval(0.5, 0.75, curve: Curves.ease),
    ));
    
    _borderRadius = BorderRadiusTween(
      begin: BorderRadius.circular(4.0),
      end: BorderRadius.circular(75.0),
    ).animate(CurvedAnimation(
      parent: _controller,
      curve: Interval(0.75, 1.0, curve: Curves.ease),
    ));
    
    _color = ColorTween(
      begin: Colors.blue,
      end: Colors.purple,
    ).animate(CurvedAnimation(
      parent: _controller,
      curve: Interval(0.75, 1.0, curve: Curves.ease),
    ));
    
    _controller.forward();
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: _controller,
      builder: (context, child) {
        return Center(
          child: Opacity(
            opacity: _opacity.value,
            child: Container(
              width: _width.value,
              height: _height.value,
              padding: _padding.value,
              decoration: BoxDecoration(
                color: _color.value,
                borderRadius: _borderRadius.value,
              ),
              child: child,
            ),
          ),
        );
      },
      child: Center(
        child: Text(
          'Staggered Animation',
          style: TextStyle(color: Colors.white),
          textAlign: TextAlign.center,
        ),
      ),
    );
  }
}
          </pre>
          
          <p>In this example, we've created multiple animations with different intervals, all controlled by a single AnimationController. This creates a sequence of animations that flow naturally from one to another.</p>
          
          <h2>5. Custom Tween Classes</h2>
          
          <p>For complex animations that involve custom objects, you can create your own Tween class:</p>
          
          <pre>
class MyPosition {
  final double x, y;
  MyPosition(this.x, this.y);
}

class MyPositionTween extends Tween<MyPosition> {
  MyPositionTween({MyPosition? begin, MyPosition? end})
      : super(begin: begin, end: end);

  @override
  MyPosition lerp(double t) {
    return MyPosition(
      begin!.x + (end!.x - begin!.x) * t,
      begin!.y + (end!.y - begin!.y) * t,
    );
  }
}

// Usage:
final animation = MyPositionTween(
  begin: MyPosition(0, 0),
  end: MyPosition(100, 200),
).animate(_controller);
          </pre>
          
          <h2>6. Using Hero Animations for Transitions</h2>
          
          <p>Hero animations create a visual connection between different screens:</p>
          
          <pre>
// On the first screen
Hero(
  tag: 'imageHero',
  child: Image.asset('assets/my_image.png'),
)

// On the second screen
Hero(
  tag: 'imageHero',
  child: Image.asset('assets/my_image.png'),
)
          </pre>
          
          <p>With the same tag, Flutter will animate the image from one screen to another during navigation.</p>
          
          <h2>7. Custom Animated Widgets</h2>
          
          <p>For reusable animated components, create custom animated widgets:</p>
          
          <pre>
class PulsatingCircle extends StatefulWidget {
  final Color color;
  final double size;
  
  const PulsatingCircle({
    Key? key,
    this.color = Colors.blue,
    this.size = 100.0,
  }) : super(key: key);

  @override
  _PulsatingCircleState createState() => _PulsatingCircleState();
}

class _PulsatingCircleState extends State<PulsatingCircle>
    with SingleTickerProviderStateMixin {
  
  late AnimationController _controller;
  late Animation<double> _animation;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      duration: Duration(seconds: 2),
      vsync: this,
    )..repeat(reverse: true);
    
    _animation = Tween<double>(begin: 1.0, end: 1.5)
        .animate(CurvedAnimation(
          parent: _controller,
          curve: Curves.easeInOut,
        ));
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: _animation,
      builder: (context, child) {
        return Transform.scale(
          scale: _animation.value,
          child: Container(
            width: widget.size,
            height: widget.size,
            decoration: BoxDecoration(
              color: widget.color.withOpacity(1.0 / _animation.value),
              shape: BoxShape.circle,
            ),
          ),
        );
      },
    );
  }
}
          </pre>
          
          <p>This creates a reusable pulsating circle widget that you can use anywhere in your app.</p>
          
          <h2>8. Implicit Animations</h2>
          
          <p>For simpler cases, Flutter provides built-in implicit animation widgets like AnimatedContainer:</p>
          
          <pre>
class ImplicitAnimationDemo extends StatefulWidget {
  @override
  _ImplicitAnimationDemoState createState() => _ImplicitAnimationDemoState();
}

class _ImplicitAnimationDemoState extends State<ImplicitAnimationDemo> {
  bool _isExpanded = false;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        setState(() {
          _isExpanded = !_isExpanded;
        });
      },
      child: Center(
        child: AnimatedContainer(
          duration: Duration(seconds: 1),
          curve: Curves.easeInOut,
          width: _isExpanded ? 200.0 : 100.0,
          height: _isExpanded ? 200.0 : 100.0,
          color: _isExpanded ? Colors.purple : Colors.blue,
          child: Center(
            child: Text(
              'Tap me',
              style: TextStyle(color: Colors.white),
            ),
          ),
        ),
      ),
    );
  }
}
          </pre>
          
          <p>Some other useful implicit animation widgets include:</p>
          <ul>
            <li><strong>AnimatedOpacity</strong>: Animate changes in opacity</li>
            <li><strong>AnimatedPadding</strong>: Animate padding changes</li>
            <li><strong>AnimatedPositioned</strong>: Animate position in a Stack</li>
            <li><strong>AnimatedSwitcher</strong>: Animate between different widgets</li>
            <li><strong>AnimatedCrossFade</strong>: Crossfade between two widgets</li>
          </ul>
          
          <h2>9. Combining Animations with Physics</h2>
          
          <p>Flutter's physics simulation can create natural-feeling animations:</p>
          
          <pre>
// Spring animation
final SpringSimulation spring = SpringSimulation(
  SpringDescription(
    mass: 1.0,
    stiffness: 100.0,
    damping: 10.0,
  ),
  0.0, // Starting position
  1.0, // Ending position
  0.0, // Starting velocity
);

_controller = AnimationController(vsync: this)
  ..animateWith(spring);
          </pre>
          
          <h2>10. Lottie Animations</h2>
          
          <p>For complex animations designed in After Effects, use the Lottie package:</p>
          
          <pre>
// Add to pubspec.yaml:
// dependencies:
//   lottie: ^1.4.3

// In your widget:
import 'package:lottie/lottie.dart';

// Simple usage
Lottie.asset('assets/animation.json')

// Controlled animation
Lottie.asset(
  'assets/animation.json',
  controller: _controller,
  onLoaded: (composition) {
    _controller.duration = composition.duration;
    _controller.forward();
  },
)
          </pre>
          
          <h2>Best Practices for Flutter Animations</h2>
          
          <ol>
            <li><strong>Keep animations subtle and purposeful</strong>. Animations should enhance UX, not distract from it.</li>
            <li><strong>Use AnimatedBuilder or AnimatedWidget</strong> instead of setState for better performance.</li>
            <li><strong>Always dispose of your AnimationControllers</strong> to prevent memory leaks.</li>
            <li><strong>Test animations on lower-end devices</strong> to ensure they run smoothly.</li>
            <li><strong>Consider using simpler implicit animations</strong> when they meet your needs.</li>
            <li><strong>Use Hero animations</strong> to create visual continuity between screens.</li>
            <li><strong>For complex animations</strong>, break them down into smaller, composable parts.</li>
          </ol>
          
          <h2>Conclusion</h2>
          
          <p>Flutter's animation system provides incredible flexibility for creating engaging user experiences. By understanding the core concepts of AnimationController, Tween, and various animation widgets, you can build beautiful, custom animations that make your app stand out.</p>
          
          <p>Start with simple animations and gradually explore more complex techniques as you become comfortable with the system. Remember that great animations enhance the user experience without calling too much attention to themselves.</p>
          
          <p>With the techniques covered in this article, you now have a solid foundation to create stunning animations in your Flutter applications.</p>
        `,
        author: {
          name: "Diluk Udayakantha",
          image: "/portrait.jpg",
          role: "Flutter Developer",
        },
        date: "Feb 10, 2025",
        readTime: "6 min read",
        image: "/Flutter Architecture Best Practices.jpg",
        tags: ["Flutter", "Animations"],
        relatedArticles: [
          {
            title: "Building Performant Flutter Apps",
            excerpt:
              "Tips and tricks for optimizing Flutter applications for better performance.",
            image: "/Flutter Architecture Best Practices.jpg",
            slug: "building-performant-flutter-apps",
          },
          {
            title: "State Management in Flutter",
            excerpt:
              "Comparing different state management solutions in Flutter and when to use each.",
            image: "/Flutter Architecture Best Practices.jpg",
            slug: "state-management-flutter",
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
            <div className="prose prose-invert max-w-none prose-headings:text-purple-300 prose-a:text-pink-400 prose-strong:text-white prose-code:text-pink-300 prose-pre:bg-slate-800 prose-pre:border prose-pre:border-purple-500/20 prose-pre:rounded-lg prose-table:border-collapse prose-td:border prose-td:border-purple-500/20 prose-td:p-2 prose-th:border prose-th:border-purple-500/20 prose-th:p-2">
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
              className="group cursor-pointer"
              onClick={() => router.push(`/blog/${relatedArticle.slug}`)}
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
