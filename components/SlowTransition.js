import { Transition } from "@headlessui/react";

export default function SlowTransition({ children, condition }) {
  return (
    <Transition
      show={condition}
      enter="transition-opacity duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-250"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {children}
    </Transition>
  );
}
