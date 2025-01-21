export default function NewsDetails({ category, onBack }) {
    return (
      <div className="p-6 sm:p-12 lg:p-24">
        <button
          onClick={onBack}
          className="mb-6 px-4 py-2 bg-red-600 text-white rounded-md"
        >
          العودة
        </button>
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-4xl font-bold text-red-600">{category.category}</h1>
          <img
            src={category.img}
            alt={category.category}
            className="w-full h-96 object-cover rounded-md"
          />
          <p className="text-lg text-gray-700">
            {category.body || "لا توجد تفاصيل إضافية."}
          </p>
        </div>
      </div>
    );
  }
  