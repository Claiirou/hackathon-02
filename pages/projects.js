import Image from "next/image";
import Layout from "../components/Layout";

export default function Projects() {
  return (
    <div>
      <Layout pageTitle="Mes projets">
        <div>
          <Image
            src="/image/enconstruction.png"
            width={300}
            height={300}
            alt="en constrution"
            className="mx-auto"
          />
        </div>
      </Layout>
    </div>
  );
}
