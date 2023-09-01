function formatTimeAgo(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  if (hours > 0) {
    if (minutes > 0) {
      return `${hours}hrs ${minutes}min ago`;
    } else {
      return `${hours}hrs ago`;
    }
  } else if (minutes > 0) {
    return `${minutes}min ago`;
  } else {
    return "0";
  }
}
const mytime = 0;
const formattedTime = formatTimeAgo(mytime);
console.log(formattedTime);
