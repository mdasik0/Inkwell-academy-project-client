const NewsLetter = () => {
  return (
    <div
      style={{
        backgroundImage: ` url(https://i.ibb.co/NCJfb7j/newsletter-banner.jpg)`,
        backgroundPosition: "right",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
      className="mt-20 h-[300px]"
    >
      <form className="flex justify-center items-center h-full flex-col">
        <h1 className="text-center text-4xl font-bold">
          Subscribe to our Newsletter
        </h1>
        <p className="text-center text-gray-500 text-sm my-6">
          Subscribe to our newsletter for updates on our latest courses, free
          tutorials, expert advice, art tips, tricks, and much more!
        </p>
        <div className="flex items-center gap-3">
          <input
            className="my-3 border px-3 py-2 w-[300px] rounded outline-none"
            type="email"
            name="email"
            placeholder="Enter your email here"
            id=""
          />
          <button className="font-bold text-sm px-5 text-white hover:bg-[#46c7ba] duration-300 py-[11px] rounded bg-[#1eb2a6]" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default NewsLetter;
