import Image from "next/image";
import React from "react";
const posts = [
  {
    category: "Design",
    title: "10 Tips for Crafting the Perfect UX Portfolio",
    description:
      "Learn how to showcase your design skills and stand out in a crowded job market.",
    author: "Emily Lee",
    date: "3 April 2023",
    avatar:
      "https://www.uifaces.co/wp-content/uploads/2022/01/uifaces-logo.svg",
    poster:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
  },
];

const SingleBlogPage = () => {
  return (
    <>
      {/* grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3 */}
      <div className="lg:px-[50px] ">
        {posts.map((post) => (
          <div
            key={post.title}
            className="flex flex-col gap-10 lg:flex lg:flex-row"
          >
            <Image
              src={post.poster}
              className="aspect-video w-full rounded-md "
              alt=""
              // lg:width={600}
              // lg:height={600}
              width={800}
              height={600}
            />
            <div className="min-h-min p-3">
              <p className="mt-4 w-full text-xs font-semibold leading-tight text-white/700">
                {post.category}
              </p>
              <p className="mt-4 flex-1 text-base font-semibold text-white/900">
                {post.title}
              </p>
              <p className="mt-4 w-full text-sm leading-normal text-white/600">
                {post.description}
              </p>
              <div className="mt-4 flex space-x-3 ">
                <img
                  className="h-full w-10 rounded-lg"
                  src={post.avatar}
                  alt={post.author}
                />
                <div>
                  <p className="text-sm font-semibold leading-tight text-white/900">
                    {post.author}
                  </p>
                  <p className="text-sm leading-tight text-gray-600">
                    {post.date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SingleBlogPage;
