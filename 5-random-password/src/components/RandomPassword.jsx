import { useCallback, useEffect, useRef, useState } from "react";

const RandomPassword = () => {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    if (numAllow) str += "1234567890";
    if (charAllow) str += "~!@#$%^&*<>?";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllow, charAllow, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllow, charAllow, passwordGenerator]);

  return (
    <div className="flex flex-col w-full max-w-md mx-auto shadow-lg rounded-lg px-4 pb-4 text-emerald-400 bg-stone-900">
      <h1 className="text-2xl py-5 font-semibold text-yellow-400">
        Random Password Generator
      </h1>
      <div className="flex shadow-lg overflow-hidden mb-4 py-2">
        <input
          type="text"
          name=""
          id=""
          value={password}
          ref={passwordRef}
          readOnly
          className="outline-none py-1 px-3 w-full bg-stone-900"
        />
        <button
          onClick={copyToClipboard}
          className="bg-stone-700 px-2 rounded-lg"
        >
          Copy
        </button>
      </div>
      <button
        onClick={passwordGenerator}
        className="bg-stone-700 p-2 rounded-lg mb-3 
        "
      >
        Generate
      </button>
      <div className="flex justify-between">
        <label htmlFor="length" className="flex items-center gap-1">
          <input
            className="cursor-pointer"
            type="range"
            name="length"
            id="length"
            value={length}
            min={6}
            max={100}
            onChange={(e) => setLength(e.target.value)}
          />
          Length: {length}
        </label>
        <label
          htmlFor="number"
          className="items-center flex gap-1 cursor-pointer"
        >
          <input
            type="checkbox"
            name="number"
            id="number"
            onChange={() => setNumAllow((prev) => !prev)}
          />
          Numbers
        </label>
        <label
          htmlFor="charecters"
          className="flex items-center gap-1 cursor-pointer"
        >
          <input
            type="checkbox"
            name="Characters"
            id="charecters"
            onChange={() => setCharAllow((prev) => !prev)}
          />
          Characters
        </label>
      </div>
    </div>
  );
};

export default RandomPassword;
