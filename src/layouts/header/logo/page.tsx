import Image from "next/image";
import Link from "next/link";
import { RootState } from "@/redux-toolkit/store";
import { useSelector } from "react-redux";

const Logo: React.FC<ILogoProps> = ({ logo }) => {
  const { i18LangStatus } = useSelector((state: RootState) => state.language);

  return (
    <>
      {logo === "dark" ? (
        <div className="brand-logo">
          <Link href={`/${i18LangStatus}`}>
            <Image src="/assets/images/icon/footer-logo.png" alt="logo-clasic" className="img-fluid" width={140} height={140} />
          </Link>
        </div>
      ) : (
        <div className="brand-logo">
          <Link href={`/${i18LangStatus}`}>
            <Image src={"/assets/images/icon/footer-logo.png"} alt="logo-clasic" className="img-fluid ed" width={140} height={140} />
          </Link>
        </div>
      )}
    </>
  );
};

export default Logo;