import Image from 'next/image'
import React from 'react'

export const SingleUniversity = ({university, photo}) => {
    return (
        <div className='single-university'>
         
            {/* <Image className='img' src={university.url} alt={university.title} width={'600'} height={'600'}></Image> */}
            
            <Image alt={photo.url.substring(photo.url.indexOf('photo/'))} className='img' 
            src={photo.src['portrait']}  width={500} height={500} ></Image>
              <h3>{university.name}</h3>
        </div>
    )
}
