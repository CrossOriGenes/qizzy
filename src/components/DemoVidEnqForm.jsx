import React, { useRef, useState } from "react";

const DemoVidEnqForm = ({ onSubmit }) => {
  const topicRef = useRef(null);
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const descrRef = useRef(null);
  const formRef = useRef(null);
  const [errMsg, setErrMsg] = useState(null);

  function submitFormHandler(e) {
    e.preventDefault();
    if (topicRef.current.value === "Choose a category...") {
      setErrMsg("Please Select a category!");
      return;
    }

    const userData = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      topic: topicRef.current.value,
      description: descrRef.current.value,
    };
    setErrMsg(null);
    formRef.current.reset();
    onSubmit(userData);
  }
  return (
    <>
      {errMsg && (
        <div className="absolute -top-20 right-26 mt-4 mb-[-5rem] place-items-center">
          <div className="bg-red-900 outline-2 outline-red-400 w-[250px] px-4 py-2 rounded-md flex justify-center items-center text-wrap text-sm font-semibold text-red-400">
            {errMsg}
          </div>
        </div>
      )}
      <form
        ref={formRef}
        className="relative -me-3 mt-2 ml-6 pl-4 flex flex-col"
        autoComplete="off"
        onSubmit={submitFormHandler}
      >
        <div className="grid grid-cols-2 gap-2">
          <input
            ref={usernameRef}
            type="text"
            name="username"
            required
            minLength={3}
            maxLength={30}
            placeholder="Your name"
            className="w-full my-3 bg-gray-200 text-gray-500 px-6 py-3 rounded-4xl text-md font-semibold outline-0 border-2 border-gray-200 focus:border-teal-700 transition duration-300"
          />
          <input
            ref={emailRef}
            type="email"
            name="email"
            required
            minLength={9}
            maxLength={30}
            placeholder="Email address"
            className="w-full my-3 bg-gray-200 text-gray-500 px-6 py-3 rounded-4xl text-md font-semibold outline-0 border-2 border-gray-200 focus:border-teal-700 transition duration-300"
          />
        </div>
        <div className="grid grid-cols-1">
          <select
            ref={topicRef}
            name="category"
            required
            className="w-full my-3 bg-gray-200 text-gray-400 px-4 py-3.5 rounded-4xl text-md font-semibold outline-0 border-2 border-gray-200 focus:border-teal-700 transition duration-300"
          >
            <option defaultChecked>Choose a category...</option>
            <option value="Coding">Coding and Computer</option>
            <option value="Geography">Geography and Environment</option>
            <option value="Art">Art and Design</option>
            <option value="Business">Business Management</option>
            <option value="Finance">Financial Management</option>
            <option value="Law">Law Management</option>
          </select>
        </div>
        <div className="grid grid-cols-1">
          <textarea
            ref={descrRef}
            name="details"
            placeholder="Some message..."
            cols={3}
            className="w-full h-30 my-3 bg-gray-200 text-gray-500 px-6 py-3 rounded-4xl text-md font-semibold outline-0 resize-none border-2 border-gray-200 focus:border-teal-700 transition duration-300"
          />
        </div>
        <button className="btn-dark mt-2.5 z-1">
          <span className="font-bold text-gray-50 text-sm tracking-wider uppercase">
            Request demo
          </span>
        </button>
      </form>
    </>
  );
};

export default DemoVidEnqForm;
