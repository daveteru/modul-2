interface BannerProps{
    message: string;
    name: string;
}

export default function Banner(props: BannerProps) {
  return <div>
    <h1>Banner {props.message}</h1>
    <h1> {props.name}</h1>
    </div>;
}
