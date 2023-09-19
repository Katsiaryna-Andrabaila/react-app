import { usePagination } from "../../../hooks/usePagination";

const MyPagination = ({totalPages, page, changePage}) => {
    const pagesArray = usePagination(totalPages);

    return (
        <div className="page__wrapper">
            {pagesArray.map((el) => (
                <span
                className={page === el ? "page page__active" : "page"}
                key={el}
                onClick={() => changePage(el)}
                >
                    {el}
                </span>
            ))}
        </div>
    )
};

export default MyPagination;