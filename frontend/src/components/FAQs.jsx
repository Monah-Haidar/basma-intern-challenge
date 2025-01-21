import Accordion from "./Accordion";
import Hope from "../assets/hope.jpg";

export default function FAQs() {
  return (
    <>
      <section className="px-6 sm:px-12 lg:px-24 ">
        <div className="py-8 border-t-2 border-b-2 border-gray-300 gap-y-6 flex flex-col sm:flex-row-reverse justify-between sm:gap-x-16 ">
          <img src={Hope} alt="img" className="sm:w-2/6 rounded-lg" />
          <div className="flex flex-col gap-y-4 flex-grow">
            <h3 className="text-end text-2xl font-semibold text-green-600">
              الأكثر قراءة
            </h3>
            <div className="flex flex-col gap-y-2">
              <Accordion />
              <Accordion />
              <Accordion />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
