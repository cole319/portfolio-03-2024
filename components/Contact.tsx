import Image from "next/image";
import Underline from "./Underline";

const Contact = () => {
  return (
    <section id="contact">
      <div className="my-12 pb-12 md:pt-16 md:pb-20 ">
        <h1 className="text-center font-bold text-4xl text-slate-900">
          Let's Connect
          <Underline />
        </h1>
        <br />
        <div className="flex flex-col md:flex-row md:space-y-0 border-[2px] border-slate-200 rounded-md">
          <div className="hidden md:flex md:w-1/2 md:flex-col justify-center p-8">
            <Image
              src="/programmer.png"
              alt=""
              width={600}
              height={600}
              className=" shadow-xl p-2 rounded-md"
            />
          </div>
          <form className="flex flex-col  w-full md:w-1/2 space-y-2 bg-slate-200 p-8">
            <input
              type="text"
              placeholder="Name"
              className=" border-[1px] border-slate-900 rounded-md px-3 py-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="border-[1px] border-slate-900 rounded-md px-3 py-2"
            />
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="Write Message"
              className="border-[1px] border-slate-900 rounded-md  px-3 py-2"
            ></textarea>
            <button className="text-slate-50 font-semibold px-6 py-2 bg-slate-900 rounded shadow hover:bg-slate-800 border-2 border-slate-900 cursor-pointer">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
