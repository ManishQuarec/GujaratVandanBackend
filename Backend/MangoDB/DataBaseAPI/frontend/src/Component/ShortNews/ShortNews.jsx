import React from 'react'
import './ShortNews.css';

function ShortNews() {
  return (
    <>
    <div>
    <table className="tbl">
      <tr style={{color: "#000", backgroundColor: "transparent"}}>
        <th>
          <b className='Sanshipt'>સંક્ષિપ્ત સમાચાર </b><span id="read-more">વધુ વાંચો...</span>
        </th>
        
      </tr>
      <p id="read-more"></p>
      <tr>
        <td id="Auto">
          KIITએ SDG ”REDUCING INEQUALITIES”માં વિશ્વ સ્તરે 8મું સ્થાન
          પ્રાપ્ત કર્યુ
        </td>
      </tr>
      <tr>
        <td id="Auto">
          KIITએ SDG ”REDUCING INEQUALITIES”માં વિશ્વ સ્તરે 8મું સ્થાન
          પ્રાપ્ત કર્યુ
        </td>
      </tr>
      <tr>
        <td id="Auto">
          KIITએ SDG ”REDUCING INEQUALITIES”માં વિશ્વ સ્તરે 8મું સ્થાન
          પ્રાપ્ત કર્યુ
        </td>
      </tr>
      <tr>
        <td id="Auto">
          KIITએ SDG ”REDUCING INEQUALITIES”માં વિશ્વ સ્તરે 8મું સ્થાન
          પ્રાપ્ત કર્યુ
        </td>
      </tr>
      <tr>
        <td id="Auto">
          KIITએ SDG ”REDUCING INEQUALITIES”માં વિશ્વ સ્તરે 8મું સ્થાન
          પ્રાપ્ત કર્યુ
        </td>
      </tr>
    </table>
  </div>

  </>
  
  )
}

// export default ShortNews
export default React.memo(ShortNews)
