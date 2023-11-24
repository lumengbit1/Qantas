import { useSelector } from "react-redux";
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

  return (
    <Root aria-label="pagination">
      <NavItem aria-label="pagination_previous">
        <FontAwesomeIcon icon={faChevronLeft} />
      </NavItem>
      {pagination.map((_item, index) => (
        <NavItem key={index} aria-label={`${index + 1}`}>
          {index + 1}
        </NavItem>
      ))}
      <NavItem aria-label="pagination_next">
        <FontAwesomeIcon icon={faChevronRight} />
      </NavItem>
    </Root>
  );
};

export default Pagination;
