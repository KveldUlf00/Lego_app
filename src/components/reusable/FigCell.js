import PropTypes from "prop-types";

const FigCell = ({
  active,
  data,
  setSelected,
  staticMode,
  title,
  btn,
  parts,
}) => {
  console.log(parts);

  return (
    <div
      className={`figure ${active ? "active" : ""} ${
        staticMode ? "noClickable" : ""
      }`}
      onClick={staticMode ? undefined : () => setSelected(data)}
    >
      {title ? <h1>{title}</h1> : ""}
      <div className="imgBox">
        <img
          src={
            data.set_img_url
              ? data.set_img_url
              : "https://cdn.rebrickable.com/media/parts/elements/362624.jpg"
          }
          alt={data.name}
        />
      </div>
      <p className="name">{data.name}</p>
      {!staticMode && (
        <a
          href={data.set_url}
          onClick={() => setSelected({})}
          target="_blank"
          rel="noreferrer"
        >
          Show details
        </a>
      )}
      {parts.length > 0 && (
        <div className="partsContainer">
          {parts.map((part) => (
            <div className="partsBox" key={`key-${part.name}`}>
              <div className="image">
                <img src={part.part_img_url} alt={part.name} />
              </div>
              <div className="content">
                <span>{part.name}</span>
                <span>{part.part_num}</span>
              </div>
            </div>
          ))}
        </div>
      )}
      {staticMode ? <div className="btnBox">{btn}</div> : ""}
    </div>
  );
};

FigCell.propTypes = {
  active: PropTypes.bool,
  data: PropTypes.object.isRequired,
  setSelected: PropTypes.func,
  staticMode: PropTypes.bool,
  title: PropTypes.string,
  btn: PropTypes.object,
  parts: PropTypes.array,
};

FigCell.defaultProps = {
  active: false,
  setSelected: () => {},
  staticMode: false,
  title: "",
  btn: {},
  parts: [],
};

export default FigCell;
