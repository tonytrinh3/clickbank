import React from 'react';


class Search extends React.Component{

   
       state = { hideResults: true };
    
   
        
    
    
      handleClick= () =>{
          if (this.state.hideResults){
            this.setState({ hideResults: false });
          }
          else{
            this.setState({ hideResults: true });
          }
        
      }

    render(){
        return(
        <div>
          <input type="submit" value="Toggle" onClick={this.handleClick} />
          { !this.state.hideResults && <Results /> }
        </div>
        )
    }
    
    
  

  };
  
  function Results(){
    return(
        <div id="results" className="search-results">
        Some Results
      </div>);

  };

  export default Search;