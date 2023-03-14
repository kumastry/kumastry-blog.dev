import type { GetStaticProps } from "next";
import type { About } from "@/libs/types";
import { client } from "@/libs/client";
import { Portfolio } from '../../libs/types';

export default function About({ about }: { about: About }) {
  console.log(about);
  return (
    <>
      <h1>{about.name}</h1>

      <p>{about.history}</p>

      <div
        dangerouslySetInnerHTML={{
          __html: `${about.profile}`,
        }}
      />

      {about.portfolios.map(portfolio => {

        return (
          <p>{portfolio?.title}</p>
        );
      })
      }
    </>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps: GetStaticProps = async () => {
  //cmsからデータ取得
  const about: About = await client.get({ endpoint: "about" });

  return {
    props: {
      about,
    },
  };
};
