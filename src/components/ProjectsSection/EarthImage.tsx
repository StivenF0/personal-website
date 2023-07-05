import Image from "next/image";

export default function EarthImage() {
  return (
    <Image
      src="/earth.svg"
      alt="Earth"
      className="w-[40%] aspect-square absolute right-[-20%] bottom-[-28%] col-start-2 col-end-2 row-start-1 row-end-4  animate-[spin_20s_linear_infinite] hover:w-[42%]"
      width={200}
      height={200}
      style={{ transition: "all", transitionDuration: "150ms" }}
    />
  );
}
