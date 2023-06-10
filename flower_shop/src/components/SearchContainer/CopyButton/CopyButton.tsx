import copy_icon from "../../../assets/icon_copy.svg";

function CopyButton() {
  return (
    <div className="copy_button">
      <img src={copy_icon} className="copy_icon" />
    </div>
  );
}

export default CopyButton;
