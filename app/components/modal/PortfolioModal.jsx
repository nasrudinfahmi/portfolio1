import Image from 'next/image';
import BtnClose from '../button/BtnClose';
import Link from 'next/link';

function PortfolioModal({ isOpenedModal, setIsOpenedModal, portfolio }) {
  return !portfolio && !isOpenedModal ? (
    <></>
  ) : (
    <div
      className={`${isOpenedModal ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} flex fixed inset-0 z-[999999] transition-all duration-200 bg-slate-700/50`}
    >
      <div className="flex flex-col relative w-11/12 h-[80vh] min-[500px]:w-4/5 min-[500px]:h-[75vh] md:w-2/3 md:h-[70vh] lg:w-3/5 xl:w-1/2 sm:w-[75%] p-5 md:p-10 overflow-y-auto rounded-xl m-auto shadow-xl bg-white z-[999999999]">
        <BtnClose
          className="sticky top-0 ms-auto aspect-square translate-x-5 -translate-y-6 py-1.5"
          onClick={() => setIsOpenedModal(false)}
        />
        <article id="modal-portfolio" className="container mt-5">
          <header className="w-full rounded-lg overflow-hidden outline outline-1 outline-slate-300/45">
            <Image
              width="auto"
              height="auto"
              src={portfolio?.photo}
              alt={portfolio?.alt}
              loading="lazy"
              className="object-cover object-center m-auto rounded-lg"
            />
          </header>
          <div>
            <h2 className="mb-5 mt-6 text-xl md:text-2xl lg:text-3xl font-medium text-slate-800">
              {portfolio?.name}
            </h2>
            <p className="mb-10 lg:text-lg">{portfolio?.description}</p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href={portfolio?.href}
              target="_blank"
              aria-label="preview portfolio"
              title="Preview"
              className="px-5 py-1.5 rounded-md text-lg bg-blue-700 hover:bg-blue-800 text-white"
            >
              Preview
            </Link>
            <Link
              href={portfolio.github}
              target="_blank"
              aria-label="Github"
              title="Github"
              className="outline outline-1 outline-blue-700 px-5 hover:text-white hover:bg-blue-800 py-1.5 rounded-md text-lg text-blue-900"
            >
              Github
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}

export default PortfolioModal;
