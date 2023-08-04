export function ParseDMS(input: string) {
  var parts = input.split(/[^\d\w]+/);
  var lat = ConvertDMSToDD(parts[0], parts[1], parts[2], parts[3]);
  var lng = ConvertDMSToDD(parts[4], parts[5], parts[6], parts[7]);
  return { lat, lng };
}

function ConvertDMSToDD(
  degrees = "0",
  minutes = "0",
  seconds = "0",
  direction = "N"
) {
  var dd = Number(degrees) + Number(minutes) / 60 + Number(seconds) / (60 * 60);

  if (direction == "S" || direction == "W") {
    dd = dd * -1;
  } // Don't do anything for N or E
  return dd;
}
