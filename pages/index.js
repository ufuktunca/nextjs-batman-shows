import { useEffect } from "react";
import styles from "../styles/Home.module.scss";
import { fetchBatmanShows } from "../actions/showsActions";
import { connect } from "react-redux";
import { getBatmanShows } from "../api/api";
import Image from "next/image";

function Home(props) {
  const { fetchBatmanShows, shows, batmanShows } = props;
  useEffect(() => {
    fetchBatmanShows(shows);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shows]);

  return (
    <div className={styles.page}>
      <div className={styles.showCoverer}>
        <div className={styles.showRow}>
          <h3 className={styles.titles}>Batman Show</h3>
          <h3 className={styles.titles}>Rating</h3>
          <div></div>
        </div>
        {batmanShows.map((show, index) => (
          <div key={index + show.show.name} className={styles.showRow}>
            <div className={styles.showImageAndName}>
              <Image
                src={show.show.image.medium}
                height="150px"
                width="150px"
                alt="show-covers"
              />
              <div>{show.show.name}</div>
            </div>
            <div className={styles.rating}>
              {show.show.rating.average
                ? show.show.rating.average
                : "not rated"}
            </div>
            <div className={styles.buttonPlace}>
              <button
                className={styles.detailButton}
                onClick={() =>
                  (window.location.href = "/shows/" + show.show.id)
                }
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await getBatmanShows();
  return { props: { shows: response } };
}

const mapDispatchToProps = (dispatch) => ({
  fetchBatmanShows: (data) => {
    dispatch(fetchBatmanShows(data));
  },
});

const mapStateToProps = (state) => ({
  batmanShows: state.shows,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
