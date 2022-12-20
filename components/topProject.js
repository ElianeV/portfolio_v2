import Link from "next/link";

export default function TopProject({ title, type, url, style }) {
  return (
    <div className={style}>
      <Link href={url} target="_blank">
        <button className="absolute top-16 right-2 xs:right-6 lg:right-8 w-8 h-8 xs:w-12 xs:h-12 rounded-full bg-white text-neutral-800 text-center text-base xs:text-2xl drop-shadow-[0_5px_5px_rgba(0,0,0,0.70)]">
          ↗
        </button>
      </Link>
      <h2 className="tracking-[0.1rem] xs:tracking-[0.2rem] sm:tracking-[0.3rem] text-lg sm:text-2xl w-9/12">
        {title}
      </h2>
      <button className="mb-4 px-2 border-solid rounded-full border-white border-[1px] cursor-default text-xs">
        {type}
      </button>
    </div>
  );
}
