import Image from "next/image";
import Layout from "../components/Layout";

export default function Projects() {
  return (
    <div>
      <Layout pageTitle="Mes projets">
        <div>
          <img
            className="mx-auto w-80 h-80 mt-10"
            src="/image/enconstruction.png"
            alt="en constrution"
          />
          <p className="text-center mt-6">Page en construction</p>
        </div>
      </Layout>
    </div>
  );
}
