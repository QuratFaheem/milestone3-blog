import { GetAllBlog } from "@/sanity/sanity.query";
import Link from "next/link";
import Image from "next/image";

// Define a type for the blog data
interface Blog {
  _id: string;
  blogUrl: string;
  name: string;
  description?: string;
  imageUrl: string;
}

export default async function BlogCard() {
  const blogData = await GetAllBlog();
console.log("all data:",blogData)
  return (
    <main className="p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">My Blogs</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        
        {blogData && blogData.length > 0 ? (
          blogData.map((blog: Blog) => (
            <Link href={`/${blog.blogUrl}`} key={blog._id}>

              <div
                className="border border-gray-300 hover:scale-105 cursor-pointer rounded-lg shadow-md p-4 max-w-sm sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg text-center"
              >
                {/* Use Next.js Image component for optimization */}
                <Image
                  src={blog.imageUrl}
                  alt={blog.name || "Blog Image"}
                  width={500} // Set a default width
                  height={300} // Set a default height
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {blog.name}
                </h2>
                <p className="text-sm text-gray-600 line-clamp-1">
                  {blog.description || "No description available"}
                  Read more...
                </p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-600">No blogs available</p>
        )}
      </div>
    </main>
  );
}
