import React from 'react';

class SearchBar extends React.Component{

    handleSubmitForm=(event)=>{
        event.preventDefault();
    }

    render(){
        return(
           
            <form onSubmit={this.handleSubmitForm}>
                <div className="form-row mb-5">
                    <div className="col-12">
               
                        <input type="text" 
                        className="form-control"
                        onChange={this.props.searchBookProp}
                        placeholder="Search a book"
                        />
                    </div>
                </div>
            </form>
           
        )
    }
}


export default SearchBar;








