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

export default { UserLogin };
