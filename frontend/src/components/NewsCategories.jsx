import NewsCard from "./NewsCard";
import NewsDetails from "./NewsDetails";
import photography from "../assets/photography.jpg";
import news from "../assets/news.jpg";
import sports from "../assets/sports.jpg";
import edu from "../assets/edu.jpg";
import economy from "../assets/economy.jpg";
import { useState, useEffect } from "react";

export default function NewsCategories() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const imgs = [
    {
      name: "رياضة",
      img: sports,
    },
    {
      name: "ثقافة",
      img: edu,
    },
    {
      name: "أخبار",
      img: news,
    },
    {
      name: "اقتصاد",
      img: economy,
    },
    {
      name: "فيديو وصور",
      img: photography,
    },
  ];

  const fetchCategories = async () => {
    await fetch("api/aggregates")
      .then((response) => response.json())
      .then((data) => {
        const updatedCategories = data.map((category) => {

          const matchedImage = imgs.find(
            (img) => img.name === category.category
          );
          return {
            ...category,
            img: matchedImage ? matchedImage.img : null,  
          };
        });
        console.log(updatedCategories);
        setCategories(updatedCategories);
      });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      {selectedCategory ? (
        <NewsDetails
          category={selectedCategory}
          onBack={() => setSelectedCategory(null)} 
        />
      ) : (
        <section className="px-6 sm:px-12 lg:px-24 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <NewsCard
                key={index}
                category={category.category}
                img={category.img}
                className={`${index === 2 ? "row-span-1 lg:row-span-2" : ""}`}
                onClick={() => setSelectedCategory(category)} 
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
