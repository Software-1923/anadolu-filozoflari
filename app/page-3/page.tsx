"use client";

import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";

import pageA4 from "@/public/images/anaksimandros.jpeg";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <div className="mx-auto flex max-w-sm flex-col justify-between">
            <span
              className={`-mt-14 inline-block text-[64px] font-bold text-black dark:text-white`}
            >
              Anaksimandros
            </span>
            <p className="pb-6 font-medium">
            - &quot;(M.Ö. 610–546), hocası Thales’in görüşlerini genişleterek &quot;apeiron&quot; (sonsuz ya da sınırsız) kavramını ortaya atmış ve bu maddenin her şeyin kökeni olduğunu savunmuştur. Ayrıca insanın balıklardan evrildiği düşüncesiyle erken bir evrim teorisi öne sürmüştür​.&quot;
            </p>
          </div>
        </Wrapper>
      </section>

      {/* second half */}

      <section className="hidden lg:flex h-screen w-full flex-col justify-center items-center bg-[#ffefd6] p-9">
        <Image src={pageA4} alt="Boy and girl playing with robot" />
      </section>
    </section>
  );
}
