import { useState } from "react";
import { useDispatch } from "react-redux";
import { sorting } from "../../reducers/reducer";
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
      dispatch(sorting(SortMapping.Descending));
    } else {
      setSort(SortMapping.Ascending);
      dispatch(sorting(SortMapping.Ascending));
    }
  };

  const isDescending = sort === SortMapping.Descending;

  return (
    <Root>
      <SortButton
        aria-label="sort_by_price"
        data-testid="sort_by_price"
        onClick={handleSort}
      >
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
