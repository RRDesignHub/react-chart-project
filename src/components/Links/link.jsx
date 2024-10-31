export default function SingleLink({link}) {
 const {path, name} = link;
  return (
    <>
      <li>
        <a className="text-slate-800" href={path}>{name}</a>
      </li>
    </>
  )
}