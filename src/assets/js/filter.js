export default {
  addressFilter: (val) => {
    if (val) {
      const front = val.slice(0, 4);
      const after = val.slice(-4, val.length);
      return `${front}......${after}`;
    }
    return ''
  }
}
