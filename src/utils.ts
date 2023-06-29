export default function pluralize(noun = "", count = 0) {
  if (!noun) {
    return "";
  }
  if (count === 1) {
    return noun;
  } else if (noun.endsWith("ch") || noun.endsWith("sh")) {
    return noun + "es";
  } else {
    return noun + "s";
  }
}
