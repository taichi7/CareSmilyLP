import React from 'react';

interface FeatureProps {
  number: string;
  title: string;
  description: string;
  imageSrc: string;
  additionalInfo?: string[];
}


const Feature: React.FC<FeatureProps> = ({ number, title, description, imageSrc, additionalInfo }) => (
    <div className="flex relative flex-col items-center px-20 pt-28 pb-2.5 w-full min-h-[2064px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b646ef787f99345de7dda76de3ecfc5f345dd75e109ce917e56a6e9dc2548c1d?placeholderIfAbsent=true&apiKey=bd568ac7d33e4586ab20a6a038c2e0cd"
        className="object-cover absolute inset-0 size-full"
        alt="Background pattern"
      />

      <div className="w-[1075px] h-[1949.27px] relative">
          <div className="w-[1075px] h-[1784.27px] left-0 top-[165px] absolute">

              <div className="w-[1075px] h-[537.55px] pl-[25px] pt-20 pb-[71.55px] left-0 top-0 absolute bg-white rounded-[20px] shadow-[0px_10px_4px_0px_rgba(0,0,0,0.25)] border border-black justify-end items-center inline-flex">
                <div className="w-[1073px] h-[386px] relative">
                    <img className="w-[487.88px] h-60 left-[5px] top-[146px] absolute" src="https://cdn.builder.io/api/v1/image/assets/TEMP/67311dab0dd9afc00bdce897f1081f97c352f3a49fb12f67a4cdf698dd0b76b9?placeholderIfAbsent=true&apiKey=bd568ac7d33e4586ab20a6a038c2e0cd" />
                    <div className="w-[287px] h-[95px] px-[60px] py-[22px] left-0 top-0 absolute bg-orange-500 rounded-[20px] justify-center items-center gap-2.5 inline-flex">
                        <div className="text-center text-white text-[40px] font-bold font-['Noto Sans'] leading-[56px]">その1</div>
                    </div>
                    <div data-svg-wrapper className="left-[197px] top-[255px] absolute">
                    </div>
                    <div className="w-[674px] h-14 left-[306px] top-[20px] absolute text-center text-zinc-800 text-[45px] font-bold font-['Noto Sans'] leading-[63px]">事業所専用の管理画面</div>
                    <div className="w-[503px] h-[155px] left-[529px] top-[149px] absolute text-justify text-zinc-800 text-[32px] font-normal font-['Noto Sans JP'] leading-[48px]">パソコンやスマートフォンからアクセス可能。事業所ごとのマイページからアプリにアクセス。</div>
                    <div className="w-[289px] h-14 left-[529px] top-[315px] absolute">
                        <div className="w-[289px] h-12 left-0 top-0 absolute text-center text-stone-500 text-[32px] font-bold font-['Noto Sans JP'] leading-[48px] tracking-wider">クラウド型システム</div>
                        <div className="w-[281px] h-[27px] left-[4px] top-[29px] absolute opacity-20 bg-orange-500"></div>
                    </div>
                </div>
              </div>

              <div className="w-[1075px] h-[537.55px] pl-[25px] pt-20 pb-[71.55px] left-0 top-[623.36px] absolute bg-white rounded-[20px] shadow-[0px_10px_4px_0px_rgba(0,0,0,0.25)] border border-black justify-end items-center inline-flex">
                  <div className="w-[1073px] h-[386px] relative">
                      <img className="w-[487.88px] h-60 left-[5px] top-[146px] absolute" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9e3a2fa3ab86f5b2c7bfe0ccf9e5dbf4863c5ae60fc87e76da2208d7669a868?placeholderIfAbsent=true&apiKey=bd568ac7d33e4586ab20a6a038c2e0cd" />
                      <div className="w-[287px] h-[95px] px-[60px] py-[22px] left-0 top-0 absolute bg-orange-500 rounded-[20px] justify-center items-center gap-2.5 inline-flex">
                          <div className="text-center text-white text-[40px] font-bold font-['Noto Sans'] leading-[56px]">その２</div>
                      </div>
                      <div data-svg-wrapper className="left-[197px] top-[255px] absolute">
                      <svg width="73" height="79" viewBox="0 0 73 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.125 10.1089L30.6296 65.2614L38.2642 41.2439L60.7421 33.0864L9.125 10.1089Z" fill="black" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M39.5417 42.6089L57.7917 62.1089" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      </div>
                      <div className="w-[674px] h-14 left-[306px] top-[20px] absolute text-center text-zinc-800 text-[45px] font-bold font-['Noto Sans'] leading-[63px]">「書類を選択して」からスタート</div>
                      <div className="w-[503px] h-[155px] left-[529px] top-[149px] absolute text-justify text-zinc-800 text-[32px] font-normal font-['Noto Sans JP'] leading-[48px]">書類の種類をカテゴリー分け、内容はタグ分けしているので、必要な文例をすぐに探せる。</div>
                      <div className="w-[289px] h-14 left-[529px] top-[315px] absolute">
                          <div className="w-[289px] h-12 left-0 top-0 absolute text-center text-stone-500 text-[32px] font-bold font-['Noto Sans JP'] leading-[48px] tracking-wider">キーワード検索◎</div>
                          <div className="w-[281px] h-[27px] left-[4px] top-[29px] absolute opacity-20 bg-orange-500"></div>
                      </div>
                      <div className="w-[260px] h-[54px] left-[813px] top-[317px] absolute">
                          <div className="w-[260px] h-12 left-0 top-0 absolute text-center text-stone-500 text-[32px] font-bold font-['Noto Sans JP'] leading-[48px] tracking-wider">タグ機能◎</div>
                          <div className="w-[180px] h-[27px] left-[39px] top-[27px] absolute opacity-20 bg-orange-500"></div>
                      </div>
                  </div>
              </div>

              <div className="w-[1075px] h-[537.55px] pl-[25px] pr-[18px] pt-[74px] pb-[65.55px] left-0 top-[1246.72px] absolute bg-white rounded-[20px] shadow-[0px_10px_4px_0px_rgba(0,0,0,0.25)] border border-black justify-end items-center inline-flex">
                  <div className="w-[1032px] h-[398px] relative">
                      <div className="w-[287px] h-[95px] px-[60px] py-[22px] left-0 top-0 absolute bg-orange-500 rounded-[20px] justify-center items-center gap-2.5 inline-flex">
                          <div className="text-center text-white text-[40px] font-bold font-['Noto Sans'] leading-[56px]">その３</div>
                      </div>
                      <div className="w-[486px] h-14 left-[341px] top-[20px] absolute text-center text-zinc-800 text-[45px] font-bold font-['Noto Sans'] leading-[63px]">文例のコピー&ペースト</div>
                      <div className="w-[503px] h-[155px] left-[529px] top-[149px] absolute text-justify text-zinc-800 text-[32px] font-normal font-['Noto Sans JP'] leading-[48px]">アプリの文例からコピーを行い、<br/>各施設に導入してるシステムに<br/>直接貼り付けが可能。</div>
                      <img className=" top-[146px] absolute border border-black" src="src/img/list.png" />
                      <div className="w-[51px] h-[54px] left-[430px] top-[334px] absolute bg-zinc-300/0 border-4 border-orange-500"></div>
                      <div data-svg-wrapper className="left-[568px] top-[361px] absolute">
                      </div>
                      <svg width="85" height="23" viewBox="0 0 85 23" fill="none" xmlns="http://www.w3.org/2000/svg" z-index="9999">
                      <path d="M0.939339 10.6571C0.353554 11.2429 0.353554 12.1926 0.939339 12.7784L10.4853 22.3244C11.0711 22.9102 12.0208 22.9102 12.6066 22.3244C13.1924 21.7386 13.1924 20.7888 12.6066 20.2031L4.12132 11.7178L12.6066 3.23249C13.1924 2.64671 13.1924 1.69696 12.6066 1.11117C12.0208 0.525385 11.0711 0.525385 10.4853 1.11117L0.939339 10.6571ZM85 10.2178L2 10.2178V13.2178L85 13.2178V10.2178Z" fill="#F15F2C"/>
                      </svg>
                      <div className="w-[415px] h-[33px] left-[577px] top-[345px] absolute text-justify text-orange-500 text-[32px] font-medium font-['Noto Sans JP'] leading-[30px]">ここをクリックするだけで...</div>
                  </div>
              </div>
          </div>
          <div className="left-[279px] top-0 absolute text-center"><span className="text-zinc-800 text-5xl font-bold font-['Noto Sans'] leading-[67.20px]">CareSmily</span><span className="text-zinc-800 text-[40px] font-bold font-['Noto Sans'] leading-[56px]"> </span><span className="text-zinc-800 text-[32px] font-bold font-['Noto Sans'] leading-[44.80px]">の</span><span className="text-stone-500 text-[28px] font-bold font-['Noto Sans'] leading-[39.20px]"> </span><span className="text-sky-500 text-5xl font-bold font-['Noto Sans'] leading-[67.20px]">特徴・機能</span></div>
      </div>

    </div>
  );

export default Feature;