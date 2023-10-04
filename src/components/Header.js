import React from 'react';


class Header extends React.Component {

  date = new Date()
  dateNumber = this.date.getDate()
  dateMonth = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'][this.date.getMonth()]
  dateYear = this.date.getFullYear()
  dateDay = ['Sunday','Monday','Tuesday','Wensday','Thursday','Friday','Saturday'][this.date.getDay()]
  
  render() {
    return (
        <header>
          <h1 className='date-number'>{this.dateNumber}</h1>
          <h1 className='date-month'>{this.dateMonth}</h1>
          <h1 className='date-year'>{this.dateYear}</h1>
          <h1 className='date-day'>{this.dateDay}</h1>
        </header>
    )
  }
}

export default Header