import Image from "next/image";

interface Props {
  
}
const Footer: React.FC<Props> = ({}) => {
  return (
    <footer>
    <div className="bg-[#4C5866] py-[29px]">
<div className="container">
  <div className="flex  justify-between max-sm:flex-col max-sm:items-center">
    <div>
      <Image className="max-sm:pb-5"
        src="/icons/simple white.svg"
        alt="logo white"
        width={140}
        height={22}
      />
    </div>
    <div className="container sm:hidden max-sm: border-b max-sm: border-[#c2c2c2] ]"></div>
    <div className="flex items-center gap-[30px] max-w-[186px] max-sm:pt-5">
      <a href="#!">
        <Image
          src="/icons/facebook.svg"
          alt="logo white"
          width={24}
          height={24}
        />
      </a>
      <a href="#!">
        <Image
          src="/icons/twitter.svg"
          alt="logo white"
          width={24}
          height={24}
        />
      </a>
      <a href="#!">
        <Image
          src="/icons/instagram.svg"
          alt="logo white"
          width={24}
          height={24}
        />
      </a>
      <a href="#!">
        <Image
          src="/icons/youtube.svg"
          alt="logo white"
          width={24}
          height={24}
        />
      </a>
    </div>
  </div>
</div>
</div>
      <div className="bg-[#dfe1e5] py-[3px]">
        <div className="container">
          <div className="flex justify-center">
            <p className="text-[#4C5866] text-[13px]">SIMPLE ® 2021</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
