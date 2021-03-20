import { useState } from "react";
import Head from "next/head";
import SlowTransition from "../components/SlowTransition";
import QuestionCard from "../components/QuestionCard";
import JokeCard from "../components/JokeCard";

export default function Home() {
  const [onQuestion, setQuestion] = useState(0);
  const [profile, setProfile] = useState({
    firstName: "",
    age: "",
  });

  const onStart = () => {
    setQuestion(1);
    setProfile({
      firstName: "",
      age: "",
    });
  };

  const buttonClass =
    "inline-flex items-center px-12 py-3 border border-white text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";

  return (
    <div>
      <Head>
        <title>Hudello world</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="bg-black max-w-7xl mx-auto min-h-screen sm:px-6 lg:px-16">
          <div className="max-w-5xl mx-auto py-6 flex flex-1 justify-center">
            <div className="flex-col text-center space-y-16">
              <h1 className="font-medium text-2xl text-white border-b-2 border-gray-600">
                Hello!
              </h1>
              <button onClick={onStart} className={buttonClass}>
                Click here to begin.
              </button>

              <div className="w-96">
                <SlowTransition condition={onQuestion > 0}>
                  <QuestionCard
                    profile={profile}
                    setProfile={setProfile}
                    onQuestion={onQuestion}
                    setQuestion={setQuestion}
                    controls={{
                      title: "Let's get to it.",
                      subtext: "What's your name?",
                      input: "firstName",
                      inputType: "text",
                    }}
                  />
                  )
                </SlowTransition>

                <SlowTransition condition={onQuestion > 1}>
                  <QuestionCard
                    profile={profile}
                    setProfile={setProfile}
                    onQuestion={onQuestion}
                    setQuestion={setQuestion}
                    controls={{
                      title: `Nice to meet you ${profile.firstName}`,
                      subtext: "How old are you?",
                      input: "age",
                      inputType: "number",
                    }}
                  />
                  )
                </SlowTransition>

                <SlowTransition condition={onQuestion > 2}>
                  <JokeCard />)
                </SlowTransition>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}