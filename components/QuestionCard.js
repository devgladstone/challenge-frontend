import { useEffect, useRef } from "react";

export default function QuestionCard({
  profile,
  setProfile,
  onQuestion,
  setQuestion,
  controls,
}) {
  const { title, subtext, input, inputType } = controls;
  const inputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    setQuestion(onQuestion + 1);
  };

  const onChange = ({ target }) =>
    setProfile({ ...profile, [target.name]: target.value });

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form
      className={
        "w-full mx-auto border border-white p-4 text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600"
      }
      onSubmit={onSubmit}
    >
      <h1 className="font-medium text-2xl truncate">{title}</h1>
      <h1 className="font-medium text-2xl">{subtext}</h1>
      <input
        ref={inputRef}
        className="bg-transparent border-b-2 text-white text-center focus:outline-none"
        onChange={onChange}
        type={inputType}
        name={input}
        id={input}
        placeholder="Enter text here."
        value={profile[input]}
      />
    </form>
  );
}
