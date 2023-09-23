const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-52 px-16 absolute text-white bg-gradient-to-r from-black bg-transparent aspect-video bg-opacity-80">
      <h1 className="text-4xl font-semibold w-2/5">{title}</h1>
      <p className="py-6 text-md w-1/3">{overview}</p>
      <div className="flex flex-row">
        <button className="cursor-pointer bg-white text-black flex justify-center items-center py-4 px-10 rounded-md hover:bg-opacity-90">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ltr-4z3qvp e1svuwfo1"
            data-name="Play"
            aria-hidden="true"
          >
            <path
              d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z"
              fill="currentColor"
            ></path>
          </svg>
          <p className="text-xl font-semibold pl-2">Play</p>
        </button>
        <button className="cursor-pointer bg-gray-500 bg-opacity-50 text-white py-4 px-8 rounded-md mx-3 text-xl font-semibold flex flex-row justify-center items-center hover:bg-opacity-60">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 32 32"
            fill="white"
          >
            <path d="M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 Z M 16 5 C 22.085938 5 27 9.914063 27 16 C 27 22.085938 22.085938 27 16 27 C 9.914063 27 5 22.085938 5 16 C 5 9.914063 9.914063 5 16 5 Z M 15 10 L 15 12 L 17 12 L 17 10 Z M 15 14 L 15 22 L 17 22 L 17 14 Z"></path>
          </svg>
          <p className="px-2">More Info</p>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
