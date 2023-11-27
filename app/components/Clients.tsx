import { clients } from "../constants";
import Image from "next/image";

const Clients = () => {
  return (
    <section className="flexCenter my-4">
      <div className="flexCenter flex-wrap w-full">
        {clients.map((client) => (
          <div
            key={client.id}
            className="flex-1 flexCenter sm:min-w-[192px] min-w-[120px]"
          >
            <Image
              src={client.logo}
              alt="client"
              width={0}
              height={0}
              className="sm:w-[192px] w-[100px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
