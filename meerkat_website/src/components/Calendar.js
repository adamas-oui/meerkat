import React, { useState } from 'react';
import './Calendar.css'

const arrMonth = {
 January: 30,
 February: 27,
 March: 30,
 April: 29,
 May: 30,
 June: 29,
 July: 30,
 August: 30,
 September: 29,
 October: 30,
 November: 29,
 December: 30
};
const arrDays = [
 "Monday",
 "Tuesday",
 "Wednesday",
 "Thursday",
 "Friday",
 "Saturday",
 "Sunday"
];

class Calendar extends React.Component {
  
 constructor() {
   super();
   this.today = new Date(); //e.g. Saturday 20th July 2019

   let year = parseInt(this.today.toJSON().slice(0, 4)); //2019
   let month = parseInt(this.today.toJSON().slice(5, 7)) - 1; // e.g. 7 - 1
   this.dayToday = parseInt(this.today.toJSON().slice(8, 10)) - 1; // e.g. 20 - 1

   this.weekdayToday = this.today.getDay() === 0 ? 6 : this.today.getDay() - 1; // e.g. 5
   let firstDay = this.weekdayToday - (this.dayToday % 7);
   firstDay = firstDay < 0 ? 6 - firstDay : firstDay; //5 - (19 % 7) = 0
   let strMonth = Object.keys(arrMonth)[month]; //July
   let strMonthValue = Object.values(arrMonth)[month]; //30
   if (month === 1 && year % 4 === 0) {
     strMonthValue = 28;
   }
   
   let dates = new Set() 
   
   this.state = {
     year: year, //e.g. 2019
     month: month, //e.g. 6
     day: this.dayToday + 1, //e.g. 20
     dates: dates,
     firstDay: firstDay, //e.g. 0
     strMonth: strMonth, //July
     strMonthValue: strMonthValue //30
   };
 }


 
 onItemClick(event) {
   this.setState({ day: parseInt(event.currentTarget.dataset.id) });
   let newDate = new Date(this.state.year, this.state.month, event.currentTarget.dataset.id);
   let dateStr = JSON.stringify(newDate);
   console.log(parseInt(event.currentTarget.dataset.id));
   console.log(this.state.month + 1);
   console.log(this.state.year);
   console.log(newDate)
   if (!this.state.dates.has(dateStr)) {
     this.state.dates.add(dateStr)
   } else {
     this.state.dates.delete(dateStr)
   }
   console.log(this.state.dates)
 }
 
 handleSelectedDates = () => {
   var sendDates = this.state.dates;
   this.props.onSelectedDates(sendDates)
 }
 

 pushTable = (table, children) => {
   table.push(
     <tbody key={table}>
       <tr key={children}>{children}</tr>
     </tbody>
   );
   return [];
 };
 createTable = () => {
   let table = [];
   // Outer loop to create parent
   let count = 1 - this.state.firstDay;
   //let startval = this.firstDay;
   let children = [];
   for (let i = 0; i < 7; i++) {
     children.push(<td key={i}>{arrDays[i].substring(0, 3)}</td>);
   }
   children = this.pushTable(table, children);
   while (count <= this.state.strMonthValue + 1) {
     //Inner loop to create children
     for (let j = 0; j < 7; j++) {
       count <= this.state.strMonthValue + 1 && count > 0
         ? children.push(
             <td
               key={count}
               onClick={this.onItemClick.bind(this)}
               className={`item-block ${

                 this.state.dates.has(JSON.stringify(new Date(this.state.year, this.state.month, count))) ? "active" : "inactive"
               }`}
               data-id={count}
             >
               {count}
             </td>
           )
         : children.push(<td key={count} />);

       count += 1;
     }
     //Create the parent and add the children
     children = this.pushTable(table, children);
     //startval = 0;
   }
   return table;
 };
 previousMonth = () => {
   let lastDay = this.state.firstDay - 1 < 0 ? 6 : this.state.firstDay - 1;
   if (this.state.month - 1 < 0) {
     this.setState({ year: this.state.year - 1, month: 11 }, () => {
       let newMonth = this.state.month;
       let newYear = this.state.year;
       this.calcPrevMonth(lastDay, newMonth, newYear);
     });
   } else {
     this.setState({ month: this.state.month - 1 }, () => {
       let newMonth = this.state.month;
       this.calcPrevMonth(lastDay, newMonth, this.state.year);
     });
   }
   return this.createTable();
 };
 nextMonth = () => {
   let lastDay = this.state.firstDay + (this.state.strMonthValue % 7);
   let firstDay = lastDay + 1 > 6 ? lastDay - 6 : lastDay + 1;
   if (this.state.month + 1 > 11) {
     this.setState(
       { year: this.state.year + 1, month: 0, firstDay: firstDay },
       () => {
         let newMonth = this.state.month;
         let newYear = this.state.year;
         this.calcNextMonth(newMonth, newYear);
       }
     );
   } else {
     this.setState({ month: this.state.month + 1, firstDay: firstDay }, () => {
       let newMonth = this.state.month;
       this.calcNextMonth(newMonth, this.state.year);
     });
   }
   return this.createTable();
 };
 calcPrevMonth(lastDay, newMonth, newYear) {
   let newMonthValue = Object.values(arrMonth)[newMonth];
   if (this.state.month === 1 && newYear % 4 === 0) {
     newMonthValue = 28;
   }
   let first = lastDay - (newMonthValue % 7);

   first = first < 0 ? 7 + first : first;
   console.log(lastDay);
   this.setState({
     strMonth: Object.keys(arrMonth)[newMonth],
     strMonthValue: newMonthValue,
     firstDay: first,
     day: newMonthValue + 1
   });
 }
 calcNextMonth(newMonth, newYear) {
   let newMonthValue = Object.values(arrMonth)[newMonth];
   if (this.state.month === 1 && newYear % 4 === 0) {
     newMonthValue = 28;
   }
   this.setState({
     strMonth: Object.keys(arrMonth)[newMonth],
     strMonthValue: newMonthValue,
     day: 1
   });
 }
 render() {
   return (
     <div>
     <div className="row" >
       
       <div className="col-4" id="col-left">
         <div className="row" id="part-1">
           <div className="col">
             <h2>Today</h2>
             <h1 id="day">{this.dayToday + 1}</h1>
             <h3>{arrDays[this.weekdayToday]}</h3>
           </div>
         </div>
       </div>
       
       <div className="col-8" id="col-right">
         <div className="row" id="title">
           <div className="col-3 my-auto" id="l-arrow">
             <button className="btn" id="leftBtn" onClick={this.previousMonth}>
               &lt;
             </button>
           </div>
           <div className="col-6" id="title-date">{`${this.state.strMonth} ${
             this.state.year
           }`}</div>
           <div className="col-3 my-auto" id="r-arrow">
             <button className="btn" id="rightBtn" onClick={this.nextMonth}>
               &gt;
             </button>
           </div>
         </div>
         
         <div className="row">
           <div className="col">
             <table className="table borderless" >{this.createTable()}</table>
           </div>
         </div>
       </div>
       
     </div>
     <br />
     <button onClick={this.handleClick} className="btn btn-success float-end">Confirm my updated dates</button>
     </div>
   );
 }
}


export default Calendar;