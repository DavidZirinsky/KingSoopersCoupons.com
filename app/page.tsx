import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  Smartphone,
  Shield,
  Zap,
  Star,
  ArrowRight,
  Scissors,
  DollarSign,
} from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav
          className="flex items-center justify-between"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
              <Scissors className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <span className="text-2xl font-bold text-white">
              Coupon Clipper
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="#features"
              className="text-purple-200 hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="#download"
              className="text-purple-200 hover:text-white transition-colors"
            >
              Download
            </Link>
            <Link
              href="https://github.com/DavidZirinsky/Coupon-Clipper"
              className="text-purple-200 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-yellow-400 text-purple-900 hover:bg-yellow-300">
            <Star className="w-4 h-4 mr-2" aria-hidden="true" />
            Free & Open Source
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Never Miss a{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Coupon
            </span>{" "}
            Again
          </h1>

          <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Automatically clip all 250 digital coupons at King Soopers before
            you shop. Save money effortlessly with our browser extension.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 bg-gradient-to-r from-yellow-400 to-orange-500 p-6 rounded-lg shadow-lg">
            <Link
              href="https://chromewebstore.google.com/detail/coupon-clipper/mhlpjojbmabefhmkodfokajcdblpfoca"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Coupon Clipper for Chrome"
            >
              <img
                src="/images/chrome-badge.png"
                alt="Available in Chrome Web Store"
                width={250}
                height={75}
                className="hover:scale-105 transition-transform"
              />
            </Link>
            <Link
              href="https://addons.mozilla.org/en-GB/firefox/addon/coupon-clipper/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Coupon Clipper for Firefox"
            >
              <img
                src="/images/firefox-badge.png"
                alt="Get it on Firefox"
                width={230}
                height={75}
                className="hover:scale-105 transition-transform"
              />
            </Link>
          </div>

          <div className="relative max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <img
                src="/images/clip.png"
                alt="Coupon Clipper Extension Interface showing the clip coupons button"
                width={400}
                height={300}
                className="mx-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              We've All Been There...
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left space-y-6">
                <div className="flex items-start space-x-4">
                  <div
                    className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                    aria-hidden="true"
                  >
                    <span className="text-white font-bold">1</span>
                  </div>
                  <p className="text-purple-200 text-lg">
                    You see an item on sale at the store, but only with a
                    digital coupon
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div
                    className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                    aria-hidden="true"
                  >
                    <span className="text-white font-bold">2</span>
                  </div>
                  <p className="text-purple-200 text-lg">
                    You forgot to clip it beforehand
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div
                    className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                    aria-hidden="true"
                  >
                    <span className="text-white font-bold">3</span>
                  </div>
                  <p className="text-purple-200 text-lg">
                    Store WiFi is slow, mobile site won't load
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div
                    className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                    aria-hidden="true"
                  >
                    <span className="text-white font-bold">4</span>
                  </div>
                  <p className="text-purple-200 text-lg">
                    You end up paying full price 😤
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/in-store.jpg"
                  alt="King Soopers store pricing display showing regular price of $2.99 and digital coupon price of $1.49 for yellow peaches"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"
                  aria-hidden="true"
                ></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">Regular: $2.99</p>
                  <p className="text-lg font-bold text-yellow-400">
                    With Coupon: $1.49
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Clip Smarter, Save More
            </h2>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto">
              Our extension does the heavy lifting so you can focus on what
              matters - saving money on groceries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div
                  className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  aria-hidden="true"
                >
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Lightning Fast
                </h3>
                <p className="text-purple-200">
                  Clips all 250 available coupons in two minutes or less. No
                  more manual clicking through hundreds of offers.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div
                  className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  aria-hidden="true"
                >
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Mobile Ready
                </h3>
                <p className="text-purple-200">
                  Works on Firefox for Android too! Clip coupons on the go,
                  right from your mobile device.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div
                  className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  aria-hidden="true"
                >
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  100% Safe
                </h3>
                <p className="text-purple-200">
                  Open source and transparent. No data collection, no tracking.
                  Just pure coupon-clipping power.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        className="py-20 bg-gradient-to-r from-yellow-400 to-orange-500"
        aria-labelledby="stats-heading"
      >
        <div className="container mx-auto px-4">
          <h2 id="stats-heading" className="sr-only">
            Coupon Clipper Statistics
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-purple-900 mb-2">250</div>
              <p className="text-purple-800 font-medium">
                Maximum Coupons You Can Clip
              </p>
            </div>
            <div>
              <div className="text-5xl font-bold text-purple-900 mb-2">2</div>
              <p className="text-purple-800 font-medium">Browser Platforms</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-purple-900 mb-2">0</div>
              <p className="text-purple-800 font-medium">Cost to Use</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20" aria-labelledby="how-it-works-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              id="how-it-works-heading"
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              How It Works
            </h2>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto">
              Three simple steps to maximum savings
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div
                  className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  aria-hidden="true"
                >
                  <Download className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  1. Install
                </h3>
                <p className="text-purple-200">
                  Add the extension to Chrome or Firefox in seconds
                </p>
              </div>

              <div className="text-center">
                <div
                  className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  aria-hidden="true"
                >
                  <Scissors className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">2. Click</h3>
                <p className="text-purple-200">
                  Visit{" "}
                  <a
                    href="https://www.kingsoopers.com/savings/cl/coupons/"
                    className="text-yellow-400 underline hover:text-yellow-300 transition-colors"
                  >
                    King Soopers' Coupon Page
                  </a>{" "}
                  and click the extension button
                </p>
              </div>

              <div className="text-center">
                <div
                  className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  aria-hidden="true"
                >
                  <DollarSign className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">3. Save</h3>
                <p className="text-purple-200">
                  All coupons are clipped automatically, wait a minute then go
                  shop and save!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section
        className="py-20 bg-white/5 backdrop-blur-sm"
        aria-labelledby="demo-heading"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              id="demo-heading"
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              See It In Action
            </h2>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto">
              Watch how easy it is to clip all your coupons in just a few clicks
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <iframe
                src="https://www.youtube.com/embed/t3esIQwrWVY"
                title="Coupon Clipper Demo - How to Automatically Clip King Soopers Coupons"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                loading="lazy"
              ></iframe>
            </div>
            <p className="text-center text-purple-300 mt-6">
              Desktop demonstration - the same process works on Firefox for
              Android mobile!
            </p>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section
        id="download"
        className="py-20 bg-white/5 backdrop-blur-sm"
        aria-labelledby="download-heading"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2
              id="download-heading"
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Ready to Start Saving?
            </h2>
            <p className="text-xl text-purple-200 mb-12">
              Join thousands of smart shoppers who never miss a coupon deal
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 bg-gradient-to-r from-yellow-400 to-orange-500 p-6 rounded-lg shadow-lg">
              <Link
                href="https://chromewebstore.google.com/detail/coupon-clipper/mhlpjojbmabefhmkodfokajcdblpfoca"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Coupon Clipper for Chrome"
              >
                <img
                  src="/images/chrome-badge.png"
                  alt="Chrome Web Store"
                  width={250}
                  height={75}
                  className="hover:scale-105 transition-transform"
                />
              </Link>
              <Link
                href="https://addons.mozilla.org/en-GB/firefox/addon/coupon-clipper/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Coupon Clipper for Firefox"
              >
                <img
                  src="/images/firefox-badge.png"
                  alt="Firefox Add-ons"
                  width={230}
                  height={75}
                  className="hover:scale-105 transition-transform"
                />
              </Link>
            </div>

            <div className="text-center">
              <p className="text-purple-300 mb-4">
                Don't want to install an extension?
              </p>
              <Link
                href="https://github.com/DavidZirinsky/Coupon-Clipper"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-purple-400 text-purple-200 hover:bg-purple-400 hover:text-purple-900 bg-transparent"
                >
                  View Source Code on GitHub
                  <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10" role="contentinfo">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div
                className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center"
                aria-hidden="true"
              >
                <Scissors className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Coupon Clipper
              </span>
            </div>
            <nav
              className="flex items-center space-x-6"
              aria-label="Footer navigation"
            >
              <Link
                href="https://github.com/DavidZirinsky/Coupon-Clipper"
                className="text-purple-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
              <Link
                href="https://chromewebstore.google.com/detail/coupon-clipper/mhlpjojbmabefhmkodfokajcdblpfoca"
                className="text-purple-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chrome Store
              </Link>
              <Link
                href="https://addons.mozilla.org/en-GB/firefox/addon/coupon-clipper/"
                className="text-purple-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Firefox Add-ons
              </Link>
            </nav>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-purple-300">
              Made with ❤️ for smart shoppers. Free and open source forever.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
