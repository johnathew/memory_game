import { forwardRef } from "react"
import styles from "./Won.module.css"

const WonModal = forwardRef<HTMLDialogElement, {}>(function WonModal(_, ref) {

    return (
        <dialog ref={ref} className={styles.win}>
            <form method="dialog" className={styles.dialogForm}>
                <button>X</button>
                <p>You did it! Congratulations, if you are reading this message, you did it. You completed one of the most technologically complex puzzles of this generation. To view the code that brought you this magnificent, beautiful, amazing video game, please click here. </p>
            </form>
        </dialog>

    )

})

export default WonModal