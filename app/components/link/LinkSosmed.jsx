import Image from 'next/image';
import Link from 'next/link';

function LinkSosmed({
  width = 'w-full',
  icon,
  alt,
  imgWidth = 56,
  imgHeight = 56,
  title,
  cta,
  href = '',
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className={`${width} bg-white flex items-center p-3 gap-3 rounded-xl border-b-2 border-b-blue-200 hover:border-b-blue-300 hover:scale-[1.015] transition-all shadow-md`}
    >
      <div className="basis-16 grow-0">
        <Image
          width={imgWidth}
          height={imgHeight}
          src={icon}
          alt={alt}
          loading="lazy"
        />
      </div>
      <div className="basis-4/5">
        <p className="text-lg font-medium text-slate-900">
          <strong>{title}</strong>
        </p>
        <p className="text-sm mt-1 text-slate-700">{cta}</p>
      </div>
    </Link>
  );
}

export default LinkSosmed;
