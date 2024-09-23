"use client";

import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";

import manWIthRobot from "@/public/images/thales.jpg";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <div className="mx-auto flex max-w-sm flex-col justify-between">
            <span
              className={`-mt-14 inline-block text-[64px] font-bold text-black dark:text-white`}
            >
              Miletli Thales
            </span>
            <p className="pb-6 font-medium">
            &quot;(M.Ö. 624–546), doğa olaylarını doğaüstü açıklamalardan sıyırarak rasyonel düşünceyle açıklamaya çalışmış, evrenin temel maddesinin &quot;su&quot; olduğunu öne sürmüştür. Thales’in akla ve gözleme dayalı yöntemleri, bilimsel düşüncenin temellerini oluşturmuştur​.&quot;
            </p>


          </div>
        </Wrapper>
      </section>

      {/* second half */}

      <section className="hidden lg:flex h-screen w-full flex-col justify-center items-center bg-[#e0f5ff] p-9">
        <Image src={manWIthRobot} alt="Man sitting in wheelchair" />
      </section>
    </section>
  );
}
