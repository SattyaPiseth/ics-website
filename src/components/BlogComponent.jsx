import React from "react";
import blogData from "./../json/layouts/blog.json"; // adjust the path as needed

const BlogComponent = () => {
  return (
    <>
      <section className="bg-white pb-10 pt-14 dark:bg-dark lg:pb-20 lg:pt-[120px]">
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
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogComponent;

const BlogCard = ({ image, date, CardTitle, CardDescription }) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3" data-aos="flip-down">
      <div className="mb-10 w-full">
        <div className="mb-8 overflow-hidden rounded">
          <img src={image} alt="" className="w-full" />
        </div>
        <div>
          {date && (
            <span className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
              {date}
            </span>
          )}
          <h3>
            <a
              href="/#"
              className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="text-base text-body-color dark:text-dark-6">
            {CardDescription}
          </p>
        </div>
      </div>
    </div>
  );
};
