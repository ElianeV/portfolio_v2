import Link from "next/link";

export default function Project({ description, image, reference }) {
  return (
    <div className="p-4 xs:p-8 lg:p-12 lg:py-4 text-slate-500">
      <div>
        <div>
          <img src={image} alt="bg" className="w-10/12 mx-auto" />
        </div>
        <p className="mt-4 font-light sm:text-lg">
          {description}{" "}
          {reference ? (
            <span>
              Made in collaboration with{" "}
              <Link href={reference} target="_blank" className="underline">
                John Gillan
              </Link>
              .
            </span>
          ) : (
            ""
          )}
        </p>
      </div>
    </div>
  );
}
