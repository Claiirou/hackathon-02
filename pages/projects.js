import Layout from "../components/Layout";

export default function Projects() {
  return (
    <div>
      <Layout pageTitle="Mes projets">
        <div>
          <img
            src="/image/enconstruction.png"
            width={300}
            height={300}
            alt="en constrution"
            className="mx-auto bg-slate-200 rounded-2xl  border-[1px] mt-20 p-4"
          />
        </div>
      </Layout>
    </div>
  );
}
