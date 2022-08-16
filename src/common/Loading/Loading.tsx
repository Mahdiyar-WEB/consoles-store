import loading from "../../assets/images/loading.svg";
import styles from "./loading.module.css";

const Loading = ()=>{
    return(
        <div className={styles.container}>
            <img src={loading} alt="loading" />
        </div>
    )
}

export default Loading;