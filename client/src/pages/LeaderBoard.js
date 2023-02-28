import React from 'react'
// import "../styles.css"
import classes from "./Leaderboard.module.scss"


const LeaderBoard = () => {
  return (
    <div className={classes["leaderboard"]}>
        <table>
            <thead>
                <tr>
                    <td>
                      Position
                    </td>
                    <td>
                        Player
                    </td>
                    <td>
                        Score
                    </td>
                </tr>
                <hr></hr>
            </thead>
            <tbody>
                <tr>
                    <td className={classes["winner"]}>1</td>
                    {/* <td><img src="images/User1.jpg"/><p> Jose Brag</p></td> */}
                    <td>239</td>
                    <td>12.54</td>
                </tr>
                
                <tr>
                    <td className={classes["runner-up"]}>2</td>
                    {/* <td><img src="images/User2.jpg"/><p> Lily Simons</p></td> */}
                    <td>209</td>
                    <td>10.2</td>
                </tr>
                
                <tr>
                    <td className={classes["second-runner-up"]}>3</td>
                    {/* <td><img src="images/User3.jpg"/><p> Tom Higgle</p></td> */}
                    <td>154</td>
                    <td>8.4</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default LeaderBoard