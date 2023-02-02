import React from 'react'

function RightPhotoImage() {
  return (
    <>
    <div className="head">
          <h4>રસપ્રદ</h4>
          <p>વધુ વાંચો...</p>
        </div>
        <div className="img-right">
          <img
            src={require('../../Image/HomePageIMage/raspred1.png')}
            style={{height: "222px", width: "267px"}}
          />
        </div>
        <div className="img-right">
          <img
            src={require('../../Image/HomePageIMage/raspred1.png')}
            style={{height: "222px", width: "267px"}}
          />
        </div>
        </>
  )
}

export default RightPhotoImage