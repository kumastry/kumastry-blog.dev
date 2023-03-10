import Link from "next/link";
import { client } from "../libs/client";
import { NextPage } from "next";
import type { GetStaticProps } from "next";
import { ScriptProps } from "next/script";
import type { Blog } from "@/libs/types";
import Image from "next/image";
import Head from "next/head";
import { useState } from "react";

//import mui
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useMediaQuery } from "@mui/material";
import { Category } from '../libs/types';
import Box from "@mui/material/Box";

import LocalOfferIcon from '@mui/icons-material/LocalOffer';

type Props = {
  blogs: Array<Blog>;
};

export default function Home({ blogs }: Props) {
  //console.log(blog);
  //const isPhone : boolean = useMediaQuery("(max-width:600px)");

  //const [blogs, setBlogs] = useState<Array<Blog>>(blog);

  return (
    <>
      <Head>
        <title>kumastry.dev</title>
        <meta name="description" content="kumastryのブログ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta property="og:title" content="kumastry.dev" />
        <meta property="og:site_name" content="kumastry.dev" />
        <meta property="og:description" content="kumastryのブログ" />
        <meta property="og:url" content="%PUBLIC_URL%" />
        <meta property="og:type" content="website" />
        {/*<meta property="og:image" content="%PUBLIC_URL%/images/ogp.png" /> */}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Grid container rowSpacing={2} columnSpacing={1}>
        {blogs.map((blog: Blog) => {
          console.log(blog);
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
              xl={3}
              sx={{ margin: "auto" }}
            >
              <Link href={`/blogs/${blog.id}`}>
                <Card sx={{ height: "20rem" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image={blog.eyecatch.url}
                      alt="blog eyecatch"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {blog.title}
                      </Typography>

                      <Box sx = {{display:"flex"}}>
                      <LocalOfferIcon/>
                      
                      <p>{blog.category?.name}</p>
                      </Box>

                      <p>{blog.publishedAt}</p>
                      
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({ endpoint: "blogs" });
  const blogs: Array<Blog> = data.contents;
  //const categories: Array<Category> = data.categories;
  return {
    props: {
      blogs,
    },
  };
};
