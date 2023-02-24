import React from 'react'
import "../styles.css"

const LeaderBoard = () => {
  return (
      <div className='leaderboard'>
    <h1>
        LeaderBoard
    </h1>
    <ol>
        <li>
            <mark>Jerry Wood</mark>
            <small>315</small>
        </li>
        <li>
            <mark>Brandon Barnes</mark>
            <small>301</small>
        </li>
        <li>
            <mark>Raymond Knight</mark>
            <small>292</small>
        </li>
        <li>
            <mark>Trevor McCormick</mark>
            <small>245</small>
        </li>
        <li>
            <mark>Andrew Fox</mark>
            <small>203</small>
        </li>
    </ol>
</div>
  )
}

export default LeaderBoard