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

interface StateManagementArticleViewProps {
  slug: string;
}

export function StateManagementArticleView({ slug }: StateManagementArticleViewProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState<any>(null);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  // Simulate loading article data
  useEffect(() => {
    // In a real app, you would fetch the article data based on the slug
    const timer = setTimeout(() => {
      // Mock article data for the state management article
      setArticle({
        title: "State Management in Flutter",
        excerpt:
          "Comparing different state management solutions in Flutter and when to use each.",
        content: `
          <p>State management is one of the most important concepts to understand when building Flutter applications. Choosing the right strategy can make your app easier to develop, debug, and maintain. This article explores various state management solutions in Flutter and helps you decide which one to use for different scenarios.</p>
          
          <h2>Understanding State in Flutter</h2>
          
          <p>Before diving into different state management solutions, let's understand what state actually means in a Flutter application:</p>
          
          <ul>
            <li><strong>Ephemeral (Local) State:</strong> UI state that is contained within a single widget (like scroll position, form inputs)</li>
            <li><strong>App State:</strong> State that is shared across multiple widgets or the entire app (user data, authentication status, app configuration)</li>
          </ul>
          
          <p>The complexity of your state management should match the complexity of your app's state.</p>
          
          <h2>1. setState - The Simplest Solution</h2>
          
          <p>Flutter's built-in <code>setState()</code> method is the simplest way to manage local state:</p>
          
          <pre>
class CounterWidget extends StatefulWidget {
  @override
  _CounterWidgetState createState() => _CounterWidgetState();
}

class _CounterWidgetState extends State<CounterWidget> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text('Count: $_counter'),
        ElevatedButton(
          onPressed: _incrementCounter,
          child: Text('Increment'),
        ),
      ],
    );
  }
}
          </pre>
          
          <h3>When to use setState:</h3>
          <ul>
            <li>For simple UI state that's confined to a single widget</li>
            <li>When you're learning Flutter for the first time</li>
            <li>For small-scale apps with minimal state requirements</li>
          </ul>
          
          <h2>2. InheritedWidget and InheritedModel</h2>
          
          <p>InheritedWidget is the foundation of state management in Flutter. Many popular packages are built on top of this concept:</p>
          
          <pre>
class CounterProvider extends InheritedWidget {
  final int counter;
  final Function increment;
  
  CounterProvider({
    Key? key,
    required Widget child,
    required this.counter,
    required this.increment,
  }) : super(key: key, child: child);
  
  static CounterProvider of(BuildContext context) {
    return context.dependOnInheritedWidgetOfExactType<CounterProvider>()!;
  }
  
  @override
  bool updateShouldNotify(CounterProvider oldWidget) {
    return oldWidget.counter != counter;
  }
}
          </pre>
          
          <h3>When to use InheritedWidget:</h3>
          <ul>
            <li>When you want to understand state management fundamentals</li>
            <li>For creating custom state management solutions</li>
            <li>When you need fine-grained control over widget rebuilds</li>
          </ul>
          
          <h2>3. Provider</h2>
          
          <p>Provider is a wrapper around InheritedWidget to make it easier to use and test:</p>
          
          <pre>
// Define your model
class CounterModel with ChangeNotifier {
  int _count = 0;
  int get count => _count;

  void increment() {
    _count++;
    notifyListeners();
  }
}

// Set up the provider
void main() {
  runApp(
    ChangeNotifierProvider(
      create: (context) => CounterModel(),
      child: MyApp(),
    ),
  );
}

// Use the provider in your widgets
class CounterDisplay extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Consumer<CounterModel>(
      builder: (context, counter, child) => Text(
        'Count: \${counter.count}',
      ),
    );
  }
}

class CounterIncrement extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: () => context.read<CounterModel>().increment(),
      child: Text('Increment'),
    );
  }
}
          </pre>
          
          <h3>When to use Provider:</h3>
          <ul>
            <li>For small to medium-sized applications</li>
            <li>When you need a simple, lightweight solution</li>
            <li>As an introduction to reactive programming concepts</li>
          </ul>
          
          <h2>4. Riverpod</h2>
          
          <p>Riverpod is an improved version of Provider that solves some of its limitations:</p>
          
          <pre>
// Define your providers
final counterProvider = StateNotifierProvider<CounterNotifier, int>((ref) {
  return CounterNotifier();
});

class CounterNotifier extends StateNotifier<int> {
  CounterNotifier() : super(0);
  
  void increment() => state++;
}

// Use the provider
class CounterWidget extends ConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final count = ref.watch(counterProvider);
    
    return Column(
      children: [
        Text('Count: $count'),
        ElevatedButton(
          onPressed: () => ref.read(counterProvider.notifier).increment(),
          child: Text('Increment'),
        ),
      ],
    );
  }
}
          </pre>
          
          <h3>When to use Riverpod:</h3>
          <ul>
            <li>When you need compile-time safety for your providers</li>
            <li>For better testability and maintainability</li>
            <li>When you've outgrown Provider</li>
          </ul>
          
          <h2>5. Bloc Pattern</h2>
          
          <p>BLoC (Business Logic Component) separates presentation from business logic using streams:</p>
          
          <pre>
// Define your events
abstract class CounterEvent {}
class IncrementEvent extends CounterEvent {}

// Define your bloc
class CounterBloc extends Bloc<CounterEvent, int> {
  CounterBloc() : super(0) {
    on<IncrementEvent>((event, emit) {
      emit(state + 1);
    });
  }
}

// Use your bloc
class CounterPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      create: (context) => CounterBloc(),
      child: CounterView(),
    );
  }
}

class CounterView extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        BlocBuilder<CounterBloc, int>(
          builder: (context, count) {
            return Text('Count: $count');
          },
        ),
        ElevatedButton(
          onPressed: () => 
            context.read<CounterBloc>().add(IncrementEvent()),
          child: Text('Increment'),
        ),
      ],
    );
  }
}
          </pre>
          
          <h3>When to use BLoC:</h3>
          <ul>
            <li>For larger applications with complex business logic</li>
            <li>When working with reactive streams is preferred</li>
            <li>For teams with clear separation of concerns</li>
          </ul>
          
          <h2>6. GetX</h2>
          
          <p>GetX offers a lightweight solution with minimal boilerplate:</p>
          
          <pre>
// Define your controller
class CounterController extends GetxController {
  var count = 0.obs;
  
  void increment() => count++;
}

// Use your controller
class CounterWidget extends StatelessWidget {
  final CounterController controller = Get.put(CounterController());
  
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Obx(() => Text('Count: \${controller.count}')),
        ElevatedButton(
          onPressed: controller.increment,
          child: Text('Increment'),
        ),
      ],
    );
  }
}
          </pre>
          
          <h3>When to use GetX:</h3>
          <ul>
            <li>When you need a quick development cycle</li>
            <li>If you prefer minimal boilerplate code</li>
            <li>For projects that need integrated navigation and dependency injection</li>
          </ul>
          
          <h2>7. MobX</h2>
          
          <p>MobX is a battle-tested library that provides a simple way of managing state:</p>
          
          <pre>
// Define your store
class CounterStore = _CounterStore with _$CounterStore;

abstract class _CounterStore with Store {
  @observable
  int count = 0;
  
  @action
  void increment() {
    count++;
  }
}

// Use your store
class CounterWidget extends StatelessWidget {
  final CounterStore store = CounterStore();
  
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Observer(
          builder: (_) => Text('Count: \${store.count}'),
        ),
        ElevatedButton(
          onPressed: store.increment,
          child: Text('Increment'),
        ),
      ],
    );
  }
}
          </pre>
          
          <h3>When to use MobX:</h3>
          <ul>
            <li>For teams familiar with MobX from web development</li>
            <li>When you need transparent reactive programming</li>
            <li>For applications with complex interdependent state</li>
          </ul>
          
          <h2>8. Redux</h2>
          
          <p>Redux provides a predictable state container with a unidirectional data flow:</p>
          
          <pre>
// Define actions
enum Actions { Increment }

// Define reducer
int counterReducer(int state, dynamic action) {
  if (action == Actions.Increment) {
    return state + 1;
  }
  return state;
}

// Set up store
final store = Store<int>(counterReducer, initialState: 0);

// Use in widgets
class CounterWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return StoreConnector<int, int>(
      converter: (store) => store.state,
      builder: (context, count) {
        return Column(
          children: [
            Text('Count: $count'),
            ElevatedButton(
              onPressed: () => 
                StoreProvider.of<int>(context)
                  .dispatch(Actions.Increment),
              child: Text('Increment'),
            ),
          ],
        );
      },
    );
  }
}
          </pre>
          
          <h3>When to use Redux:</h3>
          <ul>
            <li>For large applications with complex state transitions</li>
            <li>When you need time-travel debugging</li>
            <li>For teams already familiar with Redux from web development</li>
          </ul>
          
          <h2>Choosing the Right Solution</h2>
          
          <p>There's no one-size-fits-all answer to state management in Flutter. Here's a quick decision guide:</p>
          
          <table>
            <thead>
              <tr>
                <th>Solution</th>
                <th>Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>setState</td>
                <td>Small widgets with local state</td>
              </tr>
              <tr>
                <td>Provider</td>
                <td>Small to medium apps, getting started with state management</td>
              </tr>
              <tr>
                <td>Riverpod</td>
                <td>Medium-sized apps, improved Provider experience</td>
              </tr>
              <tr>
                <td>Bloc</td>
                <td>Large apps with complex business logic</td>
              </tr>
              <tr>
                <td>GetX</td>
                <td>Rapid development with minimal boilerplate</td>
              </tr>
              <tr>
                <td>MobX</td>
                <td>Reactive applications with complex state dependencies</td>
              </tr>
              <tr>
                <td>Redux</td>
                <td>Large applications with predictable state changes</td>
              </tr>
            </tbody>
          </table>
          
          <h2>Conclusion</h2>
          
          <p>The best state management solution depends on your app's requirements, team size, and personal preference. Start simple with setState or Provider, and only adopt more complex solutions as your needs grow.</p>
          
          <p>Remember that you can use different state management solutions for different parts of your app. For example, you might use setState for UI state and Riverpod for application state.</p>
          
          <p>Regardless of which solution you choose, the key is to be consistent, maintain clean architecture, and ensure your state flows in a predictable manner throughout your application.</p>
        `,
        author: {
          name: "Diluk Udayakantha",
          image: "/portrait.jpg",
          role: "Flutter Developer",
        },
        date: "April 02, 2025",
        readTime: "8 min read",
        image: "/Flutter Architecture Best Practices.jpg",
        tags: ["Flutter", "State Management"],
        relatedArticles: [
          {
            title: "Building Performant Flutter Apps",
            excerpt:
              "Tips and tricks for optimizing Flutter applications for better performance.",
            image: "/Flutter Architecture Best Practices.jpg",
            slug: "building-performant-flutter-apps",
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