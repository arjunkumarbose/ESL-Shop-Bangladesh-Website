const Banner = ({ title, info }) => {
  return (
    <div
      className="hero h-20 w-full md:h-32"
      style={{
        backgroundImage: `url("https://pbs.twimg.com/media/DqZlqYsUwAE6HvI?format=jpg&name=4096x4096")`,
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-60"></div>
      <div className="text-neutral-content w-full">
        <div className=" text-center">
          <h1 className=" md:text-4xl text-xl font-bold">{title}</h1>
          <p className="text-base pt-1 md:font-bold">{info}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
