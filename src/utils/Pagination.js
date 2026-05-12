class Pagination {
  static build(input = {}) {
    const page = parseInt(input.page) || 1;
    const limit = parseInt(input.limit);

    // ❗ IMPORTANT: if limit not passed → NO pagination
    let isPaginated = !!limit && limit > 0;

    return {
      page,
      limit: isPaginated ? limit : null,
      offset: isPaginated ? (page - 1) * limit : null,
      isPaginated,
    };
  }
}

module.exports = Pagination;
