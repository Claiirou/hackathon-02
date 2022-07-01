import Layout from "../../components/Layout";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import IdeaCard from "../../components/IdeaCard";
import CommentCard from "../../components/CommentCard";

export default function Match() {
  const [ideaList, setIdeaList] = useState({});
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  useEffect(() => {
    id && axios.get(`/api/concept/${id}`).then((res) => setIdeaList(res.data));
  }, [id]);

  return (
    <Layout pageTitle="Mes idées en détail">
      <div className="flex gap-10 justify-center my-10">
        <IdeaCard ideaList={ideaList} />
        <CommentCard />
      </div>
    </Layout>
  );
}
