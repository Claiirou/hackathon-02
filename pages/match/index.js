import Layout from "../../components/Layout";
import Card from "../../components/TinderCard";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Match() {
  const [conceptList, setConceptList] = useState([]);

  useEffect(() => {
    axios.get("/api/concept").then((res) => setConceptList(res.data));
  }, []);
  return (
    <div>
      <Layout pageTitle="Mes matches">
        <Card
          userList={conceptList}
          index={conceptList.length}
          type="concept"
        />
      </Layout>
    </div>
  );
}
