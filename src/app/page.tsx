import Image from "next/image";
import Form from "./form";
import Table from "./table";

export default function Home() {
  return (
    <main>
      <h2 style={{textAlign:"center"}}>Person  List APP</h2>
      <Form />
      <Table />
    </main>
  );
}
