import CardSkills from './CardSkills';

function RenderedCardSkills({ datas, width, height }) {
  return (
    <>
      {datas.map((data, i) => (
        <CardSkills
          key={i}
          icon={data.icon}
          alt={data.name + ' ikon'}
          name={data.name}
          width={width}
          height={height}
          level={data.level}
        />
      ))}
    </>
  );
}

export default RenderedCardSkills;
