import React from 'react';

const Header: React.FC = () => {
  return (
    <>
      <div className="flex w-full bg-zinc-800 min-h-[5px] max-md:max-w-full" />
      <div className="flex flex-wrap gap-5 justify-between items-start px-6 py-9 w-full max-md:pr-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c825c244e52912b8d84c416aeaee322e6e5b6f15fe1be85cccc77e97f0e35794?placeholderIfAbsent=true&apiKey=bd568ac7d33e4586ab20a6a038c2e0cd"
          className="object-contain shrink-0 mt-2 max-w-full aspect-[3.5] w-[294px]"
          alt="CareSmily logo"
        />
        <div className="flex relative flex-col py-6 pr-8 pl-9 min-h-[79px] max-md:px-5 max-md:max-w-full">
          <div className="flex absolute right-0 bottom-0 z-0 flex-col max-w-full h-[79px] rounded-[36px] w-[633px]">
            <div className="flex shrink-0 bg-gray-200 h-[79px] rounded-[36px] max-md:max-w-full" />
          </div>
          <nav className="flex z-0 flex-wrap gap-10 w-full text-base font-medium whitespace-nowrap max-w-[569px] text-zinc-800 max-md:max-w-full">
            <div className="flex flex-auto gap-9 items-center my-auto">
              <div className="flex gap-9 items-center self-stretch my-auto min-w-[240px]">
                <a href="#services" className="self-stretch my-auto">サービス一覧</a>
                <a href="#cases" className="self-stretch my-auto">導入事例</a>
                <a href="#pricing" className="self-stretch my-auto">料金</a>
              </div>
              <a href="#faq" className="self-stretch my-auto">よくある質問</a>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/68c33f8c0478d2fa66de553ab13f3e3e8812c0ef1c1772bf7a8f617e4e99b962?placeholderIfAbsent=true&apiKey=bd568ac7d33e4586ab20a6a038c2e0cd"
              className="object-contain shrink-0 max-w-full aspect-[4.74] w-[152px]"
              alt="Navigation menu"
            />
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;