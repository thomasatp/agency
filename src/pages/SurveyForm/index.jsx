import { useParams, Link } from 'react-router-dom'

function Survey() {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const previousQuestionNumber =
    questionNumberInt > 1 ? questionNumberInt - 1 : 1
  const nextQuestionNumber = questionNumberInt < 10 ? questionNumberInt + 1 : 10

  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>Question {questionNumberInt}</h2>
      {questionNumberInt > 1 && (
        <Link to={`/survey/${previousQuestionNumber}`}>Précédent</Link>
      )}
      {questionNumber >= 10 ? (
        <Link to="/results">Results</Link>
      ) : (
        <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
      )}
    </div>
  )
}

export default Survey
