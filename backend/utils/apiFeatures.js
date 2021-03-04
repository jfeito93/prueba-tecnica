class APIFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }
  search() {
    //! OPERADOR TERNARIO ? = "IF THAT EXISTS"
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};
    //! ? {...} : {}; - este ultimo "{}" sera la traida de resultado
    //! $options: "i" = case insensitive
    console.log(keyword);
    this.query = this.query.find({ ...keyword });
    return this;
  }

  filter() {
    const queryCopy = { ...this.queryStr };

    //! BUSQUEDA CONJUNTA KEYWORD NAME + CATEGORY MEDIANTE FILTRADO
    // Removing fields from the query
    const removeFields = ["keyword", "limit", "page"]; //! estos son [el]
    removeFields.forEach((el) => delete queryCopy[el]);

    console.log(queryCopy);

    //! NO LO USARE - gran recurso para indicar bsuqueda por precio
    // Advanced filter for price
    /* let queryStr = JSON.stringify(queryCopy);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (match) => `$${match}`);

    console.log(queryCopy); */

    //!Removing fields from the query
    this.query = this.query.find(queryCopy);

    //! Advanced filter for price
    //this.query = this.query.find(JSON.parse(queryStr));

    return this;
  }

  pagination(resPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;
    const skip = resPerPage * (currentPage - 1);

    this.query = this.query.limit(resPerPage).skip(skip);
    //! cantidad de prodcutos enseñados

    return this;
  }
}

module.exports = APIFeatures;
