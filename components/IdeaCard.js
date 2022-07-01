export default function IdeaCard({ ideaList }) {
  console.log(ideaList, "card");
  return (
    <div className="w-[30%] bg-white rounded-xl p-4">
      <p className=" bg-slate-300 px-2 text-gray-600 rounded-md inline-block mb-2">
        {ideaList.domain}
      </p>
      <h1 className="text-3xl font-black">{ideaList.name}</h1>

      <p className="text-gray-400 italic mb-4">{ideaList.description}</p>

      <img
        src={ideaList.picture}
        width={300}
        height={400}
        className="m-auto p-12"
      />

      <div className="flex">
        <label htmlFor="status-concept" className="mr-4">
          Quel est le statut du concept ?
        </label>
        <div className=" bg-slate-300 px-2 text-gray-600 rounded-md ">
          {ideaList.status}
        </div>
      </div>
      <h2 className="my-4 font-black text-center">Participants</h2>
      <div className="flex justify-center gap-2 mb-6">
        <img className="w-10 h-10 rounded-3xl" src="/image/kiki.jpeg" />
        <img className="w-10 h-10 rounded-3xl" src="/image/raymond.jpeg" />
        <img className="w-10 h-10 rounded-3xl" src="/image/martine.jpeg" />
        <img className="w-10 h-10 rounded-3xl" src="/image/claire.jpeg" />
        <img className="w-10 h-10 rounded-3xl" src="/image/poule02.jpg" />
      </div>
    </div>
  );
}
