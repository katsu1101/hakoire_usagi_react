import box from './box.json'
import usagi from './usagi.json'
import { BoxImage } from '../assets/img/BoxImage'
import { BoxInterface, StatusInterface } from './BoxInterface'

const BoxStatus = (props: { status: StatusInterface }) => {
  return (
    <>
      {!!props.status.str ? (
        <>
          ちから {props.status.str}
          <br />
        </>
      ) : (
        <></>
      )}
      {!!props.status.vit ? (
        <>
          げんき {props.status.vit}
          <br />
        </>
      ) : (
        <></>
      )}
      {!!props.status.spd ? (
        <>
          はやさ {props.status.spd}
          <br />
        </>
      ) : (
        <></>
      )}
      {!!props.status.int ? (
        <>
          かしこさ {props.status.int}
          <br />
        </>
      ) : (
        <></>
      )}
      {!!props.status.dex ? (
        <>
          きようさ {props.status.dex}
          <br />
        </>
      ) : (
        <></>
      )}
      {!!props.status.cha ? (
        <>
          カリスマ {props.status.cha}
          <br />
        </>
      ) : (
        <></>
      )}
    </>
  )
}

const getUsagiName = (no: string) => {
  const u = usagi.find((u) => u.no === no)
  return u ? u.name : '???'
}
const BoxItem = (props: { box: BoxInterface }) => {
  const boxImage = BoxImage(props.box.name)
  return (
    <>
      <tr>
        <th>{props.box.name}</th>
        <td>
          {boxImage === '' ? (
            <></>
          ) : (
            <img alt={props.box.name} className="box" src={boxImage} />
          )}
        </td>
        <td>
          {props.box.usage ? (
            props.box.usage.map((u) => {
              return (
                <>
                  {u}. {getUsagiName(u)}
                  <br />
                </>
              )
            })
          ) : (
            <></>
          )}
        </td>
        <td>{props.box.coin}</td>
        <td></td>
        <td>
          {props.box.status ? <BoxStatus status={props.box.status} /> : <></>}
        </td>
      </tr>
    </>
  )
}

export const Box = () => {
  return (
    <>
      <h1>箱入れうさぎ攻略・箱一覧</h1>
      <a href="/">TOP</a>／箱一覧
      <table className="tbl-r02">
        <thead>
          <tr>
            <th>名前</th>
            <th>画像</th>
            <th>くるかも</th>
            <th>コイン</th>
            <th>クラフト</th>
            <th>ステータス</th>
          </tr>
        </thead>
        <tbody>
          {box.map((b: BoxInterface) => {
            return <BoxItem box={b} />
          })}
        </tbody>
      </table>
    </>
  )
}
