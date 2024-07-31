import Image from "next/image";
import { FaBuilding, FaTools, FaUsers } from "react-icons/fa";
import { Footer } from "./components/footer";
import { Aside } from "./components/aside";
import { Card } from "./components/card";

export default function Home() {

  const cards = [
    {color: "bg-orange-200", qty:"200", text: "Ambientes", icon:<FaBuilding size={48} />},
    {color: "bg-blue-200", qty:"200", text: "Ambientes", icon:<FaBuilding size={48} />},
    {color: "bg-red-200", qty:"200", text: "Ambientes", icon:<FaBuilding size={48} />},
    {color: "bg-green-200", qty:"200", text: "Ambientes", icon:<FaBuilding size={48} />},
  ]


  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex">
        
        <Aside />

        <main className="flex-1 flex flex-col">

          <h1 className="text-4xl font-bold uppercase w-fullbg-white/40 p-6 text-center">
            Sistema de Gestão de Manutenção
          </h1>

          <div>
            <div className="grid grid-cols-4 gap-4 p-6">
              {cards.map((props, key) => (
                <Card key={key} color={props.color} qty={props.qty} text={props.text} icon={props.icon} />
              ))}
              </div>
            </div>
        </main>
      </div>
      <Footer/>
    </div>
  );
}
