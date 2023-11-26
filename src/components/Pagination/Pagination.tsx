import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { sizeToPagination } from "./utils";
import { size } from "../../reducers/constants";
import { NavItem, Root } from "./Pagination.style";
import type { RootState } from "../../store/store";

const Pagination = () => {
  const hotels = useSelector((state: RootState) => state.hotelReducer);
  const pagination = sizeToPagination(hotels.length, size);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const goToPosts = (page: number) => {
    const params = {
      ...Object.fromEntries([...searchParams]),
      page: `${page}`,
    };

    setSearchParams(params);
  };

  return (
    <Root aria-label="pagination">
      <NavItem
        aria-label="pagination_previous"
        data-testid="pagination_prev"
        disabled={currentPage === 1}
        onClick={() => goToPosts(currentPage - 1)}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </NavItem>
      {pagination.map((_item, index) => {
        const isCurrentPage = index + 1 === currentPage;
        return (
          <NavItem
            key={index}
            aria-label={`${index + 1}`}
            data-testid={`pagination_${index + 1}`}
            onClick={() => goToPosts(index + 1)}
            $active={isCurrentPage}
          >
            {index + 1}
          </NavItem>
        );
      })}
      <NavItem
        aria-label="pagination_next"
        data-testid="pagination_next"
        disabled={currentPage === pagination.length}
        onClick={() => goToPosts(currentPage + 1)}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </NavItem>
    </Root>
  );
};

export default Pagination;
