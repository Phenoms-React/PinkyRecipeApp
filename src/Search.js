import logo from "./logo.svg";
import { useState, useEffect } from "react";

function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");
  const URL = "https://api.spoonacular.com/recipes/complexSearch";
  const APIKEY = "1c334af0b17b4727a18a96762ac4026f";

  useEffect(() => {
    async function fetchfood() {
      const res = await fetch(URL + "?query=" + query + "&apiKey=" + APIKEY);

      const res1 = await fetch(
        "https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=1c334af0b17b4727a18a96762ac4026f"
      );
      const data = await res.json();
      console.log(data);
      setFoodData(data.results);
    }
    fetchfood();
  }, [query]);
  return (
    <div>
      <input
        value={query}
        type="text"
        onChange={(e) => setQuery(e.target.value)}
      ></input>
    </div>
  );
}

export default Search;
