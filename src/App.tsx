import { useState } from "react";
import logo from "./logo.svg";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { increment, amountAdded } from "./features/counter/counterSlice";
import { useFetchBreedsQuery } from "./features/dogs/dogsApiSlice";
import "./App.css";

function App() {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.counter.value);

  const [numDogs, setNumDogs] = useState(10);
  const { data = [], isFetching } = useFetchBreedsQuery(numDogs);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => dispatch(amountAdded(5))}>
            count is: {value}
          </button>
        </p>
        <div> 강아지 수는 : {data.length}</div>
        <div>
          <p> 더 가져오기</p>
          <select
            value={numDogs}
            onChange={(e) => setNumDogs(Number(e.target.value))}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>이름</th>
                <th>사진</th>
              </tr>
            </thead>
            <tbody>
              {data.map((breed) => (
                <tr key={breed.id}>
                  <td>{breed.name}</td>
                  <td>
                    <img src={breed.image.url} alt={breed.name} height={250} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
