
import { SingleUniversity } from './SingleUniversity.component'

const ListOfUniversity = ({universities, photos}) => {
    return (
        <div className='university-list'>   {
            
            universities.length > 0? 
            ( universities.map((university, index)=>(
             
             <SingleUniversity photo={photos[index]}  key={university.web_pages[0]} university={university}/>
            ))):
            
            <h1> No Record found</h1>
        }
              </div> 
            
        
  );
}

export default ListOfUniversity
