import { SOSMED } from '@/datas/sosmed';
import LinkSosmed from './LinkSosmed';

function RenderedLinkSosmed() {
  return (
    <div className="grid w-full min-[900px]:w-4/5 gap-5 mx-auto grid-cols-1 min-[605px]:grid-cols-2 min-[1200px]:grid-cols-3">
      {SOSMED.map((sosmed, i) => (
        <LinkSosmed
          key={i}
          href={sosmed.href}
          icon={sosmed.icon}
          alt={sosmed.alt}
          title={sosmed.title}
          cta={sosmed.cta}
        />
      ))}
    </div>
  );
}

export default RenderedLinkSosmed;
