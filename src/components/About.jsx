import Profile from "../public/profile.jpeg";

export const About = () => {
  return (
    <section className="min-h-screen w-full bg-white dark:bg-gray-800 px-6 md:px-24 xl:px-36 mx-auto">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex w-full justify-center h-screen flex-col ">
          <div className="flex flex-col md:flex-row w-full">
            <div className="max-w-lg">
              <p className=" mb-7 font-semibold font-sans text-3xl text-gray-800 dark:text-white">
                About me
              </p>
              <p className="text-sm md:text-lg text-gray-800 dark:text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries
              </p>
              <p className="text-sm md:text-lg text-gray-800 dark:text-white">
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>
            </div>
              <img
                src={Profile}
                className="m-16 md:m-auto justify-self-start w-[250px] h-[250px] self-center"
              ></img>
          </div>
        </div>
      </div>
    </section>
  );
};
