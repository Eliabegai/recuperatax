import Layout from "./components/Layout/Layout";
import RecuperaTax from "./assets/icon.png"
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <div className="flex w-full h-screen justify-center items-center">
        <Image src={RecuperaTax} alt="login" width={100} height={100} />
      </div>
    </Layout>
  );
}
