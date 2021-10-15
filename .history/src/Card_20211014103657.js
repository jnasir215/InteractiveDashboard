import React from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader
} from  '@coreui/react'
//import Data from './data/data1.json'
import App from './App'

const Cards = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showCard, setShowCard] = React.useState(true)

  return (

        <CCard>
            <CCardHeader>
              Card with label
              <div className="card-header-actions">
                <CBadge color="success" className="float-right">Success</CBadge>
              </div>
            </CCardHeader>
            <CCardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
//              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
//              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              
            </CCardBody>
          </CCard>

  )
}

export default Cards

//Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
//              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
//              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.

// CCardFooter
// CCol
// CRow
// CCollapse
// CFade
// CSwitch
// CLink