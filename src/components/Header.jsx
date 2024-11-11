import styles from "./bubble.module.css";

export default function Header() {
    return (
        <h2 className="text-center text-5xl font-thin text-indigo-300 mt-10  pt-5">
            {"Github User Finder".split("").map((child, idx) => (
                <span className={styles.hoverText} key={idx}>
                    {child}
                </span>
            ))}
        </h2>
    )
}
