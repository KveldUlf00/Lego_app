import PropTypes from "prop-types";

const FigCell = ({
  active,
  btn,
  data,
  parts,
  setSelected,
  staticMode,
  title,
}) => {
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
        {!data.set_img_url && (
          <span className="notFound">Photo not found.</span>
        )}
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
        <p className="partsLen">
          There are {parts.length} parts in this minifig:
        </p>
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
  btn: PropTypes.object,
  data: PropTypes.object.isRequired,
  parts: PropTypes.array,
  setSelected: PropTypes.func,
  staticMode: PropTypes.bool,
  title: PropTypes.string,
};

FigCell.defaultProps = {
  active: false,
  btn: {},
  parts: [],
  setSelected: () => {},
  staticMode: false,
  title: "",
};

export default FigCell;
