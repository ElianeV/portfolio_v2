import Link from "next/link";

export default function Project({
  description,
  technologies,
  image,
  url,
  reference,
}) {
  return (
    <div className="p-4 xs:p-8 lg:p-12 lg:py-4 flex flex-col justify-between text-slate-500">
      <div>
        <div>
          <img src={image} alt="bg" className="w-10/12 mx-auto" />
        </div>
        <p className="mt-8 font-light text-lg">{description}</p>
      </div>
    </div>
  );
}
