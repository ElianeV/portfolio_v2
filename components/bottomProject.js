import Link from "next/link";
export default function BottomProject({ style, technologies }) {
  return (
    <div>
      {technologies.map((technology, index) => {
        return (
          <div key={index} className={style}>
            {technology}
          </div>
        );
      })}
    </div>
  );
}
