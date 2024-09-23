"use client";

import Image from "next/image";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";

import pag from "@/public/images/herakleitos.jpg";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <div className="mx-auto flex max-w-sm flex-col justify-between">
            <span
              className={`-mt-14 inline-block text-[64px] font-bold text-black dark:text-white`}
            >
              Herakleitos
            </span>
            <p className="pb-6 font-medium">
            &quot;(M.Ö. 535–475), Efes&apos;te yaşamış ve evrendeki sürekli değişimi vurgulamıştır. Ünlü &quot;aynı nehirde iki kez yıkanamazsınız&quot; sözüyle değişim olgusunu ifade eden Herakleitos, evrensel düzenin &quot;logos&quot; adı verilen akılla yönetildiğini savunmuştur.&quot;
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
