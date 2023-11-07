/* eslint-disable react/prop-types */
const Title = ({ children }) => {
  return (
    <div className="relative border-s-8 border-[#3878E8] ps-3">
      <h2 className="text-2xl md:text-6xl font-bold">{children}</h2>
      <p className="absolute bottom-0 text-3xl md:text-8xl -z-10 opacity-5 ">
        {children}
      </p>
    </div>
  );
};

export default Title;
