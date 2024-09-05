import RenderedPortfolioCard from '../components/card/RenderedPortfolioCard';

function PortfolioSect() {
  return (
    <section
      id="portfolio"
      className="scroll-mt-5 flex flex-col gap-14 padding-inline pt-24 mt-10 lg:min-h-screen"
    >
      <h1 className="text-center text-5xl md:text-[2.5rem] lg:text-[4rem] leading-tight font-semibold bg-gradient-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent">
        Portfolio
      </h1>
      <RenderedPortfolioCard />
    </section>
  );
}

export default PortfolioSect;
