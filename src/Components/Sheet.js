import { useSelector } from "react-redux";

const Sheet = () => {
  const response = useSelector(store => store.response.content);

  return (
    <>
      <div className="absolute z-20 rounded-3xl inset-0 bg-black bg-opacity-50 flex justify-center w-[50%] ml-[25%] mt-[8%] h-screen">
        <p className="text-white p-10">
          {response}
        </p>
      </div>
    </>
  );
};

export default Sheet;