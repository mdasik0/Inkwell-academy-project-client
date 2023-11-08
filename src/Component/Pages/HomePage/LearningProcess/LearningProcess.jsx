const LearningProcess = () => {
  return (
    <div className="my-10 mx-6">
      <h1 className="text-4xl font-bold text-center">
        How to properly <br /> Learn From Our Course
      </h1>
      <p className="text-center text-gray-500 my-6">
        Learning should be consistent, enjoyable, and fun. By following our
        course&apos;s step-by-step instructions and guidance, <br /> you can
        make steady progress efficiently
      </p>
      <div className="flex md:justify-around justify-center md:flex-row flex-col items-center md:items-start gap-3">
        {/* step 1 */}
        <div className="flex flex-col md:items-start items-center">
          <img
            src="https://static.proko.com/assets/images/home/cat-practice.light.webp"
            alt="instruction image"
          />
          <>
            <h4 className="font-semibold text-lg mb-2">Practice</h4>
            <p className="text-gray-500 ">
              Most lessons have suggested assignments and examples to help you
              practice.
            </p>
          </>
        </div>
        {/* step 2 */}
        <div className="flex flex-col md:items-start items-center">
          <img
            src="https://static.proko.com/assets/images/home/get-feedback.light.webp"
            alt="instruction image"
          />
          <>
            <h4 className="font-semibold text-lg mb-2">Get Feedback</h4>
            <p className="text-gray-500 ">
              Get your drawings evaluated by peers and pros. Feedback helps you
              improve quickly.
            </p>
          </>
        </div>
        {/* step 2 */}
        <div className="flex flex-col md:items-start items-center">
          <img
            src="https://static.proko.com/assets/images/home/talk-with-classmates.light.webp"
            alt="instruction image"
          />
          <>
            <h4 className="font-semibold text-lg mb-2">Talk with Classmates</h4>
            <p className="text-gray-500 ">
              Help each other grow by asking questions, critiquing, and
              discussing everything about the lessons.
            </p>
          </>
        </div>
      </div>
    </div>
  );
};

export default LearningProcess;
