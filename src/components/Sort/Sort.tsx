import { useState } from "react";
import { useDispatch } from "react-redux";
import { increment } from "../../reducers/reducer";
import { SortMapping } from "../../reducers/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Root, SortButton } from "./Sort.style";

const Sort = () => {
  const dispatch = useDispatch();
  const [sort, setSort] = useState<string | undefined>();

  const handleSort = () => {
    if (sort === SortMapping.Ascending) {
      setSort(SortMapping.Descending);
    } else {
      setSort(SortMapping.Ascending);
    }

    dispatch(increment());
  };

  const isDescending = sort === SortMapping.Descending;

  return (
    <Root>
      <SortButton aria-label="sort_by_price" onClick={handleSort}>
        Sort By Price
      </SortButton>
      {sort && (
        <FontAwesomeIcon
          aria-label={sort}
          icon={isDescending ? faArrowDown : faArrowUp}
        />
      )}
    </Root>
  );
};

export default Sort;
