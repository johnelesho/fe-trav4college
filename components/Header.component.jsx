
const Header = ({onChange, inputValue}) => {

 
    return (
        <header className='header'>
            <h1>Explore Colleges and Universities </h1>

                               
                                    <div className="search-box"> 
                                    <i className="fas fa-search"></i>
                                    <input value={inputValue} onChange={onChange} className="searchField" type="search" placeholder="Search for colleges"/>
                                    </div>
                                 
                        
        </header>
    )
}

export default Header
