import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max))

const App = (props) => {
  const [selected, setSelected] = useState(getRandomInt(props.anecdotes.length))
  const [votes, setVotes] = useState(new Array(props.anecdotes.length).fill(0))
  
  const highestVoteIndex = () => {
    let max = votes[0]
    let maxIndex = 0

    for (let i = 1; i < votes.length; i++) {
      if (votes[i] > max) {
        max = votes[i]
        maxIndex = i
      }
    }
    return maxIndex
  }
  const handleVoteClick = () => {
    const copyVotes = [...votes]
    copyVotes[selected] += 1
    setVotes(copyVotes)
  }
  const handleSelectedClick = () => setSelected(getRandomInt(props.anecdotes.length))

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVoteClick}>Vote!</button>
      <button onClick={handleSelectedClick}>next anecdote</button>

      <h1>Anecdote with most votes</h1>
      <p>{props.anecdotes[highestVoteIndex()]}</p>
      <p>has {votes[highestVoteIndex()]} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)