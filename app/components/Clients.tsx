import { clients } from "../constants";
import Image from "next/image";

const Clients = () => {
  return (
    <section className="flex justify-center items-center my-4">
      <div className="flex justify-center items-center flex-wrap w-full">
        {clients.map((client) => (
          <div
            key={client.id}
            className="flex-1 flex justify-center items-center sm:min-w-[192px] min-w-[120px]"
          >
            <Image
              src={client.logo}
              alt="client"
              width={0}
              height={0}
              className="sm:w-[192px] w-[100px] object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
