import BookPlaceHolder from "../assets/book_placeholder.png";
export default function BookShowcaseCard() {
  return (
    <>
      <div className="w-[90%] rounded-xl bg-[#EDEFFF] flex flex-col items-center justify-start relative ">
        <img src={BookPlaceHolder} className="w-[90%] h-[90%] mt-4" alt="" />
        <div className="absolute w-[90%] rounded-t-[12px] h-[40%] top-4  bg-black">
          <div className="">
            <span className="absolute text-white top-5 left-5 font-['DM Serif Display'] text-2xl">
              Deep Work
            </span>
            <span className="absolute bottom-5 right-5 text-white font-['Della Respira'] ">
              ~ Charles Watson
            </span>
          </div>
        </div>
        <div className="flex flex-col w-full ">
          <div className=" text-black font-semibold  font-['DM Serif Display'] text-3xl mx-5 mt-2">
            Deep Work
          </div>
          <div className=" text-slate-500  font-['DM Serif Display'] text-lg mx-5">
            Charles Watson
          </div>
        </div>
      </div>
    </>
  );
}