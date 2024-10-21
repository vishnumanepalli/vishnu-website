//utils/NotFoundPage.js
import Image from "next/image";

export default function NotFoundPage() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center p-4 bg-gray-100">
      <h1 className="text-6xl text-red-500 mb-4">404 - PAGE NOT FOUND</h1>
      <Image
        src="/images/page_not_found.webp"
        alt="Working on it"
        width={400}
        height={400}
        className="max-w-xs mb-8"
      />
      <a
        href="/"
        className="px-6 py-3 text-lg bg-red-500 text-white rounded hover:bg-red-400 transition-colors duration-300"
      >
        Go Back Home
      </a>
    </div>
  );
}
