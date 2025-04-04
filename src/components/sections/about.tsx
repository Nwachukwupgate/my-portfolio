import Image from 'next/image';
import Link from 'next/link';
import profileImage from '../../../images/homepage/IMG_2038.jpg';

import { shimmer, toBase64 } from '@/lib/utils';

import { Button } from '../ui/button';

const AboutSection: React.FC  = () => {
  return (
    <section id="about" className="pt-24 lg:pt-[9.375rem]">
      <div className="main-container main-grid">
        <div className="relative h-[21.625rem] w-full sm:col-start-1 sm:col-end-6 sm:row-start-1 sm:h-full lg:col-end-7">
          <Image
            src={profileImage}
            alt="Alex Spencer"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 60vw, (max-width: 1200px) 50vw"
            placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(540, 600))}`}
            className="object-cover object-center sm:object-right"
          />
        </div>
        <div className="my-8 space-y-6 border-y border-border pb-[3.25rem] pt-8 sm:col-start-7 sm:col-end-13 sm:row-start-1 sm:my-0 sm:pt-[3.25rem] lg:col-start-8 lg:col-end-12">
          <h2 className="heading-2">About me</h2>
          <p className="mt-1">           
            I am a senior fullstack developer, armed with a solid Computer Science background from university. With strong strong desire for innovation and technological solutons.
            
            <span>
              I started diving into the world of web development about 6+ years ago. Since then, I have been learning how to write accessible HTML code, using modern CSS practices and writing clean JavaScript and python. When writing JavaScript code, I mostly use React, Next, Node.js but I can adapt to whatever tools are required.
            </span>

            <span>
              I am based in Lagos, Sangotedo, but available to move or work remotely. I would love you to check out my work.
            </span>
          </p>
          <Button variant="secondary" asChild>
            <Link href="/portfolio">Go to portfolio</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
