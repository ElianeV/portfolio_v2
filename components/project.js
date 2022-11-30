import Link from "next/link";

export default function Project({
  title,
  type,
  description,
  technologies,
  image,
  url,
  reference,
}) {
  console.log(title);
  return (
    <div className="relative p-4 xs:p-8 lg:p-12">
      <Link href={url} target="_blank">
        <button className="absolute top-4 right-4 xs:top-8 xs:right-8 lg:top-12 lg:right-12 w-8 h-8 xs:w-12 xs:h-12 rounded-full bg-white text-black text-center text-base xs:text-2xl">
          ↗
        </button>
      </Link>
      <h2 className="tracking-[0.1rem] xs:tracking-[0.2rem] sm:tracking-[0.3rem] text-lg sm:text-2xl w-9/12">
        {title}
      </h2>
      <h3 className="mb-8">{type}</h3>
      <p className="text-justify font-light">{description}</p>
      <ul className="ml-4 list-disc mb-8">
        {technologies.map((technology, index) => {
          return (
            <li key={index} className="font-light">
              {technology}
            </li>
          );
        })}
        {reference ? (
          <li className="font-light">
            In collaboartion with{" "}
            <Link href={reference} target="_blank">
              <span className="underline">John Gillan</span>
            </Link>
          </li>
        ) : (
          ""
        )}
      </ul>
      <img src={image} alt="bg" className="w-10/12 mx-auto" />
    </div>
  );
}
