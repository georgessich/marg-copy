import { Items } from "./items";
export default async function NamePage() {
    const res = await fetch('http://localhost:3000/api/main')
    const fetchedResp = await res.json()
    const data = fetchedResp.sort((a, b) => b.year - a.year)
  return (
    <div className="container mx-auto flex flex-col justify-center w-full">
      <h1>Hello Page Name</h1>
        <Items data={data}/>
    </div>
  );
}