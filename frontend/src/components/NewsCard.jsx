import MoreInfoButton from "./MoreInfoButton";

export default function NewsCard({ category, img, className, onClick  }) {
  return (
    <div
    onClick ={onClick }
      className={`${className} flex flex-col justify-between bg-white shadow-lg rounded-md cursor-pointer`}
    >
      <img
        src={img}
        alt="img"
        className="w-full h-48 sm:h-60 lg:h-full object-cover rounded-md"
      />
      <div className="flex flex-col gap-y-3 items-end p-4">
        <h2 className="text-2xl font-bold mb-2 text-red-600">{category}</h2>
        <MoreInfoButton link={"/"} className="bg-green-600">
          المزيد
        </MoreInfoButton>
      </div>
    </div>
  );
}
