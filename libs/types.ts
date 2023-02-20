export type Category = {
    id : string,
    name:string,
    createdAt:string,
    publishedAt:string,
    revisedAt:string,
    updatedAt:string,
}


export type Eyecatch = {
    height: number,
    width: number,
    url: string
}

export type Blog = {
    category: Category | null,
    content: string | null,
    createdAt:string,
    id: string | null,
    publishedAt: string,
    revisedAt : string,
    title : string | null,
    updatedAt : string | null,
    eyecatch:Eyecatch | null
}



