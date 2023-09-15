import { useState } from "react";
function TodoForm(props) {
  
    const [newActivity, setNewActivity] = useState('');
    function handleSubmit(e) {
        e.preventDefault()
        if (newActivity=== "") return
        props.onSubmit(newActivity)
        setNewActivity('')
      } 
    return(
    <>
    <form onSubmit={handleSubmit} className="new-activity-form">
      <div className="form-row">
        <label htmlFor="activity">New Item</label>
        <input type="text" id="activity" value={newActivity} onChange={e => setNewActivity(e.target.value)}></input>
      </div>
      <button className="btn">Add</button>
    </form>
    </>)
}
export {TodoForm}