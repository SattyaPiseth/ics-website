import React from 'react';
import PropTypes from 'prop-types';

export default function VideoComponent({ src, title, description, date }) {
  // Validate if the src is a valid YouTube URL
  const isValidYoutubeUrl = (url) => {
    return url.startsWith('https://www.youtube.com/') || url.startsWith('https://youtu.be/');
  };

  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/4" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <div className="mb-10 w-full bg-white rounded-lg shadow-md dark:bg-gray-800 overflow-hidden transition-transform transform hover:scale-105 duration-200">
        <div className="overflow-hidden h-48"> {/* Fixed height for video */}
          {isValidYoutubeUrl(src) ? (
            <iframe
              className="w-full h-full object-cover" // Ensure the video scales correctly
              src={src}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              aria-label={`Video titled ${title}`} // Improved accessibility
            ></iframe>
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-300">Video unavailable</p>
          )}
        </div>
        <div className="p-4">
          {date && (
            <time dateTime={date} className="mb-2 inline-block rounded bg-primary px-3 py-1 text-center text-xs font-semibold leading-loose text-white">
              {date}
            </time>
          )}
          <h3 className="mb-2 text-xl font-semibold text-gray-900 hover:text-primary dark:text-white sm:text-2xl">
            {title}
          </h3>
          <p className="text-base text-gray-700 dark:text-gray-300 max-h-24 overflow-auto scrollbar-thin scrollbar-thumb-secondary-color scrollbar-track-transparent scroll-smooth">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

VideoComponent.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  date: PropTypes.string,
};
