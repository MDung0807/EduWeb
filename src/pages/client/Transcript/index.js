import ItemTranscript from "../../../components/ItemTranscript";
import React from "react"; // Make sure to import React
const hisTest = [
    {hisId: 1, firstName: 'Do', lastName: 'Dung', testId: 1, testName: 'test 1', score: 8, timeInTest: 60 , time: "12/12/2020"},
    {hisId: 2, firstName: 'Do', lastName: 'Dung', testId: 2, testName: 'test 2', score: 8, timeInTest: 60 , time: "12/12/2020"},
    {hisId: 3, firstName: 'Do', lastName: 'Dung', testId: 3, testName: 'test 3', score: 8, timeInTest: 60 , time: "12/12/2020"},
    {hisId: 4, firstName: 'Do', lastName: 'Dung', testId: 4, testName: 'test 4', score: 8, timeInTest: 60 , time: "12/12/2020"},
    {hisId: 5, firstName: 'Do', lastName: 'Dung', testId: 5, testName: 'test 5', score: 8, timeInTest: 60 , time: "12/12/2020"},
    {hisId: 6, firstName: 'Do', lastName: 'Dung', testId: 6, testName: 'test 6', score: 8, timeInTest: 60 , time: "12/12/2020"},
    {hisId: 7, firstName: 'Do', lastName: 'Dung', testId: 7, testName: 'test 7', score: 8, timeInTest: 60 , time: "12/12/2020"},
    {hisId: 8, firstName: 'Do', lastName: 'Dung', testId: 8, testName: 'test 8', score: 8, timeInTest: 60 , time: "12/12/2020"},

]

export default function Transcript (){
    return (
        <div className="history-test">
            {hisTest.map((item) => (
            <ItemTranscript key={item.hisId} item={item}/>))}
        </div>
    )
}