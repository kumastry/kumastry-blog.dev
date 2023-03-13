import type { GetStaticProps, GetStaticPaths } from "next";
import { client } from "@/libs/client";
import type { Blog } from "@/libs/types";
import { renderToc } from '@/libs/render-toc';
import { Eyecatch, Category } from '../../libs/types';

import styles from "./blogs.module.css";
import Image from "next/image";


// Generates `/posts/1` and `/posts/2`
export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });
  const blogs: Array<Blog> = data.contents;

  const paths = blogs.map((blog: Blog) => {
    return { params: { id: blog.id } };
  });

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
};

// `getStaticPaths` requires using `getStaticProps`
export const getStaticProps: GetStaticProps = async (context) => {
  const contentId: any = context.params?.id;
  const data = await client.get({ endpoint: "blogs", contentId });
  //const blogs : Array<Blog> = data.contents;
  return {
    // Passed to the page component as props
    props: { data },
  };
};

export default function Blog({ data }: any) {
  //console.log(data);
  const toc = renderToc(data.content);
  console.log(toc); // 検証用にconsole.logでデバッグ
  console.log(data.content);
  return (
    <main>
      <Image className = {styles.image} src={data.eyecatch.url} alt={data.title}  fill />
      <br/><br/><br/>
      <h1 className="title">{data.title}</h1>
      <p>{data.publishedAt}</p>
      <p>{data.category.name}</p>

      <br/><br/>

      <ul style={{listStyle: "none"}}>
        {
          toc.map((item, index) => {
            if(item.tag === "h1") {
              return (<li key={index}><a href = {`#${item.id}`}>{item.text}</a></li>);
            } else if(item.tag === "h2") {
              return (<li key={index} style={{ textIndent: "1rem"}}><a href = {`#${item.id}`}>{item.text}</a></li>);
            }
            
          }
          )
        }
      </ul>
      <br/>

      <div
        dangerouslySetInnerHTML={{
          __html: `${data.content}`,
        }}
      />
    </main>
  );
}
