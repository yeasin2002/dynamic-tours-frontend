import styles from "./Loading.module.css";
export default function Loading() {
  return (
    <>
      <div className="flex justify-center items-center p-4 h-full">
        <div className={styles["lds-ripple"]}>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}
