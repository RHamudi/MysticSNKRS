export default function CardInfos(props: {
  icon: JSX.Element;
  title: string;
  text: string;
}) {
  return (
    <div className="flex">
      <span>{props.icon}</span>
      <div className="w-56">
        <p className="font-medium">{props.title}</p>
        <p>{props.text}</p>
      </div>
    </div>
  );
}
