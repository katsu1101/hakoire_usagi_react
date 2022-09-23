import usagi from '../data/usagi.json'
import box from '../data/box.json'
import evolution from '../data/evolution.json'
import { UsagiImage } from '../assets/img/UsagiImage'
import { BoxInterface } from '../interface/BoxInterface'
import { UsagiInterface } from '../interface/UsagiInterface'
import { EvolutionInterface } from '../interface/EvolutionInterface'

const getUsagiName = (no: string) => {
  const u = usagi.find((u) => u.no === no)
  return u ? u.name : '???'
}
const NextUsagiList = (no: string) => {
  const e = evolution.find((e: EvolutionInterface) => e.no === no)
  return e ? e.to : []
}
// UsagiImage
const UsagiItem = (props: { usagi: UsagiInterface }) => {
  const usagiImage = UsagiImage(props.usagi.no)
  const boxList = box.map((b: BoxInterface) => {
    return b.usage?.indexOf(props.usagi.no) !== -1 ? b.name : null
  })
  const nextUsagiList = NextUsagiList(props.usagi.no)
  return (
    <>
      <tr>
        <th>{props.usagi.name}</th>
        <td>{props.usagi.no}</td>
        <td>
          {usagiImage === '' ? (
            <></>
          ) : (
            <img alt={props.usagi.name} className="usagi" src={usagiImage} />
          )}
        </td>
        <td>
          {boxList.map((boxName) =>
            boxName ? (
              <>
                {boxName}
                <br />
              </>
            ) : (
              <></>
            ),
          )}
        </td>
        <td>
          {nextUsagiList.map((usagiNo: string) => (
            <>
              {usagiNo}. {getUsagiName(usagiNo)}
              <br />
            </>
          ))}
        </td>
      </tr>
    </>
  )
}
export const UsagiList = () => {
  return (
    <>
      <h1>箱入れうさぎ攻略・うさぎ一覧</h1>
      <a href="/">TOP</a>／うさぎ一覧
      <h2>うさぎ一覧</h2>
      <table className="tbl-r02">
        <thead>
          <tr>
            <th>No.</th>
            <th>名前</th>
            <th>画像</th>
            <th>出現場所</th>
            <th>進化先</th>
          </tr>
        </thead>
        <tbody>
          {usagi.map((u: UsagiInterface) => {
            return <UsagiItem usagi={u} />
          })}
        </tbody>
      </table>
    </>
  )
}
