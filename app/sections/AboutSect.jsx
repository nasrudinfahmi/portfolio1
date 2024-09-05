import Link from 'next/link';

function AboutSect() {
  return (
    <section
      id="about"
      className="scroll-mt-5 flex flex-col gap-10 padding-inline pt-32 mt-10 lg:min-h-screen"
    >
      <h1 className="text-center text-5xl md:text-[2.5rem] lg:text-[4rem] leading-tight font-semibold bg-gradient-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent">
        About Me
      </h1>
      <article className="mt-4">
        <h2 className="text-3xl text-center font-semibold">
          Hi there!👋{' '}
          <strong className="bg-gradient-to-r from-blue-700 to-blue-600 bg-clip-text text-transparent font-semibold">
            I’m Muhammad Nasrudin Fahmi
          </strong>
        </h2>
        <p className="mt-10 text-lg text-center text-teal-800 font-medium">
          A passionate Frontend Developer 🧑‍💻 based in Sidoarjo. I have a strong
          enthusiasm for creating dynamic and user-friendly applications. With
          expertise in both front-end and back-end development, I am always
          eager to learn new technologies and innovate in the tech industry.
        </p>
      </article>

      <Link
        href="#contact"
        aria-label="Kontak saya"
        title="Contact Me"
        className="anim-about anim-from-top-right transition-all duration-700 mx-auto px-10 py-2.5 mt-8 bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-800 text-lg text-white font-medium rounded-lg"
      >
        Contact Me
      </Link>
    </section>
  );
}

export default AboutSect;
