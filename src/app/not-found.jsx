import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <>
      <h1 className="text-center text-4xl ">page is not found</h1>
      <h1 className="text-center">
        <Link href="/">Go back to home</Link>
      </h1>
    </>
  );
};

export default NotFoundPage;
