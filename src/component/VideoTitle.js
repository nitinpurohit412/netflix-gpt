
const VideoTitle = ({title, overview}) => {
  return <div className="pt-56 md:px-12 absolute text-white">
    <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
    <p className="hidden md:inline-block text-md py-4 w-1/3">{overview}</p>
    <div className="m-4 md:m-0">
        <button className=" bg-white py-2 px-4 md:py-3 md:px-12 rounded-lg text-black text-lg  hover:bg-opacity-80">▶ Play</button>
        <button className="bg-gray-500 mx-2 py-2 px-4 md:py-3 md:px-12 rounded-lg bg-opacity-50 text-lg  hover:bg-opacity-50 hover:bg-white">More Info</button>
    </div>
  </div>;
};

export default VideoTitle;
