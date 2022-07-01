import Layout from "../components/Layout";

export default function Projects() {
  return (
    <div>
      <Layout pageTitle="Mes projets">
        <div>
          <img
            src="/image/enconstruction.png"
            alt="en constrution"
            className="mx-auto bg-slate-200 rounded-2xl  border-[1px] mt-20 p-4"
          />
          <p className="text-center mt-6">Page en construction</p>
        </div>
      </Layout>
    </div>
  );
}
