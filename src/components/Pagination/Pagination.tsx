import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { sizeToPagination } from "./utils";
import { NavItem, Root } from "./Pagination.style";
import type { RootState } from "../../store/store";

const size = 5;

const Pagination = () => {
  const hotels = useSelector((state: RootState) => state.hotelReducer);
  const pagination = sizeToPagination(hotels.length, size);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page"));

  const goToPosts = (page: number) => {
    const params = {
      ...Object.fromEntries([...searchParams]),
      page: `${page}`,
    };

    setSearchParams(params);
  };

  return (
    <Root aria-label="pagination">
      <NavItem aria-label="pagination_previous" disabled={currentPage === 1}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </NavItem>
      {pagination.map((_item, index) => {
        const isCurrentPage = index + 1 === Number(searchParams.get("page"));
        return (
          <NavItem
            key={index}
            aria-label={`${index + 1}`}
            onClick={() => goToPosts(index + 1)}
            // disabled={isCurrentPage}
            $active={isCurrentPage}
          >
            {index + 1}
          </NavItem>
        );
      })}
      <NavItem
        aria-label="pagination_next"
        disabled={currentPage === pagination.length}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </NavItem>
    </Root>
  );
};

export default Pagination;
