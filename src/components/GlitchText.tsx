import styles from "./GlitchText.module.css";

export default function GlitchText() {
  return (
    <div
      className={
        styles["glitch-wrapper"] +
        " w-full flex items-center justify-center text-center bg-transparent mb-8"
      }
    >
      <div
        className={
          styles.glitch +
          " font-extrabold text-3xl md:text-4xl tracking-wider text-center"
        }
        data-glitch="ŁUKASZ MOCZKODAN"
        style={{ color: "#000000" }}
      >
        ŁUKASZ <span className="text-[#000000]">MOCZKODAN</span>
      </div>
    </div>
  );
}
