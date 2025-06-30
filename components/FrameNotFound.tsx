import Image from "next/image";

const FrameNotFound = () => {
  return (
    <div className="sm:block hidden">
      <Image
        src={"/Ellipse1-min.svg"}
        alt="eclipse1"
        width={196}
        height={186}
        className="absolute top-0 left-0 text-black"
      />
      <Image
        src={"/Ellipse2-min.svg"}
        alt="eclipse2"
        width={140}
        height={240}
        className="absolute top-0 right-0"
      />
      <Image
        src={"/Frame1-min.svg"}
        alt="bframe1"
        width={148}
        height={148}
        className="absolute bottom-12 right-12"
      />
      <Image
        src={"/Frame1-min.svg"}
        alt="bframe2"
        width={148}
        height={148}
        className="absolute bottom-56 left-14"
      />
    </div>
  );
};
export default FrameNotFound;
