import Layout from "../components/Layout";
import Card from "../components/TinderCard";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Match() {
  const [userList, setUserList] = useState([]);


  useEffect(() => {
    axios.get("/api/user").then((res) => setUserList(res.data));
  }, []);
  return (
    <div>
      <Layout pageTitle="Mes matches">
        <Card userList={userList} index={userList.length} />
      </Layout>
    </div>
  );
}
