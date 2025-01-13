import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <Image src="/logo.svg" alt="SELECT logo" width={100} height={20} />
    </Link>
  );
}

export default Logo;
