export default function VideoComponent({ src, title, description, date }) {
    return (
      <div className="w-full px-4 md:w-1/2 lg:w-1/4" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <div className="mb-10 w-full bg-white rounded-lg shadow-md dark:bg-dark overflow-hidden transition-transform transform hover:scale-105 duration-200">
          <div className="overflow-hidden h-48"> {/* Fixed height for video */}
            <iframe
              className="w-full h-full object-cover" // Ensure the video scales correctly
              src={src} // Ensure this is a valid YouTube embed URL
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <div className="p-4">
            {date && (
              <span className="mb-2 inline-block rounded bg-primary px-3 py-1 text-center text-xs font-semibold leading-loose text-white">
                {date}
              </span>
            )}
            <h3 className="mb-2 text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl">
              {title}
            </h3>
            <p className="text-base text-body-color dark:text-dark-6 line-clamp-4">
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  }
  