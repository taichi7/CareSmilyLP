import React from 'react';

const ProductInfoSection: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center px-20 py-20 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1137px] max-md:max-w-full">
        <div className="self-center max-w-full w-[556px]">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[81%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7e8c3aaffeac85fbe83918aba7ceeb1b31d35a3f9f974f93da3c4555b0f5e63?placeholderIfAbsent=true&apiKey=bd568ac7d33e4586ab20a6a038c2e0cd"
                className="object-contain grow w-full aspect-[3.51] max-md:mt-3 max-md:max-w-full"
                alt="CareSmily logo"
              />
            </div>
            <div className="flex flex-col ml-5 w-[19%] max-md:ml-0 max-md:w-full">
              <div className="self-stretch my-auto text-4xl font-bold leading-snug text-center text-zinc-800 max-md:mt-10">
                とは？
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 text-4xl font-bold text-center leading-[53px] text-stone-500 max-md:max-w-full">
          介護施設で多くの手間と時間がかかる書類作成を効率化するための
          <br />
          会員制WEBアプリです
        </div>
        <ProductFeatures />
      </div>
    </div>
  );
};

interface ProductFeatureProps {
  imageSrc: string;
  title: string;
  description: string;
  ctaText: string;
  isReversed?: boolean;
}

const ProductFeature: React.FC<ProductFeatureProps> = ({ imageSrc, title, description, ctaText, isReversed }) => {
  const contentOrder = isReversed ? 'order-2' : 'order-1';
  const imageOrder = isReversed ? 'order-1' : 'order-2';

  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="grow py-5 pr-5 pl-1 w-full bg-white rounded-3xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className={`flex flex-col w-[56%] max-md:ml-0 max-md:w-full ${imageOrder}`}>
            <img
              loading="lazy"
              src={imageSrc}
              className="object-contain grow w-full aspect-[1.62] max-md:mt-5"
              alt={title}
            />
          </div>
          <div className={`flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full ${contentOrder}`}>
            <div className="flex flex-col self-stretch my-auto w-full font-bold leading-snug whitespace-nowrap max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa3d78e18cb459307ffdc2e3c4192d5b6bbc33229ee2d4561696d02f04dc507d?placeholderIfAbsent=true&apiKey=bd568ac7d33e4586ab20a6a038c2e0cd"
                className="object-contain max-w-full aspect-[3.5] w-[105px] max-md:ml-1"
                alt="CareSmily icon"
              />
              <div className="gap-2.5 self-stretch py-px pr-5 pl-5 text-3xl text-white bg-sky-500 rounded-xl min-h-[44px] max-md:pl-5">
                {title}
              </div>
              <div className="flex self-center mt-4 max-w-full text-2xl text-center text-stone-500 w-[155px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/62cce0a9-cad7-4096-bcdf-4cf1bbbd2932?placeholderIfAbsent=true&apiKey=bd568ac7d33e4586ab20a6a038c2e0cd"
                  className="object-contain shrink-0 self-start mt-1.5 aspect-square shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[23px]"
                  alt="Arrow icon"
                />
                <div className="grow shrink w-[127px]">
                  {ctaText}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductFeatures: React.FC = () => {
  const features = [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/39a6a789ef6060c7af4947ff3ae2062cd8ebe627b77086eb2954b3e0734d31ea?placeholderIfAbsent=true&apiKey=bd568ac7d33e4586ab20a6a038c2e0cd",
      title: "デイサービス",
      description: "",
      ctaText: "詳しく見る"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0f7bf0aed33c6a50dc6573e78dcdc0b0c29564d225c3e33f28fa31cfe60ae1fe?placeholderIfAbsent=true&apiKey=bd568ac7d33e4586ab20a6a038c2e0cd",
      title: "介護記録",
      description: "",
      ctaText: "詳しく見る",
      isReversed: true
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2e45a0e9f6aaf11b705a7aee3dd25c9ccf414720385b47685240275d624b6272?placeholderIfAbsent=true&apiKey=bd568ac7d33e4586ab20a6a038c2e0cd",
      title: "訪問介護",
      description: "",
      ctaText: "詳しく見る"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b8dd2f7b04e9489607ac14e8a19d5b80321a5d63c278a4d0702407635aa15c08?placeholderIfAbsent=true&apiKey=bd568ac7d33e4586ab20a6a038c2e0cd",
      title: "ケアマネージャー",
      description: "",
      ctaText: "詳しく見る",
      isReversed: true
    }
  ];

  return (
    <>
      <div className="mt-20 mr-2.5 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {features.slice(0, 2).map((feature, index) => (
            <ProductFeature key={index} {...feature} />
          ))}
        </div>
      </div>
      <div className="mt-24 mr-2.5 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {features.slice(2, 4).map((feature, index) => (
            <ProductFeature key={index + 2} {...feature} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductInfoSection;