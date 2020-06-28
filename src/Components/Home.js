import React from 'react';
//import axios from 'axios'
import { Link } from 'react-router-dom';
import pokeball from '../pokeball.png';
import {connect } from 'react-redux';

class Home extends React.Component {

  //  state = {
    //    posts: []
   // }

   /* componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                //console.log(res)
                this.setState({
                    posts: res.data.slice(0, 20)
                })
            });
        //fetch('https://jsonplaceholder.typicode.com/todos')
             //.then(res=> res.json())
            // .then(json => console.log(json))

    }*/
    render() {
       // console.log(this.props)
        
        const {posts}  = this.props; //this.state
    
        const postlist = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={pokeball} alt="A pokeball"/>
                        <div className="card-contenet">
                            <Link to={'/' + post.id}>
                                <span className="card-title red-text">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
                <div className="container">
                    No posts yet
            </div>
            );
        return (
            <div className="home container">
                <h1 className="center">Home</h1>
                {postlist}
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
   //console.log("hello" + state.posts);
    return{
        
        posts : state.posts
    }
} 
export default connect(mapStateToProps)(Home);