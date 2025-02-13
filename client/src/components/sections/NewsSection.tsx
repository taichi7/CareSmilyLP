import React from 'react';

const NewsSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center px-20 pt-16 pb-36 font-bold leading-snug text-center whitespace-nowrap bg-cyan-100 max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-col mb-0 w-full max-w-[1090px] max-md:mb-2.5 max-md:max-w-full">
        <div className="self-center text-5xl text-zinc-800 max-md:text-4xl">
          新着お知らせ
        </div>
        <div className="flex flex-col px-20 pt-16 pb-9 mt-16 w-full text-4xl text-white bg-white rounded-3xl border border-black border-solid shadow-[0px_10px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex shrink-0 max-w-full bg-white rounded-3xl border border-black border-solid h-[187px] shadow-[5px_10px_4px_rgba(0,0,0,0.25)] w-[927px]" />
          <div className="flex shrink-0 mt-11 max-w-full bg-white rounded-3xl border border-black border-solid h-[187px] shadow-[5px_10px_4px_rgba(0,0,0,0.25)] w-[927px] max-md:mt-10" />
          <button className="gap-2.5 self-center px-7 py-2.5 mt-10 max-w-full rounded-3xl bg-sky-400 bg-opacity-70 min-h-[75px] w-[258px] max-md:px-5">
            もっと見る
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;