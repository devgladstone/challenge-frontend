import { useState } from "react";
import { HappyFace, SadFace } from "../components/EmojiSVGs";
import SlowTransition from "../components/SlowTransition";

export default function JokeCard() {
  const [likesJokes, setJokes] = useState(null);

  return (
    <div
      className={
        "w-full border border-white p-4 text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600"
      }
    >
      <h1 className="font-medium text-2xl">Wow, that old huh?</h1>
      <h1 className="font-medium text-2xl">
        Well, never too old for jokes. Would you like to hear one?
      </h1>

      <div className="pt-2 space-x-8 flex justify-center">
        <button
          className="hover:underline focus:outline-none"
          onClick={() => setJokes(true)}
        >
          <span className="flex justify-center items-center space-x-2">
            <p className="" id="yes">
              yes please
            </p>
            <HappyFace />
          </span>
        </button>

        <button
          className="hover:underline focus:outline-none"
          onClick={() => setJokes(false)}
        >
          <span className="flex justify-center items-center space-x-2">
            <SadFace />
            <p className="" id="yes">
              please no
            </p>
          </span>
        </button>
      </div>

      <div className="pt-2">
        {likesJokes !== null && (
          <p>
            {likesJokes
              ? "What do nosy peppers do? They get JALAPENO business! :D Alright, see ya!"
              : "Okay fine. Goodbye :("}
          </p>
        )}
      </div>
    </div>
  );
}
