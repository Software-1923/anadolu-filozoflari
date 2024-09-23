"use client";

import Image from "next/image";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";

import pag from "@/public/images/end.jpg";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <div className="mx-auto flex max-w-sm flex-col justify-between">
            <span
              className={`-mt-14 inline-block text-[64px] font-bold text-black dark:text-white`}
            >
              Son Kısım
            </span>
            <p className="pb-6 font-medium">
            &quot;Bu filozofların düşünceleri, Roma İmparatorluğu dönemine ve hatta Bizans felsefesine kadar uzanan kozmoloji, etik ve metafizik alanlarındaki gelişmeleri şekillendirmiştir. Stoacılar ve Yeni Platonculuk gibi akımlar, bu fikirleri daha da genişleterek sürdürmüştür.&quot;
            </p>
            <p className="pb-6 font-medium">
             - Kaynak{" "}
              <a
                href="https://chs.harvard.edu/chapter/17-the-heraclitean-logos/"
                target="_blank"
                rel="noreferrer"
                className="pb-1 text-zinc-800 dark:text-zinc-100 underline font-medium"
              >
                Harvard
              </a>{" "}
            </p>
          </div>
        </Wrapper>
      </section>

      {/* second half */}

      <section className="hidden lg:flex h-screen w-full flex-col justify-center items-center bg-[#ffefd6] p-9">
        <Image src={pag} alt="Boy and girl playing with robot" />
      </section>
    </section>
  );
}
