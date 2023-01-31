import PropTypes from "prop-types";

const FigCell = ({ active, data, setSelected }) => {
  return (
    <div
      className={`figure ${active ? "active" : ""}`}
      onClick={() => setSelected(data)}
    >
      <div className="imgBox">
        <img src={data.set_img_url} alt={data.name} />
      </div>
      <p>{data.name}</p>
      <a
        href={data.set_url}
        onClick={() => setSelected({})}
        target="_blank"
        rel="noreferrer"
      >
        Show details
      </a>
    </div>
  );
};

FigCell.propTypes = {
  active: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
  setSelected: PropTypes.func.isRequired,
};

export default FigCell;
