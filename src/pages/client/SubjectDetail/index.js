import { useParams } from 'react-router-dom'

export default function SubjectDetail () {
    
const {subjectId} = useParams();

    return (
        <div>
            {console.log(subjectId)}
            <h1>subject detail</h1></div>
    )
}