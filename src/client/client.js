import query from '../queries/query';

const getProductList = async (args) => {
  let conditions = {
    prd_type: args.prd_type,
  };
  const r = await query.GetProductList({
    offset: args.offset,
    limit: args.limit,
    conditions: conditions,
  });
  return r;
};

export default { getProductList };
