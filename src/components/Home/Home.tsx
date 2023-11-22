import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store/store";
import { decrement, increment } from "../../reducers/reducer";
import { Root } from "./Home.style";

const HomePage = () => {
  const count = useSelector((state: RootState) => state.reducer.value);
  const dispatch = useDispatch();

  return (
    <Root>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </Root>
  );
};

export default HomePage;
