import Link from "next/link";
import { client } from "../libs/client";
import { NextPage } from "next";
import type { GetStaticProps } from "next";
import { ScriptProps } from "next/script";
import type { Blog } from "@/libs/types";
import Image from "next/image";

//import mui
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

type Props = {
  blog: Array<Blog>;
};

export default function Home({ blog }: Props) {
  //console.log(blog);
  return (
    <> 
        {blog.map((blog: any) => (    
           <Link href={`/blogs/${blog.id}`}>
            <Card sx={{ maxWidth: 345 }}>
             
              <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={blog.eyecatch.url}
                    alt="blog eyecatch"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {blog.title}
                    </Typography>
                  </CardContent>
            
              </CardActionArea>
             
            </Card>
            </Link>
        ))}
    </>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({ endpoint: "blogs" });
  const blog: Array<Blog> = data.contents;

  return {
    props: {
      blog,
    },
  };
};
