import { uuid } from "uuidv4";
import { data } from "../lib/data";
import Item from "../components/Item";
export default function Main() {
  return (
    <div>
      {data.map((ele) => (
        <div key={uuid()} className="">
          <h3 className="ml-4 text-3xl mt-6 font-bold font-roboto">
            {ele.title}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
            {ele.shops.map((item) => (
              <Item key={uuid()} name={item.name} img={item.img} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
