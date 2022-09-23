import { Link } from 'react-router-dom'

export const Index = () => {
  return (
    <>
      <h1>箱入れうさぎ攻略</h1>
      <ul>
        <li>
          <a href="https://mariais.jp/">公式サイト</a>
        </li>
      </ul>
      <h2>攻略</h2>
      <ul>
        <li>
          <Link to="usagi">うさぎ一覧</Link>
        </li>
        <li>
          <Link to="box">箱一覧</Link>
        </li>
        <li style={{ marginTop: 15 }}>
          <Link to="evolution">進化ツリー</Link>
        </li>
      </ul>
    </>
  )
}
