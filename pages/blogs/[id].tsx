import type { GetStaticProps, GetStaticPaths } from "next";
import { client } from "@/libs/client";
import type { Blog } from "@/libs/types";
import { renderToc } from '@/libs/render-toc';
import { Eyecatch, Category } from '../../libs/types';
import cheerio from 'cheerio';
import hljs from 'highlight.js'
import 'highlight.js/styles/hybrid.css';

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

  const $ = cheerio.load(data.content);
  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass('hljs');
  });

  const body = $('body').html();
  //const blogs : Array<Blog> = data.contents;
  return {
    // Passed to the page component as props
    props: { data, body },
  };
};

export default function Blog({ data, body }: any) {
  //console.log(data);
  const toc = renderToc(data.content);
  //console.log(toc); // 検証用にconsole.logでデバッグ
  //console.log(data.content);
  console.log(body);
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
              return (<li key={index}><a href = {`#${item.id}`}>ー{item.text}</a></li>);
            } else if(item.tag === "h2") {
              return (<li key={index} style={{ textIndent: "1rem"}}>ー<a href = {`#${item.id}`}>{item.text}</a></li>);
            }
            
          }
          )
        }
      </ul>
      <br/>

      <div
        dangerouslySetInnerHTML={{
          __html: `${body}`,
        }}
      />
    </main>
  );
}
