import React from 'react';

interface BenefitProps {
  icon: string;
  title: string;
  description: string;
}

const Benefit: React.FC<BenefitProps> = ({ icon, title, description }) => (
  <div className="flex gap-10 ml-3 text-3xl font-bold leading-snug whitespace-nowrap text-zinc-800 max-md:ml-2.5">
    <img
      loading="lazy"
      src={icon}
      className="object-contain shrink-0 aspect-square w-[53px]"
      alt={`${title} icon`}
    />
    <div className="flex-auto">{title}</div>
  </div>
);

const BenefitsSection: React.FC = () => {
  const benefits: BenefitProps[] = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/119d0e11ff82991c798d2db5b1165a782731fb7a08625b355c5a5d45329c6c08?placeholderIfAbsent=true&apiKey=bd568ac7d33e4586ab20a6a038c2e0cd",
      title: "精神的負担の軽減",
      description: "文章作成のストレスが大幅に減少し、スタッフの心理的負担が軽減されました。新人も安心して業務に取り組める環境を実現。"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2c7a6e515f3ef39e1c760951d375edf45239043b43fcbb0bbcd8d7c35777abe5?placeholderIfAbsent=true&apiKey=bd568ac7d33e4586ab20a6a038c2e0cd",
      title: "教育・学習効果",
      description: "文例を通じて自然に適切な表現を学び、スタッフ間の知見共有が活性化。人材育成としての効果も見込めます。"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3b2ad6dada07f64097aa129813b5fe54874867931d65450db634f67d2f6e49d6?placeholderIfAbsent=true&apiKey=bd568ac7d33e4586ab20a6a038c2e0cd",
      title: "施設運営の効率向上",
      description: "書類作成時間の削減により、ケアにかける時間の確保や業務効率の底上げを実現。運営指導などの対応もスムーズに行えます。"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c85d2869ee8286e3a6ca76a558e32a94734459c0e9834c0524c7887f64c12e53?placeholderIfAbsent=true&apiKey=bd568ac7d33e4586ab20a6a038c2e0cd",
      title: "書類作成の大幅な時間短縮",
      description: "キーワード検索→文例選択→微調整だけで完了。作成時間を最大50%削減できます。"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0275e05b13b5a7dfd782f4bb850f919aef531eee341771ffd5e4f2bfd1eda7d3?placeholderIfAbsent=true&apiKey=bd568ac7d33e4586ab20a6a038c2e0cd",
      title: "チームコミュニケーション活性化",
      description: "統一された表現で情報共有がスムーズになり、スタッフ間でケアの協力体制が強化されました。"
    }
  ];

  return (
    <div className="flex flex-col items-center px-20 pb-16 mt-20 w-full bg-sky-300 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col items-center max-w-full w-[928px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b256c9dcf52145b6afbbf02942755e913cbf80eb1a46aa22d493bba10f6fbe49?placeholderIfAbsent=true&apiKey=bd568ac7d33e4586ab20a6a038c2e0cd"
          className="object-contain max-w-full aspect-[5.85] w-[304px]"
          alt="CareSmily logo"
        />
        <div className="flex flex-wrap gap-1.5 mt-8 max-w-full text-3xl font-bold leading-10 text-center text-white w-[608px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd3e4673db7e04f652b5282ee1c8addfbb98cab71db2ef5ef816eeed1e6de47b?placeholderIfAbsent=true&apiKey=bd568ac7d33e4586ab20a6a038c2e0cd"
            className="object-contain shrink-0 aspect-[0.7] w-[52px]"
            alt="Decorative icon"
          />
          <div className="flex flex-auto gap-7 justify-center items-start self-start mt-5 max-md:max-w-full">
            <div className="min-w-[240px] max-md:max-w-full">
              <span className="text-4xl text-zinc-800">
                CareSmilyを導入するメリット
              </span>{" "}
            </div>
          </div>
        </div>
        <div className="z-10 px-16 py-3 mt-12 max-w-full text-5xl font-bold leading-snug text-center text-white whitespace-nowrap bg-lime-500 rounded-3xl w-[545px] max-md:px-5 max-md:mt-10 max-md:text-4xl">
          ５つの導入効果
        </div>
        <div data-svg-wrapper>
        <svg width="56" height="47" viewBox="0 0 56 47" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28 47L0.7202 0.5L55.2798 0.5L28 47Z" fill="#9FC720"/>
        </svg>
        </div>
        <div className="flex flex-col items-start self-stretch pt-20 pr-7 pl-16 w-full bg-white rounded-3xl border-lime-500 border-solid border-[9px] max-md:px-5 max-md:max-w-full">
          {benefits.map((benefit, index) => (
            <React.Fragment key={index}>
              <Benefit {...benefit} />
              <div className="self-center mt-1.5 ml-8 text-lg font-medium leading-7 text-stone-500 max-md:max-w-full">
                {benefit.description}
              </div>
              {index < benefits.length - 1 && (
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/da74da232c6a718852c5956e7663e350630e6fb6c39b043683576e9c67730229?placeholderIfAbsent=true&apiKey=bd568ac7d33e4586ab20a6a038c2e0cd"
                  className="object-contain mt-7 max-w-full aspect-[250] w-[801px]"
                  alt="Divider"
                />
              )}
            </React.Fragment>
          ))}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/36f496dd-242c-441c-9a5e-4b87535f82e4?placeholderIfAbsent=true&apiKey=bd568ac7d33e4586ab20a6a038c2e0cd"
            className="object-contain grow shrink-0 mt-32 max-w-full aspect-[0.77] w-[210px] max-md:mt-10"
            alt="Decorative illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;