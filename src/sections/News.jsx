const News = () => {
  return (
    <>
      <section className="bg-gray-100">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-3xl">
              Want product news and updates? Sign up for our newsletter.
            </h2>

            <p className="hidden text-gray-500 sm:mt-4 sm:block">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
              dolor officia blanditiis repellat in, vero, aperiam porro ipsum
              laboriosam consequuntur exercitationem incidunt tempora nisi?
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-xl">
            <form action="#" className="sm:flex sm:gap-4">
              <div className="sm:flex-1">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Email address"
                  required
                  className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-800 shadow-lg transition focus:border-white focus:outline-none focus:ring focus:ring-purple-400"
                />
              </div>

              <button
                type="submit"
                className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-purple-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-purple-700 sm:mt-0 sm:w-auto"
              >
                <span className="text-sm font-medium"> Subscribe </span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
