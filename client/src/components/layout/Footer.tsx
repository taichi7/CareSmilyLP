import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
      <div className="px-20 pt-14 pb-7 w-full bg-blue-100 bg-opacity-70 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-5 justify-between text-2xl font-bold leading-snug text-center whitespace-nowrap text-stone-500 max-md:mt-10">
              <div className="flex flex-col items-start my-auto">
                <div className="self-stretch text-4xl text-zinc-800">
                  製品情報
                </div>
                <a href="#" className="mt-6">機能一覧</a>
                <a href="#" className="mt-7">料金プラン</a>
                <a href="#" className="mt-7">会社概要</a>
                <a href="#" className="mt-5">導入事例</a>
              </div>
              <div className="shrink-0 w-px border border-black border-solid h-[273px]" />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-wrap gap-10 self-stretch my-auto text-2xl font-bold leading-snug text-center text-stone-500 max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col self-start whitespace-nowrap">
                <div className="self-start text-4xl text-zinc-800">
                  サポート
                </div>
                <a href="#" className="self-start mt-7">マニュアル</a>
                <a href="#" className="mt-7">よくある質問</a>
                <a href="#" className="mt-8">お問い合わせ</a>
              </div>
              <div className="flex flex-col items-start">
                <div className="text-4xl text-zinc-800">お問い合わせ</div>
                <div className="mt-7">平日 10:00～18:00</div>
                <div className="mt-8">電話:050-5799-0339</div>
                <div className="self-stretch mt-7">
                  メール:support@caresmily.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-5 justify-between mt-14 ml-8 w-full font-bold leading-snug text-center max-w-[1292px] max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col items-start text-zinc-800 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c825c244e52912b8d84c416aeaee322e6e5b6f15fe1be85cccc77e97f0e35794?placeholderIfAbsent=true&apiKey=bd568ac7d33e4586ab20a6a038c2e0cd"
            className="object-contain max-w-full aspect-[3.5] w-[294px]"
            alt="CareSmily logo"
          />
          <div className="self-stretch text-xl max-md:max-w-full">
            "膨大な文例×選択"　あなただけのケアプランが瞬時に形になる
          </div>
          <div className="mt-6 ml-3.5 text-sm max-md:ml-2.5">
            株式会社Nico 　〒759-5331山口県下関市豊北町神田3489−2
          </div>
        </div>
        <div className="flex gap-10 self-end mt-28 text-xl text-black whitespace-nowrap max-md:mt-10">
          <a href="#">プライバシーポリシー</a>
          <a href="#">利用規約</a>
        </div>
      </div>
      <div className="mt-16 w-full border border-solid border-stone-500 min-h-[3px] max-md:mt-10 max-md:max-w-full" />
      <div className="self-center mt-9 text-xl font-bold leading-snug text-center text-black">
        © 2025 CareSmily. All Rights Reserved.
      </div>
    </>
  );
};

export default Footer;