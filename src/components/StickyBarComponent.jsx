export default function StickyBar() {
  return (
    <section className="border-b border-stroke bg-gray-1 px-3 py-2 sm:px-4 sm:py-3 dark:border-dark-3 dark:bg-dark-2">
      <div className="container">
        <div className="relative flex items-center justify-center text-center space-x-3">
          {/* Icon */}
          <span className="flex items-center justify-center w-6 h-6 bg-gray-200 p-1.5 rounded-full dark:bg-gray-600">
            <svg
              className="w-3 h-3 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 19"
            >
              <path d="M15 1.943v12.114a1 1 0 0 1-1.581.814L8 11V5l5.419-3.871A1 1 0 0 1 15 1.943ZM7 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4ZM4 17v-5h1v5H4ZM16 5.183v5.634a2.984 2.984 0 0 0 0-5.634Z"></path>
            </svg>
            <span className="sr-only">Light bulb</span>
          </span>

          {/* Announcement text with line clamp */}
          <p className="text-xs sm:text-sm font-medium text-dark dark:text-white overflow-hidden whitespace-nowrap text-ellipsis">
            We have launched Brand new Blocks featuring over 300+ UI Elements!
          </p>

          {/* Close button */}
          <button className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 text-dark-6 duration-200 hover:text-dark dark:hover:text-white">
            <svg
              width="10"
              height="10"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2386_67)">
                <path
                  d="M1 1L7 7M7 7L13 13M7 7L13 1M7 7L1 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_2386_67">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
