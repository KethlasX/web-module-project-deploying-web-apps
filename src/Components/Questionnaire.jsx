import './Questionnaire.css'

const Questionnaire = () => {
 return (
  <div className='container'>
   <h1>Questionnaire</h1>
   <hr />
   <h2>Are you enjoying the site?</h2>
   <div className='buttons'>
    <button>Yes</button>
    <button className='wiggly'>No</button>
   </div>
  </div>
 )
}

export default Questionnaire