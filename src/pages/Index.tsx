import { ArrowRight, Zap, GitBranch, Shield, Cpu, Play, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CodeExamples from "@/components/CodeExamples";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Finito</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#examples" className="text-gray-600 hover:text-gray-900 transition-colors">Examples</a>
              <a href="#docs" className="text-gray-600 hover:text-gray-900 transition-colors">Docs</a>
              <Button size="sm">Get Started</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200">
            ☕ Java-powered state machines
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Build Reliable Java Apps with
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block mt-2">
              Finito State Machines
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Create predictable, maintainable Java applications with our powerful state machine framework. 
            Eliminate bugs, improve testing, and make complex business logic simple with type-safe state management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              <Play className="w-5 h-5 mr-2" />
              Try Interactive Demo
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 hover:bg-gray-50">
              <Code2 className="w-5 h-5 mr-2" />
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Finito for Java?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built specifically for Java developers who demand enterprise-grade reliability, performance, and maintainability.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Enterprise Performance</CardTitle>
                <CardDescription>
                  Optimized for JVM performance with minimal memory footprint and efficient state transitions for high-throughput applications.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Type Safe & Robust</CardTitle>
                <CardDescription>
                  Full compile-time type safety with Java generics, ensuring state transitions and actions are validated at build time.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <GitBranch className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Spring Integration</CardTitle>
                <CardDescription>
                  Seamlessly integrates with Spring Boot and Spring Framework with dependency injection and configuration support.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Code Examples Section - Now using the new component */}
      <CodeExamples />

      {/* Interactive Demo Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See It In Action
            </h2>
            <p className="text-xl text-gray-600">
              Interactive state diagram of an order processing system
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-2xl">
              <CardContent className="p-8">
                <div className="flex justify-center items-center space-x-8">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-20 h-20 rounded-full bg-orange-500 shadow-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xs">PENDING</span>
                    </div>
                    <div className="w-20 h-20 rounded-full bg-blue-200 shadow-lg flex items-center justify-center">
                      <span className="text-gray-500 font-bold text-xs">PROCESS</span>
                    </div>
                    <div className="w-20 h-20 rounded-full bg-yellow-200 shadow-lg flex items-center justify-center">
                      <span className="text-gray-500 font-bold text-xs">SHIPPED</span>
                    </div>
                    <div className="w-20 h-20 rounded-full bg-green-200 shadow-lg flex items-center justify-center">
                      <span className="text-gray-500 font-bold text-xs">DELIVERED</span>
                    </div>
                  </div>
                  <div className="flex-1 text-center">
                    <p className="text-lg text-gray-600 mb-6">Current State: <span className="font-bold text-orange-600">PENDING</span></p>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Process Order
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Better Java Apps?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of Java developers who trust Finito for their most critical enterprise applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Started Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Read the Docs
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Finito</span>
              </div>
              <p className="text-gray-400">
                The most developer-friendly Java state machine framework for enterprise applications.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Documentation</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Getting Started</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Spring Integration</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Stack Overflow</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Enterprise Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Finito. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
