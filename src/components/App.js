import React from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
//import axios from 'axios';

class App extends React.Component{

    state={
        books:[],
        searchBook:""
    }

    //FETCH API GET METHOD
    async componentDidMount(){
        const adres="http://localhost:3007/books";
        const cevap=await fetch(adres);
        const veri=await cevap.json();
        this.setState({
            books:veri
        })
    }

    //AXIOS API GET METHOD
    /* async componentDidMount(){
        const response=await axios.get("http://localhost:3007/movies");
        this.setState({
            movies:response.data
        })
    } */

    //AXIOS API DELETE METHOD
  /*   deleteMovie=async (movie)=>{
        await axios.delete(`http://localhost:3007/movies/${movie.id}`)
        const newMovieList=this.state.movies.filter(
            m=>m.id!==movie.id
        )
        this.setState(state=>({
            movies:newMovieList
        }))
    }
 */
    /* deleteBook=(book)=>{
        const newBookList=this.state.books.filter(
            b=>b.id!==book.id 
        )
        this.setState({
            books:newBookList
        })
    } */

    //FETCH API DELETE METHOD
    deleteBook=async (book)=>{
        const baseURL=`http://localhost:3007/books/${book.id}`;
        await fetch(baseURL,{
            method:"DELETE"
        })
        const newBookList=this.state.books.filter(
            b=>b.id!==book.id
        )
        this.setState(state=>({
            books:newBookList
        }))
    }

    searchBook=(event)=>{
        this.setState({
            searchBook:event.target.value
        })
    }

    render(){

        let filteredBook=this.state.books.filter(
            (book)=>{
                return book.name.toLowerCase().indexOf(this.state.searchBook.toLowerCase())!==-1
            }
        )

        return(
            <div className="container mt-4 mb-4">
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar searchBookProp={this.searchBook}/>
                    </div>
                </div>
                <MovieList books={filteredBook} deleteBookProp={this.deleteBook}/>
            </div>
        )
    }
}

export default App;