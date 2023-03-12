import React, { useRef, useState } from "react";
import "./Googledocs.css";
import MapIcon from "./MapIcon";
import ImageIcon from "@mui/icons-material/Image";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import jsPDF from "jspdf";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import { emojiList, fontFamilyList, fontSizeList } from "./AllDocsIcon";
import FormatSizeIcon from "@mui/icons-material/FormatSize";

function Googledocs() {
  const [zoomLevel, setZoomLevel] = useState(100);
  const [fontSize, setFontSize] = useState("Font Size");

  const [emoji, setEmoji] = useState("0");
  const [fontName, setFontName] = useState("Font Style");
  const [color, setColor] = useState("#000000");
  const [higlightColor, setHiglightColor] = useState("#000000");

  function handleEmoji(e) {
    setEmoji(e.target.value);
    if (e.target.value === "Smile") {
      document.execCommand("insertHTML", false, "&#128514");
    } else if (e.target.value === "Thumbs Up") {
      document.execCommand("insertHTML", false, "&#128077");
    } else if (e.target.value === "Thumbs Down") {
      document.execCommand("insertHTML", false, "&#128078");
    } else if (e.target.value === "Winking Face") {
      document.execCommand("insertHTML", false, "&#128521");
    }
    console.log(e.target.value);
  }

  function handleFont(e) {
    setFontSize(e.target.value);
    document.execCommand("fontSize", false, e.target.value);
  }

  function handleFontStyle(e) {
    setFontName(e.target.value);
    document.execCommand("fontName", false, e.target.value);
    // console.log(e.target.value);
  }

  function handleColour(e) {
    setColor(e.target.value);
    // console.log(e.target.value);
    document.execCommand("foreColor", false, e.target.value);
  }

  function handleBackColorChange(e) {
    setHiglightColor(e.target.value);
    document.execCommand("backColor", false, e.target.value);
  }

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    const sheetContent = document.querySelector(".sheet");
    doc.text(sheetContent.innerText, 10, 10);
    doc.save("document.pdf");
  };


// Image Upload functionality

  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const img = document.createElement("img");
      img.src = reader.result;

      img.contentEditable = false;
      const range = window.getSelection().getRangeAt(0);
      range.insertNode(img);
      range.collapse(false);
    };
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };


  return (
    <div className="container">
      <div className="documentImg">
        <img
          style={{ width: "40px" }}
          src="https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png"
          alt=""
        />
        <text
          style={{
            color: "grey",
            fontSize: "18px",
            margin: "5px",
            fontWeight: "inherit",
          }}
        >
          Untitled document
        </text>
      </div>
      <div className="TopHeaderIcon">
        {/* zoom Functionality */}
        <select
          className="zoom"
          value={zoomLevel}
          onChange={(e) => setZoomLevel(parseInt(e.target.value))}
        >
          <option value={50}>50%</option>
          <option value={75}>75%</option>
          <option value={90}>90%</option>
          <option value={100}>100%</option>
          <option value={125}>125%</option>
          <option value={150}>150%</option>
          <option value={200}>200%</option>
        </select>
        <MapIcon />
        <div className="fontSize">
          <label htmlFor="fontSize">
            <span>
              <FormatSizeIcon />
            </span>
          </label>
          <select id="fontSize" onChange={handleFont}>
            <option>3</option>
            {fontSizeList.map((Size) => (
              <option key={Size}>{Size}</option>
            ))}
          </select>
        </div>
        {/* Emojii functionality */}
        <div className="Emoji">
          <select onChange={handleEmoji}>
            <option>Emoji</option>
            {emojiList.map((x, i) => (
              <option key={i}>{x.icon}</option>
            ))}
          </select>
        </div>
        {/* Fontstyle functionality */}
        <select
          className="font_style"
          id="fontStyle"
          onChange={handleFontStyle}
        >
          <option>{fontName}</option>
          {fontFamilyList.map((element) => (
            <option key={element}>{element}</option>
          ))}
        </select>
        {/* Fontstyle Color Functionality */}
        <button className="btnFormatecolor">
          <label htmlFor="color">
            <FormatColorTextIcon style={{ color: color }} />
          </label>
          <input
            className="colorInput1"
            id="color"
            type="color"
            value={color}
            onChange={handleColour}
          />
        </button>
        {/* Fontstyle backgroundcolor */}
        <button className="colorInput2">
          <label htmlFor="highlighColor">
            <AutoFixHighIcon style={{ zIndex: "4", color: higlightColor }} />
          </label>
          <input
            className="inputhigh"
            id="color"
            type="color"
            value={higlightColor}
            onChange={handleBackColorChange}
          />
        </button>
        <ImageIcon onClick={handleImageClick} className="imgicon" />
        &nbsp; &nbsp;
      </div>

      <div className="topsheet">
        <div
          className="sheet"
          contentEditable="true"
          style={{
            color: "black",
            // fontSize: `${fontSize}px`,
            transform: `scale(${zoomLevel / 100})`,
            marginTop:
              zoomLevel > 150
                ? "35rem"
                : zoomLevel > 125
                ? "20rem"
                : zoomLevel > 100
                ? "10rem"
                : "0",
          }}
        >
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageUpload}
            style={{ display: "none" }}
            value=""
            className="ImageContainer"
          />
          <div>
            {image ? (
              <img className="ImageContainer" src={image} alt="uploaded" />
            ) : (
              ""
            )}
          </div>


        </div>
      </div>
      <div className="downloadIcon">
        <ArrowCircleDownIcon
          onClick={handleDownloadPDF}
          style={{ color: "red" }}
        />
      </div>
    </div>
  );
}

export default Googledocs;
