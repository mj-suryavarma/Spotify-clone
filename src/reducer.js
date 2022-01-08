export const initialState = {
    user: null,
    playlists : [],
    playing : false,
    item: null,
    //  REMOVE after finished the developing....

     token : 'BQCAMeiJ-fbWtuvP000OeCa9foCEXdmhO0XX8r3noS7433i2sQW4pJAMKscWLJYRlQX0da1PpJ_88Qh0LrEqTkZhF9ha3z4BxhY7a8VktOt2YwUMPVZBdX2hKl4x3j1OscocpgrkVddqIlzHfRE2lK_7XGNlXUiXhoR1pnv_WSwqJ1sq',

}
const reducer = (state , action)=>{
   console.log("all action is ",action);

    switch(action.type) {
         
        case "SET_USER":
            return {
                ...state,
                user: action.user
            };

         case "SET_TOKEN":
             return{
                 ...state,
                 token: action.token,
             } 
          case "SET_PLAYLISTS":
              return {
                  ...state,
                  playlists: action.playlists,
              }   

            default:
                return state;
    }
}
export default reducer;