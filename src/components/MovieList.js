import React from 'react';

const bookList=(props)=>{
    return(
        <div className="row mb-4">
            {
                props.books.map((book)=>{
                    return(
                    <div className="col-lg-4" key={book.id}>
                        <div className="card mb-4">
                            <img src={book.imageURL} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{book.name}</h5>
                                <p className="card-text">{book.overview}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <button onClick={(event)=>props.deleteBookProp(book)} className="btn btn-md btn-outline-danger" type="button">Delete</button>
                                    <h2><span className="badge bg-info">{book.rating}</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                   
                })
                
            }
        </div>
    )
}


export default bookList;