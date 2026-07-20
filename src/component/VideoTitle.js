
const VideoTitle = ({title, overview}) => {
  return <div className="pt-72 px-12 absolute text-white">
    <h1 className="text-4xl font-bold">{title}</h1>
    <p className="text-md py-4 w-1/3">{overview}</p>
    <div>
        <button className=" bg-white py-3 px-12 rounded-lg text-black text-lg  hover:bg-opacity-80">▶ Play</button>
        <button className="bg-gray-500 mx-2 py-3 px-12 rounded-lg bg-opacity-50 text-lg  hover:bg-opacity-50 hover:bg-white">More Info</button>
    </div>
  </div>;
};

export default VideoTitle;
