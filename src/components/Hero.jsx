export const Hero = () => {
  return (
    <section className="min-h-screen w-full max-w-screen-2xl bg-white dark:bg-gray-800 px-6 lg:px-20">
      <div className="flex justify-center flex-start h-screen flex-col lg:mx-16">
        <p className="font-noto md:text-[16px] text-gray-800 dark:text-white font-medium text-sm mb-5">
          Hey there, I'm
        </p>
        <p className="font-sans text-gray-800 dark:text-white text-4xl md:text-6xl font-bold mb-5">
          Sanjeev JayaSurya.
        </p>
        <p className="font-sans text-gray-800 dark:text-white text-4xl md:text-6xl font-bold mb-5">
          Engineering @ Uni.
        </p>
        <p className="font-sans text-gray-800 md:text-xl dark:text-white text-md max-w-lg">
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at Uni.
        </p>
      </div>
    </section>
  );
};
