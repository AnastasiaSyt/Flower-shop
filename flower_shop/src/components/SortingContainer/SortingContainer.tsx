import { useState } from "react";
import Tag from "./Tag/Tag";
import "./SortingContainer.scss";
import SortDropdown from "./SortDropdown/SortDropdown";

function SortingContainer() {
  const [tags, setTags] = useState<string[]>(["Tag 1", "Tag 2", "Tag 3"]);

  const handleTagClose = (tag: string) => {
    const updatedTags = tags.filter((t) => t !== tag);
    setTags(updatedTags);
  };

  const handleSortChange = (value: string) => {
    console.log("Selected sort option:", value);
  };

  const sortOptions = [
    { value: "popular", label: "Популярные" },
    { value: "expensive", label: "Дорогие" },
    { value: "cheap ", label: "Дешевые" },
  ];

  return (
    <div className="tags_container">
      <div className="tags">
        {tags.map((tag) => (
          <Tag key={tag} label={tag} onClose={() => handleTagClose(tag)} />
        ))}
      </div>
      <SortDropdown options={sortOptions} onChange={handleSortChange} />
    </div>
  );
}
export default SortingContainer;
