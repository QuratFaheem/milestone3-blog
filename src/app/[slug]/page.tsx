import { GetSingleBlog } from "@/sanity/sanity.query";
import Image from "next/image"; // Import Image component from Next.js

export default async function BlogPage({ params }: { params: { slug: string } }) {
  console.log("Slug provided:", params.slug);
  const wblog = await GetSingleBlog(params.slug);
  console.log("Fetched blog data:", wblog);
  const blog = wblog?.[0];

  if (!blog) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl font-semibold text-gray-600">Blog not found.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Replace <img> with <Image /> from Next.js */}
        <Image
          src={blog.imageUrl}
          alt={blog.name}
          width={1200} // Define a width for the image
          height={1200} // Define a height for the image
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{blog.name}</h1>
          <p className="text-lg text-gray-700 leading-relaxed">{blog.description}</p>
        </div>
      </div>
    </main>
  );
}
