import React from 'react';
//import axios from 'axios';
import {connect } from 'react-redux';
import {  deletepost} from '../Actions/PostAction';
class Post extends React.Component{
   
   /* state ={
        post : null
    }
    componentDidMount(){
       // console.log(this.props);

        let tempid = this.props.match.params.post_id;
       // console.log(tempid);
        axios.get('https://jsonplaceholder.typicode.com/posts/' + tempid)
            .then(res => {
                this.setState({
                    post:res.data
                })
                console.log(res);
            })

        
    }*/
    handleClick=()=>{
        this.props.deletepost(this.props.post.id);
        this.props.history.push('/');
    }
    render(){
       console.log( this.props)
        //console.log('hello')
        const temppost = this.props.post ?(
            <div className ="container Post">
                <h4 className="center red-text">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className ="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        Delete Post
                    </button>
                </div>
            </div>
        ):(
            <div className="container">Post Loading...</div>
        )
        return(
            <div className="conatiner">
                {temppost}
            </div>
        )
    }
}
const mapstateToProps= (state ,myprops) =>{
   // console.log(myprops);
    let id = myprops.match.params.post_id;
  //  console.log(id);
    return{
        post : state.posts.find(post => post.id===id)
    }
}

const mapDispatchToProps = ( dispatch)=>{
    return{
        deletepost : (id) => {
            dispatch(deletepost(id))
        }
    }
}
export default connect(mapstateToProps ,mapDispatchToProps)(Post)