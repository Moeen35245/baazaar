export default function Cart() {
  return (
    <div className="font-roboto p-2 lg:p-7 flex-1 max-w-[400px] mx-auto">
      <h3 className="text-2xl font-bold text-center mb-6">
        <span className="block ">Track all</span>
        <span className="text-primary">your orders</span>
      </h3>
      <div className="w-full overflow-hidden shadow-xl rounded-lg flex flex-col justify-evenly divide-y divide-dashed border">
        <div className="flex justify-between items-center px-2 py-4 ">
          <div className="">
            <h4 className="text-xl font-bold">Parihar Medical</h4>
            <p className="text-lightX text-lg">
              Mahakali Caves Road Andheri{"(E)"}
            </p>
          </div>
        </div>
        <div className=" px-2 py-4">
          <p className="text-lg">
            <span className="text-lightX">2 x </span>
            <span>Crocin pack of 6</span>
          </p>
          <p className="text-lg">
            <span className="text-lightX">2 x </span>
            <span>Max Protien Desi Masala</span>
          </p>
        </div>
        <div className="flex justify-between items-center px-2 py-4">
          <p>
            <span className="mr-4">11/04/2021</span>
            <span>08:00 PM</span>
          </p>
          <p className="text-lg text-primary font-bold">&#x20B9;210</p>
        </div>
        <div className="flex justify-between items-center px-2 py-4 ">
          <button className="bg-secondary text-lg text-white rounded-lg px-7 py-2 font-semibold">
            Accepted
          </button>
          <button className="border-2 border-primary text-lg text-primary rounded-lg px-7 py-2 font-semibold">
            View Order
          </button>
        </div>
      </div>
    </div>
  );
}
