import React from "react";
import { Link } from "react-router-dom"; // If you're using react-router
import blogData from "./../json/layouts/blog.json"; // adjust the path as needed

const BlogComponent = () => {
  return (
    <>
      <section
        className="bg-white pb-10 pt-14 dark:bg-dark lg:pb-20 lg:pt-[120px] overflow-hidden"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Our Causes
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  Our Recent News
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  ICS-SP provides skills to empower families and communities,
                  especially in the care of children. Our initiatives include:
                </p>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap">
            {blogData.map((post, index) => (
              <BlogCard
                key={index}
                date={post.date}
                CardTitle={post.CardTitle}
                CardDescription={post.CardDescription}
                image={post.image}
                url={post.url}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogComponent;

const BlogCard = ({ image, date, CardTitle, CardDescription, url }) => {
  return (
    <div
      className="w-full px-5 md:w-1/2 lg:w-1/4"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <Link to={url}>
        <div className="mb-10 w-full bg-white rounded-lg shadow-md dark:bg-dark overflow-hidden transition-transform transform hover:scale-105 duration-200">
          <div className="overflow-hidden h-48">
            <img src={image} alt={CardTitle} className="w-full h-full object-cover" />
          </div>
          <div className="p-4">
            {date && (
              <span className="mb-2 inline-block rounded bg-primary px-3 py-1 text-center text-xs font-semibold leading-loose text-white">
                {date}
              </span>
            )}
            <h3 className="mb-2 text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl line-clamp-3">
              {CardTitle}
            </h3>
            <p className="text-base text-body-color dark:text-dark-6 line-clamp-4">
              {CardDescription}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
