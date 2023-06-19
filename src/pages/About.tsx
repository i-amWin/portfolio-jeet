export default function About() {
  return (
    <div className="bg-accent text-white">
      <div className="max-w-screen-lg w-full mx-auto px-4 py-14">
        <h2
          className="
            relative mb-6 pb-2
            text-2xl md:text-3xl lg:text-4xl font-bold
            after:absolute after:-bottom-px after:-left-[calc((100vw-100%)/2)]
            after:w-screen after:h-[.125rem] after:bg-primary-button         
          "
        >
          About Me
        </h2>
        <div className="flex flex-col gap-5 max-w-screen-md text-gray-300 lg:text-lg px-4">
          <p>
            Hi there! I&#39;m Jeet Gangwar, a dedicated and enthusiastic web
            developer with a strong passion for crafting captivating online
            experiences. I thrive on the excitement of turning ideas into
            reality through coding and design.
          </p>
          <p>
            My journey into web development began with a curiosity to explore
            the vast potential of the digital world. Over time, I honed my
            skills in HTML, CSS, JavaScript, and other modern technologies to
            create visually appealing and interactive websites. I believe in the
            power of clean and elegant code to provide seamless user
            experiences.
          </p>
          <p>
            Constantly staying updated with the latest industry trends and best
            practices, I am committed to continuously learning and improving my
            skills. I am a firm believer in collaboration and teamwork,
            fostering strong relationships with colleagues and clients alike.
          </p>
          <p>
            When I&#39;m not immersed in the world of coding, you can find me
            exploring new technologies, experimenting with design concepts, and
            staying active in the web development community.
          </p>
        </div>
      </div>
    </div>
  );
}
