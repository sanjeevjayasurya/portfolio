export const History = () => {
  return (
    <section className="min-h-screen w-full bg-white dark:bg-gray-800 px-6 md:px-24 xl:px-36 mx-auto">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex w-full justify-center h-screen flex-col ">
          <div class="container">
            <div class="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50 dark:text-gray-800">
              <div class="flex flex-row-reverse md:contents">
                <div class="bg-gray-800 dark:bg-white col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                  <h3 class="font-semibold text-lg mb-1">Lorem ipsum</h3>
                  <p class="leading-tight text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi, quaerat?
                  </p>
                </div>
                <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                  <div class="h-full w-6 flex items-center justify-center">
                    <div class="h-full w-1 bg-gray-800 dark:bg-white pointer-events-none"></div>
                  </div>
                  <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-800 dark:bg-white shadow"></div>
                </div>
              </div>
              <div class="flex md:contents">
                <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                  <div class="h-full w-6 flex items-center justify-center">
                    <div class="h-full w-1 bg-gray-800 dark:bg-white pointer-events-none"></div>
                  </div>
                  <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-800 dark:bg-white shadow"></div>
                </div>
                <div class="bg-gray-800 dark:bg-white col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
                  <h3 class="font-semibold text-lg mb-1">Lorem ipsum</h3>
                  <p class="leading-tight text-justify">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Vitae, facilis.
                  </p>
                </div>
              </div>
              <div class="flex flex-row-reverse md:contents">
                <div class="bg-gray-800 dark:bg-white col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                  <h3 class="font-semibold text-lg mb-1">Lorem ipsum</h3>
                  <p class="leading-tight text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi, quaerat?
                  </p>
                </div>
                <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                  <div class="h-full w-6 flex items-center justify-center">
                    <div class="h-full w-1 bg-gray-800 dark:bg-white pointer-events-none"></div>
                  </div>
                  <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-800 dark:bg-white shadow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
