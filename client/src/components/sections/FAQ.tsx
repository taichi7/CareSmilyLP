import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-wrap gap-10 justify-between items-center px-8 py-6 w-full bg-white rounded-xl max-md:px-5 max-md:max-w-full">
      <div className="flex gap-3.5 items-center self-stretch my-auto min-w-[240px]">
        <div className="self-stretch my-auto text-2xl font-bold tracking-widest text-[color:var(--,#019ADB)]">
          Q
        </div>
        <div className="flex-1 shrink self-stretch my-auto text-base tracking-wider basis-0 text-zinc-800">
          {question}
        </div>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="focus:outline-none"
      >
        <img
          loading="lazy"
          src={isOpen ? "https://cdn.builder.io/api/v1/image/assets/TEMP/e8ac87ef94c956d57d2246485584d23f1f79045b93a2254725c00a7399ab0821?placeholderIfAbsent=true&apiKey=bd568ac7d33e4586ab20a6a038c2e0cd" : "https://cdn.builder.io/api/v1/image/assets/TEMP/32c6e71fa6cac2901549dbf67f3315cf004b16f418348c8509389e782e3fcb78?placeholderIfAbsent=true&apiKey=bd568ac7d33e4586ab20a6a038c2e0cd"}
          className="object-contain shrink-0 self-stretch my-auto aspect-[0.54] w-[13px]"
          alt={isOpen ? "Close answer" : "Open answer"}
        />
      </button>
      {isOpen && (
        <div className="w-full mt-4 text-base text-zinc-800">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqItems: FAQItemProps[] = [
    {
      question: "本当に時短につながりますか？",
      answer: "はい、CareSmily の導入により、多くのユーザーが書類作成時間を最大50%削減できたと報告しています。"
    },
    {
      question: "既存の介護システムとの連携は必要ですか？",
      answer: "CareSmily は独立したシステムとして機能しますが、多くの一般的な介護システムとの連携も可能です。詳細については、サポートチームにお問い合わせください。"
    },
    {
      question: "ITが苦手なスタッフでも使用できますか？",
      answer: "はい、CareSmily は直感的なユーザーインターフェースを採用しており、ITスキルに関わらず簡単に使用できるよう設計されています。また、充実したサポートとトレーニング資料も提供しています。"
    },
    {
      question: "どのくらいの量の文例が入ってますか？",
      answer: "CareSmily には、介護現場で必要とされる様々な状況に対応した数千の文例が収録されています。また、定期的に更新され、新しい文例が追加されています。"
    }
  ];

  return (
    <div className="flex relative flex-col justify-center px-40 py-16 w-full bg-[color:var(--,linear-gradient(180deg,#0096DB_27%,#7ECEF3_100%))] max-md:px-5 max-md:max-w-full">
      <div className="flex overflow-hidden absolute right-0 bottom-0 z-0 flex-col py-9 pr-20 h-[558px] w-[1440px] max-md:pr-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between items-start max-md:max-w-full">
          <div className="flex flex-col mt-4">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/03c700ea70890c0b60d0f7cf016d069874aa1fed169bdc6cf6c0f75a905248e9?placeholderIfAbsent=true&apiKey=bd568ac7d33e4586ab20a6a038c2e0cd"
              className="object-contain self-end aspect-square w-[34px]"
              alt="Decorative element"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d59a85c81755be43ce14323d418dcf7eed27cd24c83d4e401a44b69fda7d69f9?placeholderIfAbsent=true&apiKey=bd568ac7d33e4586ab20a6a038c2e0cd"
              className="object-contain mt-9 aspect-[0.54] w-[53px]"
              alt="Decorative element"
            />
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6b841f3269b9445f311dab2b5af0d40b4a8e39868da505843ff06a34a8c5072?placeholderIfAbsent=true&apiKey=bd568ac7d33e4586ab20a6a038c2e0cd"
            className="object-contain shrink-0 aspect-square w-[98px]"
            alt="Decorative element"
          />
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/474d95575e80f3d93fbd31b0d797b5e0e754af9216989d077ff938a65076e9d3?placeholderIfAbsent=true&apiKey=bd568ac7d33e4586ab20a6a038c2e0cd"
          className="object-contain self-end mt-64 mr-7 aspect-[1.03] w-[34px] max-md:mt-10 max-md:mr-2.5"
          alt="Decorative element"
        />
      </div>
      <div className="z-0 self-center text-4xl font-semibold leading-snug text-center text-white">
        FAQ
      </div>
      <div className="flex z-0 flex-col px-40 mt-8 w-full leading-none whitespace-nowrap max-md:px-5 max-md:max-w-full">
        {faqItems.map((item, index) => (
          <FAQItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;