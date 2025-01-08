import { groq } from "next-sanity";
import sanityClient from "./sanity.client";

export async function GetAllBlog()
{
    return sanityClient.fetch(groq`*[_type == "Blog"]{
      _id,
  name,
  description,
    "blogUrl":slug.current,
    "imageUrl": image.asset->url
}`)
}

export async function GetSingleBlog(slug: string) {
  const query = groq`*[_type == "Blog" && slug.current == $slug]{
      _id,
  name,
  description,
    "blogUrl":slug.current,
    "imageUrl": image.asset->url
}`;

  if (!slug) {
    throw new Error("Slug is required to fetch blog data.");
  }

  return await sanityClient.fetch(query, { slug });
}


