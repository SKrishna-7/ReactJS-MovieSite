import React from 'react'
import bg from '../../assets/footer-bg.jpg';
import './PageHeader.scss';
const PageHeader=props=> {
  return (
    <div className="pageheader" style={{background:`url(${bg})`}}>
     <h2> {props.children}</h2>
    </div>
  )
}

export default PageHeader