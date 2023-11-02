interface IPaginationPayloadProps {
  toPage: number;
  totalPages: number;
}

const usePagination = (payload: IPaginationPayloadProps): number[] => {
  function calculatePages(payload: IPaginationPayloadProps): number[] {
    const pages: number[] = [];
    let startPage = payload.toPage === 1 || payload.toPage - 2 === 0 ? 1 : payload.toPage === payload.totalPages ? payload.toPage - 2 : payload.toPage - 1;
    let endPage = payload.toPage === 1 ? payload.toPage + 2 : payload.toPage + 1 <= payload.totalPages ? payload.toPage + 1 : payload.toPage;
    for (let i = startPage; i <= endPage; i++) {
      if (i <= payload.totalPages) {
        pages.push(i);
      }
    }
    return pages;
  }

  return [...calculatePages(payload)];
};

export default usePagination;
