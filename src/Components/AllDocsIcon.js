import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import StrikethroughSIcon from "@mui/icons-material/StrikethroughS";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatIndentDecreaseIcon from "@mui/icons-material/FormatIndentDecrease";
import FormatIndentIncreaseIcon from "@mui/icons-material/FormatIndentIncrease";

import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";

export const AllIcons = [
  {
    Icons: <FormatBoldIcon />,
    action: "bold",
  },
  {
    Icons: <FormatItalicIcon />,
    action: "italic",
  },
  {
    Icons: <FormatUnderlinedIcon />,
    action: "underline",
  },
  {
    Icons: <StrikethroughSIcon />,
    action: "strikeThrough",
  },
  {
    Icons: <FormatListBulletedIcon />,
    action: "InsertUnorderedList",
  },
  {
    Icons: <FormatListNumberedIcon />,
    action: "insertOrderedList",
  },
  {
    Icons: <FormatAlignLeftIcon />,
    action: "justifyLeft",
  },
  {
    Icons: <FormatAlignJustifyIcon />,
    action: "justifyCenter",
  },
  {
    Icons: <FormatAlignRightIcon />,
    action: "justifyRight",
  },
  {
    Icons: <UndoIcon />,
    action: "undo",
  },
  {
    Icons: <RedoIcon />,
    action: "redo",
  },
  {
    Icons: <FormatIndentDecreaseIcon />,
    action: "outdent",
  },
  {
    Icons: <FormatIndentIncreaseIcon />,
    action: "indent",
  },
];

export const emojiList = [
  {
    icon: "Smile",
    value: "&#128514",
  },
  {
    icon: "Thumbs Up",
    value: "&#128514",
  },
  {
    icon: "Thumbs Down",
    value: "&#128514",
  },
  {
    icon: "Winking Face",
    value: "&#128521",
  },
];

export const fontFamilyList = [
  "serif",
  "sans-serif",
  "monospace",
  "cursive",
  "fantasy",
  "system-ui",
  "ui-serif",
  "ui-sans-serif",
  "ui-monospace",
  "ui-rounded",
  "emoji",
  "math",
  "fangsong",
  "Georgia",
  "Times New Roman",
  "Impact",
];

export const fontSizeList = [1, 2, 3, 4, 5, 6, 7];
