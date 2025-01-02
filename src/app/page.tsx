// import Image from "next/image";
// import "./btnUnderline.css";
import Head from "next/head";

export default function Home() {
  return (
      <>
        <Head>
          <title>About Me - Ryoda</title>
          <meta
              name="description"
              content="About Ryoda, TypeScript developer and Linux user."
          />
        </Head>

        <div className="min-h-screen bg-gray-900 text-white">
          <div className="container mx-auto px-4 py-10">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              {/* Left Section */}
              <div className="w-full md:w-1/3 text-center md:text-left">
                <img
                    className="w-64 h-64 rounded-lg border-4 border-gray-700"
                    src="https://github.com/Ryoda1.png"
                    alt="Image"
                />
                <h1 className="text-2xl font-bold mt-4">Ryoda</h1>
                <p className="text-gray-400 text-lg">Web Developer</p>
                <div className="mt-4 space-y-2">
                  <p className="text-gray-400">Место под почту</p>
                  <p className="text-gray-400">Место под тг скорее всего</p>
                </div>
              </div>

              {/* Right Section */}
              <div className="w-full md:w-2/3 mt-6 md:mt-0">
                <h2 className="text-xl font-bold mb-4">About Me</h2>
                <p className="text-gray-300 mb-6">I’m a что-то там</p>

                <h2 className="text-xl font-bold mb-4">What I’m Doing</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h3 className="text-lg font-semibold">
                      Потом тоже что-то будет наверное
                    </h3>
                    <p className="text-gray-400">потои что-то прнидумаю</p>
                  </div>

                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h3 className="text-lg font-semibold">потом что-то будет</h3>
                    <p className="text-gray-400">потом тоже что-то будет</p>
                  </div>

                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h3 className="text-lg font-semibold">
                      Потом тоже что-то будет
                    </h3>
                    <p className="text-gray-400">Заглушка под текст</p>
                  </div>

                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h3 className="text-lg font-semibold">
                      Потом тоже что-то будет
                    </h3>
                    <p className="text-gray-400">Потом что-то туттоже булет .</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}
