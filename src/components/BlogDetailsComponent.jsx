import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom"; // For better routing

const BlogDetailsComponent = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollButton, setShowScrollButton] = useState(true);

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollY / docHeight) * 100;
      setScrollProgress(progress);

      // Toggle the visibility of the scroll-to-top button when it's near the bottom of the page
      const footerOffset = document.querySelector("footer")?.offsetTop || 0;
      const windowHeight = window.innerHeight;
      if (scrollY + windowHeight >= footerOffset) {
        setShowScrollButton(false); // Hide button near the footer
      } else {
        setShowScrollButton(true); // Show button when not near the footer
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-indigo-600 z-50"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto w-full max-w-5xl px-6 lg:px-8">
          {/* Blog Header */}
          <header className="mb-12">
            <h1 className="text-4xl font-bold leading-snug text-center text-gray-900 sm:text-5xl lg:text-left">
              How Artificial Intelligence is Transforming Business Today
            </h1>
            <p className="mt-4 text-sm text-center text-gray-500 sm:text-base lg:text-left">
              By <span className="font-semibold">John Doe</span> • Updated on{" "}
              <time dateTime="2025-01-12">January 12, 2025</time> • 8 mins read
            </p>
          </header>

          {/* Featured Image */}
          <div className="relative mb-12 overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <img
              src="./blog-details_03.JPG"
              alt="Artificial Intelligence in Business"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            <figcaption className="absolute bottom-2 left-4 bg-gray-900 bg-opacity-75 px-4 py-2 text-sm italic text-white rounded">
              AI is reshaping industries with remarkable speed.
            </figcaption>
          </div>

          {/* Blog Content */}
          <article className="space-y-14 text-gray-700 sm:text-lg leading-relaxed lg:leading-loose">
            <section>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Artificial Intelligence (AI) has moved beyond being a buzzword
                to become a transformative force across industries. By
                automating repetitive tasks, uncovering patterns in data, and
                enhancing decision-making, AI is helping businesses achieve
                unprecedented efficiency and innovation.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
              >
                Imagine predictive algorithms identifying consumer trends before
                they surface, streamlining logistics to avoid bottlenecks, or
                even detecting cybersecurity threats in real time. AI makes
                these possibilities a reality, empowering businesses to thrive
                in an ever-competitive landscape.
              </motion.p>
            </section>

            {/* Supporting Image */}
            <div className="relative mb-12 overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
              <img
                src="./blog-details_01.jpg"
                alt="AI Strategy"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <p className="absolute bottom-3 right-4 bg-gray-900 bg-opacity-75 px-3 py-1 text-sm italic text-white rounded">
                AI tools help redefine strategic thinking in business.
              </p>
            </div>

            {/* Main Content Section */}
            <section>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                The Rise of AI in Everyday Operations
              </h2>
              <p>
                Across industries, AI is revolutionizing processes. Businesses
                are using chatbots to deliver personalized customer support
                24/7, ensuring efficiency while reducing costs. In the retail
                space, AI analyzes consumer behavior to suggest tailored
                recommendations, boosting both satisfaction and revenue.
              </p>
              <p>
                Healthcare is another field experiencing groundbreaking
                advances. AI-powered algorithms assist doctors in diagnosing
                diseases, predicting treatment outcomes, and improving patient
                care. The rise of machine learning in this sector signifies a
                future where accuracy and efficiency reign supreme.
              </p>
            </section>

            {/* Related Content */}
            <section className="mt-16 border-t border-gray-300 pt-8">
              <h3 className="text-xl font-semibold text-gray-900">
                You Might Also Like
              </h3>
              <div className="mt-4">
                <NavLink
                  to="/related-post"
                  className="block p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all"
                >
                  <h4 className="text-lg font-bold text-gray-800">
                    AI in Healthcare
                  </h4>
                  <p className="mt-2 text-sm text-gray-600">
                    How AI is revolutionizing the healthcare industry and
                    improving patient care.
                  </p>
                </NavLink>
              </div>
            </section>

            {/* Conclusion Section */}
            <section>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Embracing the AI Revolution
              </h2>
              <p>
                The future of business lies in embracing intelligent systems
                that automate mundane processes and reveal untapped
                opportunities. Organizations adopting AI are not only staying
                ahead but also creating unparalleled value for customers,
                employees, and stakeholders alike.
              </p>
              <p>
                As the capabilities of AI expand, the boundaries of what’s
                possible are being redefined. From advanced automation to
                predictive decision-making, the AI revolution is just beginning.
                It’s time for businesses to harness its potential and lead the
                charge toward a smarter future.
              </p>
            </section>
          </article>

          {/* Scroll to Top Button */}
          {showScrollButton && (
            <button
              className="fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-light transition"
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              ↑
            </button>
          )}

          {/* Footer */}
          <footer className="mt-16 border-t border-gray-300 pt-6 text-center text-sm text-gray-500">
            © 2025 John Doe. All rights reserved.
          </footer>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsComponent;
