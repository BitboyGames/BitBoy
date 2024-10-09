import axios from 'axios'

const before = () => {
  return axios.get('https://assets.ordz.games/rush/download-bitmap/before.text')
}

const after = () => {
  return axios.get('https://assets.ordz.games/rush/download-bitmap/after.text')
}

const preview_before = () => {
  return axios.get('https://assets.ordz.games/rush/download-bitmap/preview-before.text')
}

const preview_after = () => {
  return axios.get('https://assets.ordz.games/rush/download-bitmap/preview-after.text')
}

const oss_info = () => {
  return axios.get('https://api.ordz.games/btc_nft/v1/file_upload_token?marking=pfp')
}

export default {
  oss_info,
  before,
  after,
  preview_before,
  preview_after
}
