export const GetFirstParaFromRichText = (text) => {
  const index1 = text.indexOf("&nbsp;");
  const index2 = text.indexOf("<br>");
  let para = "";
  para = text.replaceAll("<p>", "");
  para = para.replaceAll("</p>", "");
  if (index1 === -1 && index2 === -1) {
    return text;
  } else if (index1 === -1) {
    return para.split("<br>")?.[0];
  } else if (index2 === -1) {
    return para.split("&nbsp;")?.[0];
  } else {
    if (index1 < index2) {
      return para.split("&nbsp;")?.[0];
    } else {
      return para.split("<br>")?.[0];
    }
  }
  return text;
};

export const stringToUrl = (str) => {
  return str.replaceAll(".", "").replaceAll(" ", "-").toLowerCase();
};
