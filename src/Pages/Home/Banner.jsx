const Banner = () => {
  return (
    <div
      className="hero h-[600px]  "
      style={{
        backgroundImage:
          "url(https://i.ibb.co/PCQVhQn/scott-graham-5f-Nm-Wej4t-AA-unsplash.jpg)",
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-3xl md:text-5xl  font-extrabold">
            JOB SEARCH
          </h1>
          <p className="mb-5 md:text-lg">
            Need help writing a job description for a specific role? Use these
            job description examples to create your next great job posting. Or
            if you’re ready to hire, post your job on Indeed.
          </p>

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary md:w-full max-w-xs text-black"
          />
          <div className="indicator mt-5 md:mt-0">
            <button className="btn join-item">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
