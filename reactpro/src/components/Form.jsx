import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  function handleChange() {
    console.log("change occured");
  }
  return (
    <div>
      <form>
        <input onChange={handleChange} type="text" value={name} />
      </form>
    </div>
  );
}
