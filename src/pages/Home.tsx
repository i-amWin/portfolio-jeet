export default function Home() {
  return (
    <div className="h-full">
      <div
        className="
          flex flex-col justify-center
          relative
          px-4 mx-auto
          h-full max-w-screen-lg
          text-white 
        "
      >
        <h1>
          <span className="text-base lg:text-lg text-indigo-900">
            Hello, I&#39;m
          </span>
          <br />
          <span className="text-5xl font-bold md:text-6xl lg:text-7xl">
            Jeet Gangwar
          </span>
        </h1>

        <p>
          <span className="max-w-lg inline-block text-zinc-400 lg:text-lg">
            Passionate web developer creating innovative and user-friendly
            websites. Building digital experiences that leave a lasting
            impression.
          </span>
        </p>

        <div className="absolute right-1/2 bottom-4 translate-x-1/2">
          <div className="flex flex-col items-center gap-1">
            <p className="text-accent lg:text-lg">Scroll Down to see more</p>
          </div>
        </div>
      </div>
    </div>
  );
}
