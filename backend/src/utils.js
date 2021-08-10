

module.exports.timeBefore = (limits) => {
  let now = new Date();
  if (limits.minutes) now.setMinutes(now.getMinutes() - limits.minutes);
  if (limits.hours) now.setHours(now.getHours() - limits.hours);
  if (limits.days) now.setDate(now.getDate() - limits.days);
  if (limits.month) now.setMonth(now.getMonth() - limits.month);
  return new Date(now);
};

module.exports.passData = res => (err, data) => {
  if (err) {
    res.status(500);
    res.send(err);
  } else {
    res.status(200);
    res.send(data);
  }
};

module.exports.passDBData = next => (err, res) => {
  if (err) return next(err, null);
  if (res) {
    return next(null, res[0]);
  } else {
    return next(null, {});
  }
}