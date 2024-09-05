import Image from 'next/image';

function CardSkills({ icon, width = 28, height = 28, alt, name, level }) {
  return (
    <article className="cursor-default">
      <div className="flex p-2 size-16 rounded-full shadow-md hover:shadow-xl hover:-translate-y-2 mx-auto transition-all">
        <Image
          width={width}
          height={height}
          src={icon}
          alt={alt}
          loading="lazy"
          className="object-cover object-center m-auto"
        />
      </div>
      <h2 className="text-center text-slate-800 mt-3 font-medium leading-tight">
        {name}
      </h2>
      <p className="text-center text-slate-600 text-sm mt-3 font-medium leading-tight">
        {level}
      </p>
    </article>
  );
}

export default CardSkills;
