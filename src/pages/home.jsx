import styles from "./home.module.scss";

export default function Page() {
  return (
    <main className={styles.Main}>
      <header>
        <form className={styles.Form}>
          <input
            type="search"
            name="search"
            id="search-movies"
            className={styles.Input}
            placeholder="search for a movie"
          />
          <button type="submit" className={styles.Button}>
            Search
          </button>
        </form>
      </header>

      {/* TODO: fix image size */}
      <ul className={styles.List}>
        <li className={styles.Card} tabIndex={0}>
          <img
            src="https://assets.mubicdn.net/images/notebook/post_images/22267/images-w1400.jpg?1474980339"
            alt=""
            className={styles.CardImage}
          />
          <strong>Moonlight</strong>
          <a href="#" className={styles.CardFooter}>
            See more <span>&#8594;</span>
          </a>
        </li>
        <li className={styles.Card} tabIndex={0}>
          <img
            src="https://static.displate.com/280x392/displate/2023-04-19/a10b29a74c11f350368682f21b346321_0bf3703beff1d1bd9df25ab4a41755c8.jpg"
            alt=""
            className={styles.CardImage}
          />
          <strong>Star wars VII</strong>
          <a href="#" className={styles.CardFooter}>
            See more <span>&#8594;</span>
          </a>
        </li>
        <li className={styles.Card} tabIndex={0}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-2rGs5gborzcsiUmRWppwMP4sPo58CeVrnA&s"
            alt=""
            className={styles.CardImage}
          />
          <strong>Matrix</strong>
          <a href="#" className={styles.CardFooter}>
            See more <span>&#8594;</span>
          </a>
        </li>
      </ul>
    </main>
  );
}
