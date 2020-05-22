import withRoot from "../../utils/withRoot";
import React from "react";
import { graphql } from "gatsby";
import SEO from "../../components/SEO";
import Page from "../../components/Page";
//import List from "../../components/List";
import ListOfPrograms from "../../components/ListOfPrograms";
import useClassesData from "../../hooks/useClassesData";
import { Link } from "gatsby";


const Programs = (props) => {
  const classes = useClassesData();

  function convertToLocalDatetime(dateTime){
      //add code here to convert Pakistan time to the local date time
      return dateTime;
  }

  function covertToLocalTime(time, startDate){
      //add code here to convert Pakistan time to the local time
      var twoPeriod;
      var twoPeriodHr;
      if(time.h <= 12){
        twoPeriod = "AM";
        twoPeriodHr = time.h;
      }
      else {
        twoPeriod = "PM";
        twoPeriodHr = time.h - 12;
      }
      if(time.m < 10) {
        return ("" + twoPeriodHr + ":0" + time.m + " " + twoPeriod);
      }
      else {
        return ("" + twoPeriodHr + ":" + time.m + " " + twoPeriod);
      }
  }
  
  function renderDaySwitch(day, startDate) {
    //add code here if day of week has to be adjusted to previous or next day depending on the GMT adjustment

    switch(day) {
      case 1:
        return 'Monday';
      case 2:
          return 'Tuesday';
      case 3:
          return 'Wednesday';
      case 4:
        return 'Thursday';
      case 5:
          return 'Friday';
      case 6:
          return 'Saturday';
      case 7:
          return 'Sunday';
      default:
        return 'Undefined Day of Week';
    }
  }

  function addComma(index, length){
    if(index < (length - 1)){
      return ", ";
    }
    else {
      return "";
    }
  }
  
  
  //console.log("Programs: " + JSON.stringify(programsAvailable));
  return (
    <Page title="Scheduled Live Synchronous Online Classes on Zoom">
      <SEO title="Scheduled Live Synchronous Online Classes on Zoom" />
      {classes.map((c, index) => {
        return (
            <div>
                <div>Class Number: {c.classNumber} </div>
                <div>Course:&nbsp; 
                  <Link to={ "/programs/tracks/courses/" + c.course.courseNumber}>
                          {c.course.courseNumber + " " + c.course.title}
                  </Link>
                </div>
                <div>
                  Quarter Credits: &nbsp; 
                  {c.quarterCredits} 
                </div>
                <div>
                  Class Start Date: &nbsp; 
                  {convertToLocalDatetime(c.startDate)} 
                </div>
                <div>
                  Class End Date: &nbsp; 
                  {convertToLocalDatetime(c.endDate)} 
                </div>
                <div>
                  Class Days: &nbsp; 
                  {c.childrenContentfulClassDaysJsonNode.map((d, i) => {
                      return (
                        <span>
                          <span>{renderDaySwitch(d.content, c.startDate)}</span>
                          <span>{addComma(i, c.childrenContentfulClassDaysJsonNode.length)}</span>
                        </span>
                      )
                  })}
                </div>
                <div>
                  Class Time: &nbsp; 
                  {covertToLocalTime(c.childContentfulClassStartTimeJsonNode, c.startDate)} 
                </div>
                <div>Instructors:&nbsp; 
                  {
                     c.instructors.map((instruct) => {
                      return (<span><Link to={ "/instructors/" + instruct.slug}>
                      {instruct.name}
                      </Link>&nbsp;</span>
                      )
                     })
                  }
                  
                </div>
                <br/>
                <br/>
            </div>
        )
      })}
      
    </Page>
  );
};



export default withRoot(Programs);