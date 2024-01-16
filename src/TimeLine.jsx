import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import React from 'react';
import "./TimeLine.css";
import Text from './Text';
function TimeLine()
{

return(
    <>
   <section id='about'>
    <h1 className='education'><Text>Education</Text></h1>
   <Timeline className="time" lineColor={'#c770f0'}>
  <TimelineItem
    key="001"
    dateText="June 2019"
    dateInnerStyle={{ background: 'white', color: 'black' }}
    bodyContainerStyle={{
      className:'content',
      background: 'white',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
    style={{ color: '#B8B8FF' }}
  >
    <Text>
    <h3><i>Class X</i></h3>
    <h4>G K Shetty Vivekanada Vidyalaya Senior School</h4>
    <p>
    I successfully completed my Higher Secondary Certificate with a score of 97% at GK Shetty Vivekananda Vidyalaya Senior Secondary School, located in Ambattur, Chennai 600053. The rigorous academic program not only enhanced my knowledge but also developed my critical thinking and problem-solving skills. I am proud of my academic accomplishments and look forward to applying the knowledge and skills gained in my future endeavors.    </p>
    <p>
      
    </p>
    </Text>
    
  </TimelineItem>
  <TimelineItem
    key="002"
    dateText="June 2021"
    dateInnerStyle={{ background: '#B8B8FF', color: 'black' }}
    bodyContainerStyle={{
      className:'content',
      background: '#B8B8FF',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
    <Text>
    <h3 style={{ color: 'black' }}><i>Class XII</i></h3>
    <h4 style={{ color: 'black' }}>G K Shetty Vivekanada Vidyalaya Senior School</h4>
    <p>
    I have achieved a commendable score of 94% in my Secondary School Leaving Certificate at GK Shetty Vivekananda Vidyalaya Senior Secondary School, situated in Ambattur, Chennai 600053. The challenging academic curriculum not only enriched my understanding but also fostered the growth of my critical thinking and problem-solving abilities. I take great pride in my academic achievements and eagerly anticipate utilizing the knowledge and skills acquired in my future pursuits."
    </p>
    </Text>
    
  </TimelineItem>
  <TimelineItem
    key="003"
    dateText="Oct 2021-Present"
    dateInnerStyle={{ background: 'white', color: 'black' }}
    bodyContainerStyle={{
      className:'content',
      background: 'white',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
    style={{ color: '#B8B8FF' }}
  >
    <Text>
    <h3><i>Under Graduation</i></h3>
    <h4>Rajalakshmi Engineering College</h4>
    <p>
    I am currently pursuing my Bachelor of Engineering (BE) in Computer Science and Engineering at Rajalakshmi Engineering College, located in Thandalam, Chennai. Engaging in this program has not only deepened my understanding of computer science concepts but has also provided me with practical insights into the field. I am enthusiastic about further honing my skills and knowledge in this dynamic and ever-evolving discipline.    </p>
      
    </Text>
    
  </TimelineItem>
  
  </Timeline>
   </section>

</>
)
    }

    export default TimeLine;