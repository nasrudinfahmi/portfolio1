import Image from 'next/image';
import Link from 'next/link';

function PortfolioCard({ portfolio, handleBtnDetail }) {
  const { photo, alt, name, tech, description, href } = portfolio;

  return (
    <article className="p-5 rounded-xl shadow hover:shadow-m bg-white">
      <header className="rounded-lg overflow-hidden outline outline-1 outline-slate-300/45">
        <Image
          width="auto"
          height="auto"
          src={photo}
          alt={alt}
          loading="lazy"
          className="object-cover object-center m-auto rounded-lg"
        />
      </header>
      <h2 className="mt-4 text-2xl font-medium text-slate-900">{name}</h2>
      <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1.5">
        {tech.map((tech, i) => (
          <span
            key={i}
            className="flex items-center gap-2 py-1 pl-1.5 pr-2.5 bg-slate-100 text-sm rounded-md"
          >
            <Image
              width="18"
              height="18"
              src={tech.icon}
              alt="react ikon"
              loading="lazy"
              className="object-cover object-center m-auto"
            />
            {tech.name}
          </span>
        ))}
      </div>

      <p className="text-lg line-clamp-2 mt-5 text-slate-800 leading-tight">
        {description}
      </p>

      <div className="mt-8 flex gap-4">
        <button
          type="button"
          onClick={() => handleBtnDetail(portfolio)}
          title="Detail"
          aria-label="Detail Portfolio"
          className="rounded-md px-4 py-1 text-lg border border-blue-500 hover:bg-blue-900 hover:text-white bg-blue-700 text-white"
        >
          Detail
        </button>
        <Link
          href={href}
          target="_blank"
          title="Preview"
          aria-label="Preview portfolio"
          className="rounded-md px-4 py-1 text-lg border border-blue-500 hover:bg-blue-900 hover:text-white"
        >
          Preview
        </Link>
      </div>
    </article>
  );
}

export default PortfolioCard;
