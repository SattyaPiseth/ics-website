import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const BlogDetailsComponent = ({ blogData }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollButton, setShowScrollButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setScrollProgress((scrollY / docHeight) * 100);
      const footerOffset = document.querySelector("footer")?.offsetTop || 0;
      setShowScrollButton(!(scrollY + window.innerHeight >= footerOffset));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!blogData) return <p>Loading...</p>;

  return (
    <>
      <div className="fixed top-0 left-0 h-1 bg-primary-light z-50" style={{ width: `${scrollProgress}%` }}></div>
      <section className="bg-gray-50 py-16">
        <div className="mx-auto w-full max-w-5xl px-6 lg:px-8">
          <header className="mb-12 text-center lg:text-left">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">{blogData.title}</h1>
            <p className="mt-4 text-sm text-gray-500 sm:text-base">
              By <span className="font-semibold">{blogData.author}</span> • Updated on {" "}
              <time dateTime={blogData.date}>{new Date(blogData.date).toDateString()}</time> • {blogData.readTime}
            </p>
          </header>
          <div className="relative mb-12 overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <img src={blogData.featuredImage} alt={blogData.title} className="w-full h-auto object-cover" loading="lazy" />
            {blogData.featuredImageCaption && (
              <figcaption className="absolute bottom-2 left-4 bg-gray-900 bg-opacity-75 px-4 py-2 text-sm italic text-white rounded">
                {blogData.featuredImageCaption}
              </figcaption>
            )}
          </div>
          <article className="space-y-14 text-gray-700 sm:text-lg leading-relaxed lg:leading-loose">
            {blogData.sections.map((section, index) => (
              <section key={index}>
                {section.heading && <h2 className="mb-6 text-3xl font-bold text-gray-900">{section.heading}</h2>}
                {section.text.map((paragraph, idx) => (
                  <motion.p key={idx} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 + idx * 0.2 }}>
                    {paragraph}
                  </motion.p>
                ))}
                {section.images && section.images.length > 0 && (
                  <div className="mt-6 space-y-6">
                    {section.images.map((image, imgIndex) => (
                      <div key={imgIndex} className="relative overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
                        <img src={image.src} alt={image.caption} className="w-full h-auto object-cover" loading="lazy" />
                        {image.caption && (
                          <p className="absolute bottom-3 right-4 bg-gray-900 bg-opacity-75 px-3 py-1 text-sm italic text-white rounded">
                            {image.caption}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </article>
          {showScrollButton && (
            <button className="fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-light transition" onClick={scrollToTop} aria-label="Scroll to top">↑</button>
          )}
          <footer className="mt-16 border-t border-gray-300 pt-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} {blogData.author}. All rights reserved.
          </footer>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsComponent;