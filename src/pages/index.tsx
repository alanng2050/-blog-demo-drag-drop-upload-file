import { useState } from "react";
import classes from "./index.module.scss";
const Home = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [active, setActive] = useState(false);
  return (
    <div>
      <label
        onDragEnter={() => setActive(true)}
        onDragLeave={() => setActive(false)}
        className={`${classes.container} ${active ? classes.active : ""}`}
        onDrop={(evt) => {
          evt.preventDefault();
          setActive(false);
          setFiles((prev) => [...prev, ...evt.dataTransfer.files]);
        }}
        onDragOver={(evt) => {
          evt.preventDefault();
        }}
        htmlFor="upload-file"
      >
        Drop file here or click to browse
      </label>
      <input className={classes.input} id="upload-file" type="file" />

      <div className={classes.fileList}>
        {files.map((fi) => (
          <div key={fi.name}>
            {fi.name} - {Math.round(fi.size / 1024)}KB
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
