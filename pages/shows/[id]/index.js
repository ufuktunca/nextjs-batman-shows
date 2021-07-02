import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { setBatmanShowDetail } from "../../actions/showDetailAction";
import styles from "../../../styles/ShowDetail.module.scss";

function ShowDetail(props) {
  const router = useRouter();
  const { id } = router.query;
  const { setBatmanShowDetail, showDetail } = props;

  useEffect(() => {
    if (id !== undefined) {
      setBatmanShowDetail(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className={styles.showDetailCoverer}>
      <button
        className={styles.backButton}
        onClick={() => (window.location.href = "/")}
      >
        Back
      </button>
      <div className={styles.imageAndName}>
        <img src={showDetail.image.medium} height="400px" alt="show-cover" />
        <div className={styles.showName}>{showDetail.name}</div>
      </div>
      <div className={styles.showDetails}>
        <div className={styles.detail}>
          <b>Name:</b> {showDetail.name}
        </div>
        <div className={styles.detail}>
          <b>Rating:</b>{" "}
          {showDetail.rating.average ? showDetail.rating.average : "not rated"}
        </div>
        <div className={styles.detail}>
          <b>Premiered:</b> {showDetail.premiered}
        </div>
        <div className={styles.genres}>
          <b>Genres:</b>{" "}
          {showDetail.genres.map((genre, index) => (
            <div key={index + genre}> &nbsp;{genre}</div>
          ))}
        </div>
        <div className={styles.detail}>
          <b>Language:</b> {showDetail.language}
        </div>
        <div className={styles.detail}>
          <b>Summary:</b> {showDetail.summary}
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setBatmanShowDetail: (id) => {
    dispatch(setBatmanShowDetail(id));
  },
});

const mapStateToProps = (state) => ({
  showDetail: state.showDetail,
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowDetail);
