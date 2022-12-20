export default function BottomProject({ style, technologies, reference }) {
  return (
    <div>
      {technologies.map((technology, index) => {
        return (
          <div key={index} className={style}>
            {technology}
          </div>
        );
      })}
      {reference ? (
        <div className="font-light">
          In collaboartion with{" "}
          <Link href={reference} target="_blank">
            <span className="underline">John Gillan</span>
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
