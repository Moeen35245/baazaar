export default function Offer() {
  return (
    <div className="bg-lightbg p-3 mt-8">
      <h3 className="text-primary text-3xl font-bold font-signika mt-6 text-center">
        Thank you
      </h3>
      <h2 className="text-2xl font-bold font-roboto mt-4 text-center ">
        To show our appreciation we are offering the residents of lodha
      </h2>
      <div className="font-roboto text-xl">
        <ol className="mt-4 space-y-3">
          <li className="flex">
            <span>1.</span>
            <span>Flat 10% discount on all online orders</span>
          </li>
          <li className="flex">
            <span>2.</span>
            <span>Free delivery on all orders</span>
          </li>

          <li className="flex">
            <span>3.</span>
            <span>
              Quick 20minute delivery on all ready to ready to pick orders.
            </span>
          </li>
          <li className="flex">
            <span>4.</span>
            <span>
              No extra charges. We do not charge any comission to our vendors so
              be rest assured that the prices will not be inflated especially
              compared to other online delivery apps.
            </span>
          </li>
          <li className="flex">
            <span>5.</span>
            <span>
              Shop directly from any Baazaar enabled store and avail these
              benefits.
            </span>
          </li>
        </ol>
        <p className="mt-6">
          For the convenience of residential families, we will ensure the
          availability of all those stores {"&"} products that fulfill daily
          requirements.
        </p>
        <p className="mt-6">
          During the pilot test we assure the residents access to customer
          support
          {"(if the need arises)"} at all times.
        </p>
        <p className="mt-6">Please note:</p>
        <ol className="space-y-3">
          <li className="flex">
            <span>1.</span>
            <span>
              {" "}
              Discount valid for 3-4 months until end of beta testing.
            </span>
          </li>
          <li className="flex">
            <span>2.</span>
            <span> Maximum discount allowed ₹200.</span>
          </li>

          <li className="flex">
            <span>3.</span>
            <span> Minimum order amount ₹100 to avail discount</span>
          </li>
        </ol>
      </div>
    </div>
  );
}
