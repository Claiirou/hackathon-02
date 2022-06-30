import { MdComment } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { useRouter } from "next/router";

export default function MyGreatestIdea({ match }) {
  const router = useRouter();
  return (
    <div className="bg-white rounded-lg p-4 flex flex-col gap-2">
      <div className="flex space-around">
        <h1 className="font-black text-2xl w-full">{match.concept.domain}</h1>
        <div className="rounded-3xl w-10 h-8 bg-[#FFE249]"></div>
      </div>
      <h2>{match.concept.name}</h2>
      <p className=" text-gray-400 italic ">{match.concept.description}</p>
      <div className="flex">
        <label htmlFor="status-concept" className="mr-4">
          Quel est le statut du concept ?
        </label>
        <div className=" bg-slate-300 px-2 text-gray-600 rounded-md ">
          {match.concept.status}
        </div>
      </div>
      <div className="flex gap-4 mt-10">
        <img className="w-10 h-10 rounded-3xl" src={match.user.picture}></img>
        <img className="w-10 h-10 rounded-3xl" src={match.user.picture}></img>
        <img className="w-10 h-10 rounded-3xl" src={match.user.picture}></img>
        <img className="w-10 h-10 rounded-3xl" src={match.user.picture}></img>
      </div>

      <div className="flex gap-4 mt-4">
        <div className="border-[#999999] border-[1px] p-2 text-[#999999] text-2xl cursor-pointer hover:text-deep-orange hover:border-deep-orange duration-500 ease-in-out">
          <MdComment />
        </div>
        <div className="border-[#999999] border-[1px] p-2 text-[#999999] text-2xl cursor-pointer hover:text-deep-blue hover:border-deep-blue duration-500 ease-in-out">
          <BsFillChatDotsFill />{" "}
        </div>
        <div
          className="border-[#999999] border-[1px] p-2 text-[#999999] text-2xl cursor-pointer hover:text-[#464646] hover:border-[#464646] duration-500 ease-in-out"
          onClick={() => {
            router.push({
              pathname: "/match/[idea_id]",
              query: { idea_id: match.conceptId },
            });
          }}
        >
          <BsSearch />{" "}
        </div>
      </div>
    </div>
  );
}
