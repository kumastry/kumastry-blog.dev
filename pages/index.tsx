import Link from "next/link";
import { client } from "../libs/client";
import { NextPage } from "next";
import type { GetStaticProps } from 'next'
import { ScriptProps  } from "next/script";
import type { Blog } from "@/libs/types";
import Image from "next/image";

type Props = {
  blog: Array<Blog>
}

export default function Home({blog} : Props ) {
  //console.log(blog);
  return (
    <div>
      <ul>
        {blog.map((blog :any) => (
          <li key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
            <Image 
            src = {blog.eyecatch.url}
            height = {200}
            width = {200}
            alt = {blog.title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps:GetStaticProps = async () => {
  const data = await client.get({ endpoint: "blogs" });
  const blog : Array<Blog> = data.contents; 
 
  return {
    props: {
      blog,
    },
  };
};