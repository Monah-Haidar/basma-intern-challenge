import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { MinusIcon } from "@heroicons/react/24/outline";

export default function Accordion() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  return (
    <>
      <div className="rounded-lg bg-gray-300 border border-gray-400">
        <button
          onClick={() => setIsAccordionOpen(!isAccordionOpen)}
          className="flex items-center justify-between w-full rounded-md"
        >
          <p
            className={`py-3 px-2 text-end w-full rounded-r-none rounded-l-lg ${
              isAccordionOpen
                ? "bg-gray-700 text-white "
                : "bg-white text-green-600"
            }`}
          >
            الكلمات العشوائية
          </p>
          <span
            className={`py-3 px-2 rounded-l-none rounded-tr-lg ${
              isAccordionOpen
                ? "rounded-br-none bg-red-500 "
                : "rounded-br-lg bg-green-600"
            }`}
          >
            {isAccordionOpen ? (
              <MinusIcon className="h-6 w-6 text-white" />
            ) : (
              <PlusIcon className="h-6 w-6 text-white" />
            )}
          </span>
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
            isAccordionOpen
              ? "grid-rows-[1fr] opacity-100 px-10 py-3"
              : "grid-rows-[0fr] opacity-0 p-0"
          }`}
        >
          <div className={`overflow-hidden text-end text-neutral-500 `}>
            {" "}
            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
            القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في
            الصفحة التي يقرأها.
          </div>
        </div>
      </div>
    </>
  );
}
