'use client';

import { icons } from '@/assets';
import { SKILLS, TOOLS } from '@/datas/skills';
import Image from 'next/image';
import { useState } from 'react';
import RenderedCardSkills from '../components/skills/RenderedCardSkills';

function SkillSect() {
  const [tabActive, setTabActive] = useState('tech');

  return (
    <section
      id="skills"
      className="scroll-mt-5 flex flex-col gap-14 padding-inline pt-24 mt-10 lg:min-h-screen"
    >
      <h1 className="text-center text-5xl md:text-[2.5rem] lg:text-[4rem] leading-tight font-semibold text-blue-600">
        Skills
      </h1>
      <div className="flex flex-col gap-14 pb-10 pt-16 items-center rounded-2xl bg-white shadow-xl hover:shadow-2xl">
        <div className="flex items-center justify-center gap-9 min-[500px]:gap-10 lg:gap-24">
          <button
            type="button"
            title="Tech stack"
            aria-label="Tech Stack"
            className={`font-semibold text-lg flex items-center justify-center gap-2 ${tabActive === 'tech' ? 'text-blue-600' : 'text-black'}`}
            onClick={() => setTabActive('tech')}
          >
            <Image
              width={20}
              height={20}
              src={tabActive === 'tech' ? icons.codeBlueIcon : icons.codeIcon}
              alt="code ikon"
              loading="lazy"
              className="object-cover object-center m-auto"
            />
            Tech Stack
          </button>
          <button
            type="button"
            title="Tools"
            aria-label="Tools ikon"
            className={`font-semibold text-lg flex items-center justify-center gap-2 ${tabActive === 'tools' ? 'text-blue-600' : 'text-black'}`}
            onClick={() => setTabActive('tools')}
          >
            <Image
              width={18}
              height={18}
              src={
                tabActive === 'tools' ? icons.toolsBlueIcon : icons.toolsIcon
              }
              alt="code ikon"
              loading="lazy"
              className="object-cover object-center m-auto"
            />
            Tools
          </button>
        </div>
        <div
          className={`transition-all duration-700 p-5 grid justify-center items-center gap-x-4 gap-y-6 grid-cols-2 min-[550px]:grid-cols-3 min-[730px]:grid-cols-4 ${tabActive === 'tech' ? 'w-full min-[890px]:grid-cols-5 lg:grid-cols-6' : 'w-4/5 md:w-[564px]'}`}
        >
          {tabActive === 'tech' ? (
            <RenderedCardSkills datas={SKILLS} />
          ) : (
            <RenderedCardSkills datas={TOOLS} />
          )}
        </div>
      </div>
    </section>
  );
}

export default SkillSect;
