import { useMemo } from "react";

export const usePagination = (totalPages) => {
  const pagesArray = useMemo(() => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }, [totalPages]);

  return pagesArray;
};
