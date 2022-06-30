import Layout from "../components/Layout";
import Card from "../components/TinderCard";

export default function Match() {
  const db = [
    {
      name: "Poule McCartney",
      url: "/images/chicken-1.jpg",
    },
    {
      name: "Poule Mirabel",
      url: "/images/chicken-2.jpg",
    },
    {
      name: "Poule Bocuse",
      url: "/images/chicken-3.jpg",
    },
    {
      name: "Poule Pogba",
      url: "/images/turkey.png",
    },
  ];
  return (
    <div>
      <Layout pageTitle="Mes matches">
        {db.map((p, i) => (
          <Card key={i} name={p.name} image={p.url} />
        ))}
      </Layout>
    </div>
  );
}
