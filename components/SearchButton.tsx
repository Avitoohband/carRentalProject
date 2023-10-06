"use client";

import Image from "next/image";

const SearchButton = ({
  otherClasses,
  pending,
}: {
  otherClasses: string;
  pending: boolean;
}) => {
  return (
    <button
      type="submit"
      className={`-ml-3 z-10 ${otherClasses} disabled:opacity-40`}
      disabled={pending}
    >
      {pending ? (
        <div className="animate-spin h-10 w-10 bg-gray-300 rounded-full border-b-2 border-black/40" />
      ) : (
        <Image
          src="/magnifying-glass.svg"
          alt="magnifying glass"
          width={40}
          height={40}
          className="object-contain"
        />
      )}
    </button>
  );
};

export default SearchButton;
