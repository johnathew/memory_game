import { forwardRef } from "react"
import styles from "./Won.module.css"

const WonModal = forwardRef<HTMLDialogElement>(function WonModal(_, ref) {

    return (
        <dialog ref={ref}>
            <form method="dialog" className={styles.dialogForm}>
                <button>&#9932;</button>
                <p>You did it! You completed one of the most technologically complex puzzles of this generation.
                    To view the code that brought you this magnificent, beautiful, and elegant memory game please click the link below.
                </p>
            </form>
            <div className={styles.extLinks}>
                <a href="https://github.com/johnathew/memory_game" target="_blank">
                    <button>Code</button>
                </a>
                <a href="https://jaksresume.netlify.app/" target="_blank">
                    <button>Portfolio</button>
                </a>
            </div>
        </dialog>

    )

})

export default WonModal