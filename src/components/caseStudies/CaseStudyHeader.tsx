import { CaseStudy } from '@/types/case';
import Image from 'next/image';

export default function CaseStudyHeader({ study }: { study: CaseStudy }) {
  return (
    <div className="relative h-[70vh] w-1/2">
      <Image
        width={600}
        height={600}
        src={study.image}
        alt={study.title}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-6">
        <h3 className="text-2xl font-bold text-white">{study.title}</h3>
        <p className="text-white/90">{study.subtitle}</p>
      </div>
    </div>
  );
}
