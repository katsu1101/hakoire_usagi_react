import imgUmi from './box/うみ.png'
import imgOunoma from './box/おうのま.png'
import imgObakeyasiki from './box/おばけやしき.png'
import imgOffice from './box/おふぃす.png'
import imgKaitei from './box/かいてい.png'
import imgKaraoke from './box/からおけ.png'
import imgGirly from './box/がーりー.png'
import imgKitiLeft from './box/きち（ひだり）.png'
import imgCamp from './box/きゃんぷ.png'
import imgKodomoBeya from './box/こどもべや.png'
import imgSetugen from './box/せつげん.png'
import imgSentou from './box/せんとう.png'
import imgZen from './box/ぜん.png'
import imgSougen from './box/そうげん.png'
import imgDanro from './box/だんろ.png'
import imgChukaya from './box/ちゅうかや.png'
import imgHatsumoude from './box/はつもうで.png'
import imgFutuunoHeya from './box/ふつうのへや.png'
import imgPool from './box/ぷーる.png'
import imgBokujou from './box/ぼくじょう.png'
import imgBoti from './box/ぼち.png'
import imgMarchen from './box/めるへん.png'
import imgModern from './box/もだん.png'
import imgMori from './box/もり.png'
import imgYorunoJinja from './box/よるのじんじゃ.png'
import imgYorunoMori from './box/よるのもり.png'
import imgWashitsu from './box/わしつ.png'
export const BoxImage = (key: string) => {
  switch (key) {
    case 'うみ':
      return imgUmi
    case 'おうのま':
      return imgOunoma
    case 'おばけやしき':
      return imgObakeyasiki
    case 'おふぃす':
      return imgOffice
    case 'かいてい':
      return imgKaitei
    case 'からおけ':
      return imgKaraoke
    case 'がーりー':
      return imgGirly
    case 'きち（ひだり）':
      return imgKitiLeft
    case 'きゃんぷ':
      return imgCamp
    case 'こどもべや':
      return imgKodomoBeya
    case 'せつげん':
      return imgSetugen
    case 'せんとう':
      return imgSentou
    case 'ぜん':
      return imgZen
    case 'そうげん':
      return imgSougen
    case 'だんろ':
      return imgDanro
    case 'ちゅうかや':
      return imgChukaya
    case 'はつもうで':
      return imgHatsumoude
    case 'ふつうのへや':
      return imgFutuunoHeya
    case 'ぷーる':
      return imgPool
    case 'ぼくじょう':
      return imgBokujou
    case 'ぼち':
      return imgBoti
    case 'めるへん':
      return imgMarchen
    case 'もだん':
      return imgModern
    case 'もり':
      return imgMori
    case 'よるのじんじゃ':
      return imgYorunoJinja
    case 'よるのもり':
      return imgYorunoMori
    case 'わしつ':
      return imgWashitsu
    default:
      return ''
  }
}
