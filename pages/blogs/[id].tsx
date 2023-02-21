import type { GetStaticProps, GetStaticPaths } from 'next'
import { client } from "@/libs/client";
import type {Blog} from "@/libs/types";

// Generates `/posts/1` and `/posts/2`
export const getStaticPaths:GetStaticPaths = async () => {
    const data = await client.get({ endpoint: "blogs" });
    const blogs : Array<Blog> = data.contents;

    const paths = blogs.map((blog:Blog)=> {
        return(
            {params:{id:blog.id}}
        );
    });
    
    return {
      paths,
      fallback: false, // can also be true or 'blocking'
    }
  }
  
  // `getStaticPaths` requires using `getStaticProps`
  export const getStaticProps : GetStaticProps =  async (context) => {
    const contentId:any = context.params?.id;
    const data = await client.get({ endpoint: "blogs", contentId});
    //const blogs : Array<Blog> = data.contents;
    return {
      // Passed to the page component as props
      props: { data },
    }
  }
  
  export default function Blog({ data } : any) {
    console.log(data);
   
    return (
    <main>
      <h1>{data.title}</h1>
      <p>{data.publishedAt}</p>
          <div
        dangerouslySetInnerHTML={{
          __html: `${data.content}`,
        }}
      />
    </main>);
  }