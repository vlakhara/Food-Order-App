import style from "./Loading.module.css";
const Loading = () => {
  return (
    <div className={style.content}>
      <div className={style.dot}></div>
      <div className={style.dot}></div>
      <div className={style.dot}></div>
      <div className={style.dot}></div>
      <div className={style.dot}></div>
      <div className={style.dot}></div>
      <div className={style.dot}></div>
      <div className={style.dot}></div>
    </div>
  );
};

export default Loading;
