import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "./MenuItem";

const MenuItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data.filter((i) => i.category === "salad");
        setItems(filteredData);
      });
  }, []);

  return (
    <section className="max-w-screen-lg	mx-auto">
      <SectionTitle subHeading="Check it out" heading="FROM OUR MENU" />
      <div className="grid md:grid-cols-2 mt-4 pb-16 gap-4">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default MenuItems;
