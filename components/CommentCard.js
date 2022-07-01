import { LeafPoll } from "react-leaf-polls";
import "react-leaf-polls/dist/index.css";

export default function CommentCard() {
  const resData = [
    { id: 0, text: "React", votes: 10 },
    { id: 1, text: "Vue", votes: 4 },
    { id: 2, text: "Php", votes: 0 },
  ];

  const customTheme = {
    textColor: "black",
    mainColor: "#00B87B",
    backgroundColor: "rgb(255,255,255)",
    alignment: "center",
  };

  function vote() {
    // Here you probably want to manage
    // and return the modified data to the server.
  }
  return (
    <section className="w-[50%]">
      <div className="bg-white rounded-xl p-4 mb-4">
        <div className="text-3xl font-black mb-2">Discussion</div>
        <section className="flex gap-2">
          <img className="w-10 h-10 rounded-3xl" src="/image/kiki.jpeg"></img>
          <LeafPoll
            type="multiple"
            question="Quelle(s) techno(s) pour ce projet ?"
            results={resData}
            theme={customTheme}
            onVote={vote}
            isVoted={false}
          />
        </section>
      </div>
      <div className="bg-white rounded-xl p-4">
        <section className="flex gap-2">
          <img
            className="w-10 h-10 rounded-3xl"
            src="/image/raymond.jpeg"
          ></img>
          <p>
            <b>Denis</b>
            <br />
            Est-ce vraiment utile de déployer une application mobile ?
          </p>
        </section>
      </div>
    </section>
  );
}
