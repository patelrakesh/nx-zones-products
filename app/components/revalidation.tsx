"use client";
const Revalidation = () => {
    const dateTime = new Date();
  return (
    <>
      <div className="flex justify-end">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-16">
          REVALIDATE BY TAG
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          REVALIDATE BY PATH
        </button>
      </div>
      <h4 className="text-center">{dateTime.toLocaleString()}</h4>
    </>
  );
};

export default Revalidation;
