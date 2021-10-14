export const Hero = () => {
  return (
    <section className="min-h-screen w-full bg-white dark:bg-gray-800 px-6 md:px-24 xl:px-36 mx-auto">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex justify-center h-screen flex-col lg:mx-auto">
          <p className="font-noto md:text-[16px] text-gray-800 dark:text-white font-medium text-sm lg:text-base mb-5">
            Hey there, I'm
          </p>
          <p className="font-sans text-gray-800 dark:text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-5">
            Sanjeev JayaSurya.
          </p>
          <p className="font-sans text-gray-800 dark:text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
            Engineering @ Uni.
          </p>
          <p className="font-sans text-gray-800 md:text-xl dark:text-white text-base lg:text-lg max-w-lg">
            Description here
          </p>
        </div>
      </div>
    </section>
  );
};
