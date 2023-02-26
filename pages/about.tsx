import type { GetStaticProps } from "next";

export default function About() {
 
  return (
    <>  
        about page
    </>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps: GetStaticProps = async () => {
  //cmsからデータ取得
  //const data = await client.get({ endpoint: "blogs" });
  //const blog: Array<Blog> = data.contents;

  return {
    props: {
     
    },
  };
};
