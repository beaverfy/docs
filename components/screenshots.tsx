import { Image } from "nextra/components";

export function Screenshots({ images }: { images: string[] }) {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 5px))",
          gap: "20px",
          paddingTop: 35,
        }}
      >
        {images.map((src, index) => (
          <Image
            src={src}
            key={index}
            alt={src}
            width={170}
            style={{ borderRadius: 200 }}
          />
        ))}
      </div>
    </>
  );
}
