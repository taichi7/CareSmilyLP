import React from 'react';
import styles from './Text.module.css';

interface ConcernProps {
  title: string;
  description: string;
}

const Concern: React.FC<ConcernProps> = ({ title, description }) => (
  <div className="flex flex-col items-center self-stretch px-6 py-8 my-auto bg-white rounded-3xl border-solid border-[5px] border-zinc-300 min-w-[240px] max-md:px-5">
    <div className="text-3xl font-bold tracking-tighter leading-none text-[color:var(--,#019ADB)]">
      {title}
    </div>
    <div className="mt-4 text-lg font-semibold leading-9 text-zinc-800">
      {description}
    </div>
  </div>
);

const Concerns: React.FC = () => {

  return (
    
    <div className="flex flex-col items-center px-20 pt-6 pb-10 mt-5 w-full text-center bg-cyan-100 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col items-center w-full max-w-[1120px] max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-start ml-14 max-w-full text-4xl font-bold leading-snug text-[color:var(--,#019ADB)] w-[618px]">
          <div data-svg-wrapper class="relative">
          <svg width="76" height="96" viewBox="0 0 76 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_2_54)">
          <path d="M62.9701 93.5954C60.6406 94.6523 58.2745 94.8272 55.8467 94.1181C53.4281 93.4013 51.5993 91.694 50.3612 88.9879C49.2667 86.5896 49.1787 84.1906 50.1149 81.7838C51.042 79.3847 52.7281 77.6235 55.164 76.5078C57.5641 75.4145 59.9582 75.3095 62.3454 76.2012C64.7326 77.0929 66.4739 78.7337 67.5677 81.1404C68.7834 83.8108 68.8896 86.2959 67.8686 88.6027C66.8477 90.9094 65.2121 92.5734 62.9694 93.6038L62.9701 93.5954ZM6.44946 43.7018C4.79678 40.0823 4.28363 35.8816 4.90932 31.1079C5.535 26.3343 7.52715 21.7081 10.8683 17.2366C14.2178 12.7657 18.8646 9.17184 24.8087 6.45504C30.3384 3.94039 35.6912 2.73789 40.8511 2.83774C46.0103 2.94597 50.5473 4.22788 54.4539 6.68276C58.3604 9.13764 61.2507 12.4207 63.133 16.5326C64.6148 19.766 65.2496 22.912 65.0478 25.9462C64.846 28.9803 64.2473 31.8039 63.2446 34.3996C62.242 36.9952 60.3562 41.4611 57.5796 47.7883C56.8232 49.5593 56.2572 51.0757 55.8829 52.3207C55.5079 53.5741 55.2995 54.6554 55.2653 55.5738C55.2228 56.4914 55.2684 57.3657 55.4016 58.205C55.5347 59.0444 55.8115 60.4957 56.2494 62.552C57.3386 66.843 55.9706 69.8646 52.1635 71.6014C50.1854 72.5016 48.2135 72.6164 46.2736 71.9394C44.3253 71.2617 42.7682 69.6447 41.6015 67.0967C40.1421 63.8989 39.3681 60.9019 39.2878 58.1063C39.2075 55.3106 39.5809 52.6542 40.4162 50.1376C41.2432 47.6203 42.5006 44.505 44.1625 40.7979C45.625 37.556 46.655 35.1401 47.2434 33.558C47.8319 31.9759 48.1956 30.3497 48.3262 28.6787C48.4652 27.0085 48.1688 25.3865 47.4609 23.8317C46.0652 20.7829 43.7576 18.7315 40.5303 17.6685C37.303 16.6055 33.9038 16.8973 30.3171 18.5257C26.123 20.4416 23.5158 22.9036 22.5034 25.921C21.491 28.9384 21.2355 32.8217 21.7375 37.5624C22.4041 42.4605 20.9304 45.7353 17.3081 47.3861C15.1718 48.3577 13.0256 48.4326 10.8708 47.594C8.71526 46.7639 7.24149 45.4665 6.44036 43.7095L6.44946 43.7018Z" fill="#E9F7FF"/>
          </g>
          <defs>
          <clipPath id="clip0_2_54">
          <rect width="68" height="90" fill="white" transform="translate(7.4646) rotate(4.75768)"/>
          </clipPath>
          </defs>
          </svg>
          </div>
          
          <div className="grow self-start pt-7  decoration-[9%] decoration-solid underline-offset-[25%] w-fit max-md:max-w-full">
            こんな<span className="text-sky-500 underline">お悩み</span>
            ありませんか？
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/622bd3fdebf911b64117962d83df2b0a1f1b7dc1ee85903efcc40d5bc83b1894?placeholderIfAbsent=true&apiKey=bd568ac7d33e4586ab20a6a038c2e0cd"
            className="object-contain shrink-0 self-end mt-12 w-12 aspect-[0.68] max-md:mt-10"
            alt="Decorative question mark"
          />
        </div>
        <div class="w-[1120px] h-[187px] justify-between items-center inline-flex">
            <div class="px-6 py-[30px] bg-white rounded-[20px] border-4 border-[#d9d9d9] flex-col justify-start items-center gap-4 inline-flex">
                <div class="text-center text-[#0199db] text-[28px] font-bold font-['Noto Sans'] leading-[37px]">介護ニーズ拡大 & 人手不足</div>
                <div class="text-center text-[#333333] text-lg font-semibold font-['Noto Sans'] leading-[34px]">2025年・2040年問題に向け、<br/>効率化は急務。</div>
            </div>
            <div class="px-6 py-[30px] bg-white rounded-[20px] border-4 border-[#d9d9d9] flex-col justify-start items-start gap-4 inline-flex">
                <div class="text-center text-[#0199db] text-[28px] font-bold font-['Noto Sans'] leading-[37px]">大手システムの課題</div>
                <div class="text-center text-[#333333] text-lg font-semibold font-['Noto Sans'] leading-[34px]">加算管理やレセプト連動が中心で<br/>高コスト・操作が複雑。</div>
            </div>
            <div class="px-6 py-[30px] bg-white rounded-[20px] border-4 border-[#d9d9d9] flex-col justify-start items-center gap-[22px] inline-flex">
                <div class="text-center text-[#0199db] text-[28px] font-bold font-['Noto Sans'] leading-[37px]">膨大な文書作成</div>
                <div class="text-center text-[#333333] text-lg font-semibold font-['Noto Sans'] leading-[34px]">「文章をどう書くか」に現場は苦戦し、<br/>属人化・教育負担が増大。</div>
            </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/012bddeff1c5e8428f06f52c7eb7352d041e54caafc0e8f8f421e608e2f4cb7d?placeholderIfAbsent=true&apiKey=bd568ac7d33e4586ab20a6a038c2e0cd"
          className="object-contain mt-5 w-64 max-w-full aspect-[1.06]"
          alt="Decorative arrow"
        />
      </div>
    </div>
  );
};

export default Concerns;