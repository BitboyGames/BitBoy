import Cookies from 'js-cookie'

interface ComplementArrayProps {
  data: string[]
  x: number
  y: number
  content: string
}

export const complementArray = (options: ComplementArrayProps) => {
  let { data, x, y, content } = options

  if (y < data.length) {
    data = data.slice(0, y)
  }
  while (data.length < y) {
    data.push(Array(x).fill(content).join(''))
  }
  data = data.map(str => {
    if (x < str.length) {
      return str.slice(0, x)
    }

    if (str.length < x) {
      return (
        str +
        Array(x - str.length)
          .fill(content)
          .join('')
      )
    }
    return str
  })

  return data
}

export const isDev = process.env.NODE_ENV === 'development'

/**
 * generate uuid
 * @param
 * @returns
 */
export function uuid() {
  let d = new Date().getTime()
  if (window.performance && typeof window.performance.now === 'function') {
    d += performance.now()
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })
}

/**
 * create oss instance
 * @param data
 * @returns
 */
export const createOssInstance = (data: Record<string, any>) => {
  const { region, bucket_name, access_key_secret, access_key_id, security_token } = data
  // @ts-ignore
  return new window.OSS({
    region,
    bucket: bucket_name,
    accessKeySecret: access_key_secret,
    accessKeyId: access_key_id,
    stsToken: security_token
  })
}

/**
 * create  game iframe scale
 * @returns
 */
export const createGameIframeScale = () => {
  return `
    <style>
      html {
        width: 100%;
        position: relative;
        float: left;
      }
      body {
        background: #000;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, 0);
        width: 640px;
        height: 640px;
        margin: 0 auto;
        overflow: hidden;
        transform-origin: bottom center;
      }
      .game-content {
        width: 100%;
        height: 100%;
      }
    </style>
    <script>
      function onWindowResize() {
        const min = Math.min(window.innerWidth, window.innerHeight);
        document.documentElement.style.transform = 'scale(' + min / 640 + ')';
      }
      window.addEventListener("resize", onWindowResize, false);
      onWindowResize();
    <\/script>
  `
}

/**
 * create toogle game js
 * @returns
 */
export const createToogleGameJs = (): string => {
  return `
    <script>
      window.addEventListener('message', (event) => {
        document.querySelector('body').style.width = event.data ? '100vw' : '576px'
        document.querySelector('body').style['max-width'] = event.data ? '100vw' : '576px'
        document.querySelector('.game-content').style.width = event.data ? '100vw' : '576px'
        document.querySelector('.game-content').style['max-width'] = event.data ? '100vw' : '576px'
      });
    <\/script>
  `
}

const createEmojiCss = (option: any) => {
  const { data, emoji, selector } = option
  if (!emoji) return ''
  const v = `
    ${selector}::after {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      content: '${data}';
    }
  `
  return v.replace(/\\n/g, '')
}

const createBackgroundCss = (option: any) => {
  const { data, image } = option
  if (!image) return 'background: none;'
  const v = `
    background: none;
    background-image: var(${data});
    background-repeat: no-repeat;
    background-position: left top;
    background-size: contain;
  `
  return v.replace(/\\n/g, '')
}

/**
 * create player style
 * @param data
 * @returns
 */
export const generatePlayerStyle = (data: string) => {
  const is_emoji = isEmoji(data)

  const playerBg = createBackgroundCss({ data: `--player-bg`, image: !is_emoji })

  return `
    <style>
      :root{
        --player-color: #FF8819;
        --player-bg: url(${is_emoji ? '' : data});
      }
      .start-content .game .player {
        position: absolute;
        width: 15px !important;
        height: 15px !important;
        color: #fff;
        ${playerBg}
      }
      .wall-tips .play {
        width: 60px;
        height: 60px;
        top: -45px;
        ${playerBg}
      }
      ${createEmojiCss({ data, emoji: is_emoji, selector: '.start-content .game .player' })}
      ${createEmojiCss({ data, emoji: is_emoji, selector: '.wall-tips .play' })}
      .lost .player {
        filter: grayscale(100%);
        filter: gray;
        opacity: 0.5;
      }
    </style>
  `
}

/**
 * create coin style
 * @param data
 * @returns
 */
export const generateCoinStyle = (data: string) => {
  const is_emoji = isEmoji(data)
  return `
    <style>
      :root{
        --coin-bg: url(${is_emoji ? '' : data});
      }
      .coin {
        width: 15px !important;
        height: 15px !important;
        
        ${createBackgroundCss({ data: '--coin-bg', image: !is_emoji })}
      }
      ${createEmojiCss({ data, emoji: is_emoji, selector: '.coin' })}
    </style>
  `
}

/**
 * create game variable
 * @param data
 * @returns
 */
export const generateGameVariable = (data: any) => {
  const { level, avatar, title, subTitle, background } = data
  return `
    <script>
      window.custormLevel = '${title}';
      window.custormLevelName = '${subTitle}';
      window.inscriptionId = '';
      window.buildOptions = { player: ${avatar ? 1 : 0} }
      window.LEVELS = [[${level}]];
    <\/script>
  `
}

/**
 * url to base64
 */
export const urlToBase64 = async (url: string): Promise<string | ArrayBuffer | null> => {
  return new Promise(async resolve => {
    const response = await fetch(url)
    const blob = await response.blob()
    const reader = new FileReader()
    reader.readAsDataURL(blob)
    reader.onloadend = () => resolve(reader.result)
  })
}

/**
 * is base64 image
 * @param src
 * @returns
 */
export const isBase64Image = (src: string): boolean => {
  return src.startsWith('data:image')
}

/**
 * is emoji
 * @param input
 * @returns
 */
export const isEmoji = (input: string) => {
  if (!input) return false
  if (isBase64Image(input)) return false
  return /[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/gi.test(
    input
  )
}

/**
 * reset base64 image size
 * @param param0
 * @returns
 */
export const resizeBase64Image = (option: any) => {
  const { src, width, height } = option
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
      canvas.width = width
      canvas.height = height
      ctx.drawImage(img, 0, 0, width, height)
      const newSrc = canvas.toDataURL()
      canvas.remove()
      resolve(newSrc)
    }
    img.onerror = error => reject(error)
    img.src = src
  })
}

const cookies = Cookies.withAttributes({ path: '/', domain: '.bitboy.games' })

export { cookies }
