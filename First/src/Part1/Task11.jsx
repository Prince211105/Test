import React from "react";
import { useState } from "react";
function Task11() {

    const Statisticsline = ({text,value}) => {
        return(
            <div>
                <p>{text} : {value}</p>
            </div>
        )
    }

    const Statistics = ({good,neutral,bad,all}) => {
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Statistic</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Statisticsline text={'Good'} value={good}/>
                        <Statisticsline text={'Neutral'} value={neutral}/>
                        <Statisticsline text={'Bad'} value={bad}/>
                        <Statisticsline text={'Total'} value={all}/> 
                        <Statisticsline text={'Average'} value={all === 0 ? 0 : (good-bad)/all}/>
                        <Statisticsline text={'Positive Percentage'} value={all === 0 ? 0 : (good/all) * 100 + '%'}/>
                    </tbody>
                </table>
            </div>
        )
    }

  const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [all, setAll] = useState(0);

    const Button = ({ handleclick, text }) => {
      return (
        <div>
          <button onClick={handleclick}>{text}</button>
        </div>
      );
    };

    const handlegoodclick = () => {
        setGood(good + 1);
        setAll(all + 1);
      };
      const handleneutralclick = () => {
        setNeutral(neutral + 1);
        setAll(all + 1);
      };
      const handlebadclick = () => {
        setBad(bad + 1);
        setAll(all + 1);
      };

    return(
        <div>
            <h2>Give Feedback</h2>
            <Button handleclick={handlegoodclick} text={'good'}/>
            <Button handleclick={handleneutralclick} text={'neutral'}/>
            <Button handleclick={handlebadclick} text={'bad'}/>

            <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
        </div>
    )
  };
  return <div><App/></div>;
}

export default Task11;
