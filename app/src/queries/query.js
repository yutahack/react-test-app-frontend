import fetchGraphQL from '../graphQL/fetch-graphql';

const UserLogin = async (args) => {
  const q = `query UserLogin($user_id:String, $user_pw:String) {
    Login(user_id: $user_id, user_pw: $user_pw){
        error,
      result { 
        user_id,    
        token 
      }
    }
  }
  `;

  const p = { user_id: args.user_id, user_pw: args.user_pw };
  const result = await fetchGraphQL(q, p);
  console.log('RESULT', result);
  //   console.log('result: ', result);
  //   if ('200' == result.response) {
  //     if (result.value.data) {
  //       setBooks(result.value.data.Books);
  //     }
  //   } else {
  //     console.log('Fetch GQL Error!= ', result.value);
  //   }
  return result;
};

const GetProductList = async (args) => {
  const q = `
        query GetProductList($offset:Int, $limit:Int, $conditions:GetProductListConditions!){
            GetProductList(offset:$offset, limit: $limit, conditions:$conditions){
                error,
                result{
                    prd_code,
                    prd_name,
                    prd_type,
                    prd_price,
                    insert_date,
                    insert_user
                }
            }
        }
    `;

  const p = { offset: args.offset, limit: args.limit, conditions: args.conditions };
  const result = await fetchGraphQL(q, p);
  console.log('RESULT', result);
  //   console.log('result: ', result);
  //   if ('200' == result.response) {
  //     if (result.value.data) {
  //       setBooks(result.value.data.Books);
  //     }
  //   } else {
  //     console.log('Fetch GQL Error!= ', result.value);
  //   }
  return result;
};

const GetTrHistory = async (args) => {
  const q = `
      query GetTrHistory($offset:Int, $limit:Int, $conditions:GetTrHistoryConditions!){
        GetTrHistory(offset:$offset, limit: $limit, conditions:$conditions){
          error,
          result {
            count,
            rows {
              seq,
              tr_no,
              tr_date,
              amount,
              pay_method,
              del_yn
            }
          }
        }
      }
    `;

  const p = { offset: args.offset, limit: args.limit, conditions: args.conditions };
  const result = await fetchGraphQL(q, p);

  console.log('RESULT', result);

  return result;
};

const InsertTrHistory = async (args) => {
  const q = `
      mutation InsertTrHistory($input:InsertTrHistoryRequest!){
        InsertTrHistory(input: $input){
          error,
          result
          
        }
      }
    `;

  // const p = { offset: args.offset, limit: args.limit, conditions: args.conditions };
  const p = {
    input: { tr_no: '0000', amount: args.amount, pay_method: args.pay_method },
  };
  const result = await fetchGraphQL(q, p);

  console.log('RESULT', result);

  return result;
};

export default { UserLogin, GetProductList, GetTrHistory, InsertTrHistory };
