import React, { useRef, useState } from "react";
import "./Assignment.css";

const Itemsdata = [
  {
    name: "Hitesh",
    key: 1,
    img: "/dummy-image.jpg",
  },
  { name: "kalpesh", key: 2, img: "/dummy-image.jpg" },
  { name: "sandesh", key: 3, img: "/dummy-image.jpg" },
  {
    name: "bhaiya",
    key: 4,
    img: "/dummy-image.jpg",
  },
  {
    name: "bhai",
    key: 5,
    img: "/dummy-image.jpg",
  },
  {
    name: "brother",
    key: 6,
    img: "/dummy-image.jpg",
  },
];
let t;
const Assignment = ({ options }) => {
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState([]);
  const [shouldShowList, setShouldList] = useState(false);
  const inputRef = useRef();

  const removeTags = (val) => {
    let remain = tags.filter((t) => t !== val);
    setTags(remain);
  };
  const onSearch = (searchItem) => {
    setTags((prevTags) => [...prevTags, searchItem]);
  };

  const filterOptions = Itemsdata.filter((item) => {
    let shouldAdd = true;
    for (let index = 0; index < tags.length; index++) {
      const element = tags[index];
      if (element.name === item.name) {
        shouldAdd = false;
        break;
      }
    }
    return shouldAdd;
  });

  return (
    <div className="main" style={{ display: "flex" }}>
      <div className="content">
        {tags.map((item, index) => {
          return (
            <div className="input-main" key={index}>
              <div className="input-submain" key={item}>
                <img src={item.img} alt="" />
                <p>{item.name}</p>
                <button
                  className="button-x"
                  key={index}
                  onClick={() => removeTags(item)}
                >
                  x
                </button>
              </div>
            </div>
          );
        })}
        <input
          className="inputfield"
          type="text"
          value={inputValue}
          placeholder=".. add new "
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onFocus={() => {
            t && clearTimeout(t);
            setShouldList(true);
          }}
          onBlur={() => {
            t = setTimeout(() => {
              setShouldList(false);
            }, 300);
          }}
          ref={inputRef}
        ></input>
      </div>
      <div className="selectdiv">
        <ul>
          {shouldShowList &&
            filterOptions
              .filter((item) => {
                const searchItem = inputValue.toLowerCase();
                if (searchItem === "") return true;
                const name = item.name.toLowerCase();
                return searchItem && name.startsWith(searchItem);
              })
              .map((item, index) => {
                return (
                  <li
                    className="selectdiv-sub"
                    onClick={() => {
                      onSearch(item);
                      inputRef.current.focus();
                    }}
                    key={index}
                  >
                    <img src={"/dummy-image.jpg"} alt=""></img>
                    {item.name}
                  </li>
                );
              })}
        </ul>
      </div>
    </div>
  );
};

export default Assignment;
