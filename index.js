var slugster = function (text, separator) {
  // var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "-";
  if (!text) return null; 
  if (!separator) {
    separator = '-';
  }
  
  // initial cleanup:
  text = text.toString() // to string
    .toLowerCase() // to lowercase
    .trim(); // remove empty spaces from begining and/or end

  // special characters declaration:
  var sets = [
    {
      to: "a",
      from: "[ÀÁÂÃÄÅÆĀĂĄẠẢẤẦẨẪẬẮẰẲẴẶ]"
    }, {
      to: "c",
      from: "[ÇĆĈČ]"
    }, {
      to: "d",
      from: "[ÐĎĐÞ]"
    }, {
      to: "e",
      from: "[ÈÉÊËĒĔĖĘĚẸẺẼẾỀỂỄỆ]"
    }, {
      to: "g",
      from: "[ĜĞĢǴ]"
    }, {
      to: "h",
      from: "[ĤḦ]"
    }, {
      to: "i",
      from: "[ÌÍÎÏĨĪĮİỈỊ]"
    }, {
      to: "j",
      from: "[Ĵ]"
    }, {
      to: "ij",
      from: "[Ĳ]"
    }, {
      to: "k",
      from: "[Ķ]"
    }, {
      to: "l",
      from: "[ĹĻĽŁ]"
    }, {
      to: "m",
      from: "[Ḿ]"
    }, {
      to: "n",
      from: "[ÑŃŅŇ]"
    }, {
      to: "o",
      from: "[ÒÓÔÕÖØŌŎŐỌỎỐỒỔỖỘỚỜỞỠỢǪǬƠ]"
    }, {
      to: "oe",
      from: "[Œ]"
    }, {
      to: "p",
      from: "[ṕ]"
    }, {
      to: "r",
      from: "[ŔŖŘ]"
    }, {
      to: "s",
      from: "[ßŚŜŞŠ]"
    }, {
      to: "t",
      from: "[ŢŤ]"
    }, {
      to: "u",
      from: "[ÙÚÛÜŨŪŬŮŰŲỤỦỨỪỬỮỰƯ]"
    }, {
      to: "w",
      from: "[ẂŴẀẄ]"
    }, {
      to: "x",
      from: "[ẍ]"
    }, {
      to: "y",
      from: "[ÝŶŸỲỴỶỸ]"
    }, {
      to: "z",
      from: "[ŹŻŽ]"
    }, {
      to: "-",
      from: "[·/_,:;']"
    }
  ]; 
  
  // perform special characters replacement:
  sets.map(function (set) {
    return text = text.replace(new RegExp(set.from, "gi"), set.to);
  });
  
  // slugify:
  text = text.replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text

  // change separator if passed as second argument:
  separator && (text = text.replace(/-/g, separator));
  return text;
};

module.exports = slugster;