import { forwardRef } from "react"
import styles from "./Won.module.css"

const WonModal = forwardRef<HTMLDialogElement>(function WonModal(_, ref) {

    return (
        <dialog ref={ref} aria-labelledby="dialog-title" aria-describedby="dialog-description">
            <form method="dialog" className={styles.dialogForm}>
                <button aria-label="Close">&#9932;</button>
                <p id="dialog-title">You did it!</p>
                <p id="dialog-description">
                    You completed one of the most technologically complex puzzles of this generation.
                    To view the code that brought you this magnificent, beautiful, and elegant memory game please click the link below.
                </p>
            </form>
            <div className={styles.extLinks}>
                <a href="https://github.com/johnathew/memory_game" target="_blank">
                    <button aria-label="View Code">Code</button>
                </a>
                <a href="https://jaksresume.netlify.app/" target="_blank">
                    <button aria-label="View Portfolio">Portfolio</button>
                </a>
            </div>
        </dialog>
    )

})

export default WonModal