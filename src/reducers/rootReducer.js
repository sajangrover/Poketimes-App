const initstate ={
    posts: [
        {id :'1' , title:'this is title 1' ,body :'Increasing impression interested expression he my at. Respect invited request charmed me warrant to. Expect no pretty as do though so genius afraid cousin. Girl when of ye snug poor draw. Mistake totally of in chiefly. Justice visitor him entered for. Continue delicate as unlocked entirely mr relation diverted in. Known not end fully being style house. An whom down kept lain name so at easy.'},
        {id :'2' , title:'this is title 2' ,body :'Increasing impression interested expression he my at. Respect invited request charmed me warrant to. Expect no pretty as do though so genius afraid cousin. Girl when of ye snug poor draw. Mistake totally of in chiefly. Justice visitor him entered for. Continue delicate as unlocked entirely mr relation diverted in. Known not end fully being style house. An whom down kept lain name so at easy.'},
        {id :'3' , title:'this is title 3' ,body :'Increasing impression interested expression he my at. Respect invited request charmed me warrant to. Expect no pretty as do though so genius afraid cousin. Girl when of ye snug poor draw. Mistake totally of in chiefly. Justice visitor him entered for. Continue delicate as unlocked entirely mr relation diverted in. Known not end fully being style house. An whom down kept lain name so at easy.'}
    
    ]
}
const rootReducer = (state = initstate, action) =>{
    console.log(state)
    console.log(action);
    if(action.type === 'DELETE_POST'){
        let newpost = state.posts.filter(post =>{
            return action.id !== post.id
        });

        //console.log(newpost);
        return{
            
            ...state,
            posts:newpost
        }
    }
    return state;
}

export default rootReducer;