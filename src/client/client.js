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

const getTrHistory = async (args) => {
  let conditions = {
    tr_no: args.tr_no,
    pay_method: args.pay_method,
    del_yn: args.del_yn,
  };
  const r = await query.GetTrHistory({
    offset: args.offset,
    limit: args.limit,
    conditions: conditions,
  });

  return r;
};

export default { getProductList, getTrHistory };
